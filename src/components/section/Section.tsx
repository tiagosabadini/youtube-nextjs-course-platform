"use client";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Card, ICardProps } from "../card/Card";
import { UIEvent, useRef, useState } from "react";


interface ISectionProps {
    title: string;
    variant: "grid" | "h-list";
    items: ICardProps[]
}

export const Section = ({title, variant, items}: ISectionProps) => {

    const scrollLeft = useRef<HTMLUListElement>(null);
    const [scrollAt, setScrollAt] = useState<'start' | 'middle' | 'end'>('start');

    const handleSetScroll = (scroll: number) => {
        const currentScrollLeft = scrollLeft.current?.scrollLeft || 0;
        scrollLeft.current?.scrollTo({ behavior: 'smooth', left: currentScrollLeft + scroll });
    };

    const handleScroll = (event: UIEvent<HTMLUListElement>) => {
        const scrollWidth = event.currentTarget.scrollWidth;
        const clientWidth = event.currentTarget.clientWidth;
        const scrollLeft = event.currentTarget.scrollLeft;
        if(scrollLeft === 0){
            setScrollAt('start');
        }else if((scrollWidth - clientWidth) == scrollLeft){
            setScrollAt('end');
        }else{
            setScrollAt('middle');
        }
    };
    
    return (
        <section className="flex flex-col gap-4 p-4">
            <h2 className="font-bold text-lg">{title}</h2>

            <ul ref={scrollLeft} 
                data-variant={variant}
                onScroll={handleScroll}
                className="
                    grid gap-4 
                    grid-cols-1
                    sm:grid-cols-none
                    data-[variant=grid]:sm:grid-cols-2 
                    data-[variant=grid]:md:grid-cols-3
                    data-[variant=h-list]:sm:grid-flow-col
                    data-[variant=h-list]:sm:overflow-scroll
                    ">

                        {
                            (variant == "h-list") ? 
                                <button 
                                    disabled={scrollAt == 'start'}
                                    onClick={() => handleSetScroll(-300)}
                                className="w-14 h-14 bg-primary rounded-full flex justify-center items-center my-auto sticky left-0 -ml-14 transition-opacity disabled:opacity-0">
                                    <MdKeyboardArrowLeft size={32} />
                                </button> : ""                            
                        }

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


                        {
                            (variant == "h-list") ? 
                            <button 
                                disabled={scrollAt == 'end'}
                                onClick={() => handleSetScroll(300)}
                                className="w-14 h-14 bg-primary rounded-full flex justify-center items-center my-auto sticky right-0 -ml-14 transition-opacity disabled:opacity-0">
                                <MdKeyboardArrowRight size={32} />
                            </button> : ""
                        }
                    
            </ul>
        </section>
    );
};