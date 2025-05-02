import WorldMap from "react-svg-worldmap";

export const CustomWorldMap = () => {
  return (
    <WorldMap
      color="#BF817F"
      backgroundColor="transparent"
      borderColor="#BF817F"
      size="xxl"
      data={[{ country: "ir", value: 1 }]}
    />
  );
};
