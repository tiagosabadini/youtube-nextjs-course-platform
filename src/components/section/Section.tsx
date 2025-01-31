import { Card, ICardProps } from "../card/Card";


interface ISectionProps {
    title: string;
    variant: "grid" | "h-list";
    items: ICardProps[]
}

export const Section = ({title, variant, items}: ISectionProps) => {

    return (
        <section className="flex flex-col gap-4 p-4">
            <h2 className="font-bold text-lg">{title}</h2>

            <ul data-variant={variant}
                className="
                    grid gap-4 
                    grid-cols-1
                    sm:grid-cols-none
                    data-[variant=grid]:sm:grid-cols-2 
                    data-[variant=grid]:md:grid-cols-3
                    data-[variant=h-list]:sm:grid-flow-col
                    data-[variant=h-list]:sm:overflow-scroll
                    ">

                        {items.map(
                            (item, index) => (
                                <li key={index} className="w-full data[variant=h-list]:sm:w-72">
                                <Card
                                    image={item.image}
                                    title={item.title}
                                    href={item.href}
                                    description={item.description} />
                                </li>
                            )
                            )}
                    
            </ul>
        </section>
    );
};