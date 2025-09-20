import { type ColorXYZ } from "@/Types";

const calcColorXYZDistance = (xyz_1: ColorXYZ, xyz_2: ColorXYZ) => {
  return Math.sqrt(
    (xyz_1.X - xyz_2.X) ** 2 +
      (xyz_1.Y - xyz_2.Y) ** 2 +
      (xyz_1.Z - xyz_2.Z) ** 2
  );
};

export default calcColorXYZDistance;
