import WorldMap from "react-svg-worldmap";

export default function CustomWorldMap() {

    const data = [
        { country: "ir", value: 1 },
    ];

    return (
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <WorldMap
                color="#BF817F"
                backgroundColor={"transparent"}
                borderColor="#BF817F"
                title=""
                value-suffix=""
                size="xxl"
                data={data}
            />
        </div>
    );
}
