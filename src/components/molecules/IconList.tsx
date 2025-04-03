import { useState } from "react";

interface IconListProps {
    icons: JSX.Element[];
    onItemClick?: (index: number) => void;
}

export const IconList = ({ icons, onItemClick }: IconListProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setSelectedIndex(index);
        onItemClick?.(index);
    };

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4 gap-4 pt-10">
            {icons.map((icon, index) => (
                <div
                    key={index}
                    className="flex justify-center items-center cursor-pointer"
                    onClick={() => handleClick(index)}
                >
                    <div
                        style={{ fontSize: "5em" }}
                        className={`transition-colors ${selectedIndex === index ? "text-green-500" : "text-gray-500"
                            }`}
                    >
                        {icon}
                    </div>
                </div>
            ))}
        </div>
    );
};
