import { useState } from "react";

export function Block({ color_rgb, text }) { 
    const red = color_rgb.red
    const green = color_rgb.green
    const blue = color_rgb.blue
    return (
      <>
        <center>
          {text}
        </center>
        <span style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          width: 120,
          height: 120,
          float:"right",
  
        }}> </span>
      </>
    )
}

export function Block_with_input({color_rgb, text ,is_visible, handleChange }) { 
    const red = color_rgb.red
    const green = color_rgb.green
    const blue = color_rgb.blue
    const show_input = is_visible;
    
    return (
        <>
        <center>
            {text}
        </center>
        <span style={{
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            width: 120,
            height: 120,
            float:"right",
            }}> </span>
        {show_input && 
            <div>
                Red
                <input
                    type="number"
                    value={red}
                    min="0"
                    max="255"
                    onChange={handleChange('red')}
                >
                </input>
                Green
                <input
                    type="number"
                    value={green}
                    min="0"
                    max="255"
                    onChange={handleChange('green')}
                >
                </input>
                Blue
                <input
                    type="number"
                    value={blue}
                    min="0"
                    max="255"
                    onChange={handleChange('blue')}
                >
                </input>
            </div>
        }
        </>       
        
    )
}