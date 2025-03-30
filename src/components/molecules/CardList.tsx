import { Card, CardContent, CardHeader, CardTitle } from "../atoms/card";
import { CardProps } from "../constants/types";

interface CardListProps {
    items: CardProps[];
    onItemClick?: (title: string) => void;
}

export const CardList = ({ items, onItemClick }: CardListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map(({ icon, title, description }: CardProps) => (
                <Card
                    key={title}
                    className="bg-muted/50 cursor-pointer"
                    onClick={() => onItemClick?.(title)}
                >
                    <CardHeader>
                        <CardTitle className="grid gap-4 place-items-center">
                            {icon}
                            {title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>{description}</CardContent>
                </Card>
            ))}
        </div>
    );
};