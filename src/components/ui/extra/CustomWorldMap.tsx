import type { Data } from "react-svg-worldmap";
import WorldMap from "react-svg-worldmap";

const data: Data = [
  { country: "ir", value: 1 }, // Iran
];

export const CustomWorldMap = () => {
  return (
    <WorldMap
      color="#BF817F"
      backgroundColor="transparent"
      borderColor="#BF817F"
      size="xxl"
      data={data}
    />
  );
};
