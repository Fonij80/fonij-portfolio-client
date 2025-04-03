interface IconListProps {
    icons: JSX.Element[];
    onItemClick?: (index: number) => void;
}

export const IconList = ({ icons, onItemClick }: IconListProps) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4 gap-4 pt-10">
            {icons.map((icon, index) => (
                <div
                    key={index}
                    className="flex justify-center items-center cursor-pointer"
                    onClick={() => onItemClick?.(index)}
                >
                    <div style={{ fontSize: '5em' }}>
                        {icon}
                    </div>
                </div>
            ))}
        </div>
    );
};
