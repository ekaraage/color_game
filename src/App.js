import './App.css';
import { useState } from 'react';
import { Block, Block_with_input } from './Block';
import {
    TwitterShareButton,
    TwitterIcon,
  } from "react-share";

function linear_to_xyz(col_linear) { 
    let col_xyz = [0, 0, 0];
    col_xyz[0] = 0.4124 * col_linear[0] + 0.3576 * col_linear[1] + 0.1805 * col_linear[2];
    col_xyz[1] = 0.2126 * col_linear[0] + 0.7152 * col_linear[1] + 0.0722 * col_linear[2];
    col_xyz[2] = 0.0193 * col_linear[0] + 0.1192 * col_linear[1] + 0.9505 * col_linear[2];

    return col_xyz;
    
}

function calc_distance(xyz_1, xyz_2) { 
    return Math.sqrt((xyz_1[0] - xyz_2[0]) * (xyz_1[0] - xyz_2[0]) + (xyz_1[1] - xyz_2[1]) * (xyz_1[1] - xyz_2[1]) + (xyz_1[2] - xyz_2[2]) * (xyz_1[2] - xyz_2[2]));
}

function to_linear(col_rgb) {
    let col_linear = [0, 0, 0];

    col_linear[0] = col_rgb.red;
    col_linear[0] /= 255.0;
    if (col_linear[0] < 0.04045) {
        col_linear[0] = col_linear[0] / 12.92;
    } else { 
        col_linear[0] = Math.pow((col_linear[0] + 0.055) / 1.055, 2.4);
    }

    col_linear[1] = col_rgb.green;
    col_linear[1] /= 255.0;
    if (col_linear[1] < 0.04045) {
        col_linear[1] = col_linear[1] / 12.92;
    } else { 
        col_linear[1] = Math.pow((col_linear[1] + 0.055) / 1.055, 2.4);
    }

    col_linear[2] = col_rgb.blue;
    col_linear[2] /= 255.0;
    if (col_linear[2] < 0.04045) {
        col_linear[2] = col_linear[2] / 12.92;
    } else { 
        col_linear[2] = Math.pow((col_linear[2] + 0.055) / 1.055, 2.4);
    }
    
    return col_linear;
}

function show_score(col_rgb_1, col_rgb_2) {

    let p = 1.0-calc_distance(linear_to_xyz(to_linear(col_rgb_1)), linear_to_xyz(to_linear(col_rgb_2)));
    let score = Math.round(p * 10000) / 100;
    return score;
}



function App() {
    let [color_input, setColor_input] = useState({
        red: 0,
        green: 0,
        blue: 0,
    });
    let [col, setCol] = useState({
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256),
    });
    let handleChange = (input) => e => {
        setColor_input({ ...color_input, [input]: e.target.value });
    };

    let [is_visible, setIs_visible] = useState(true);
    let score = show_score(col, color_input);
    const title = `色合わせゲームをプレイ！スコアは${score}でした！`;


    return (
        <>
        <div className="App">
            <header className="App-header">
                <Block color_rgb={col} text="問題"></Block>
                <Block_with_input color_rgb={color_input} is_visible={is_visible} text="正解" handleChange={e => handleChange(e)}></Block_with_input>
                
                {is_visible &&
                    <button onClick={() => setIs_visible(is_visible = false)}>答えを表示！</button>
                }
                {(!is_visible) && <>
                        スコア: {score}
                        <button onClick={() => {
                            setIs_visible(is_visible = true);
                            setCol({ red: Math.floor(Math.random() * 256), green: Math.floor(Math.random() * 256), blue: Math.floor(Math.random() * 256) });
                        }}>戻る</button>
                        <TwitterShareButton title={title} url="https://ekaraage.github.io/color_game">
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>
                        
                        </>
                }
            </header>
            
        </div>
        
        </>
    );
}

export default App;
