"use client";

import { useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const carouselItems = [
    {
        title: "Red",
        color: "red"
    },
    {
        title: "Blue",
        color: "blue"
    },
    {
        title: "Green",
        color: "green"
    },
    {
        title: "Yellow",
        color: "yellow"
    },
    {
        title: "Purple",
        color: "purple"
    },
    {
        title: "Orange",
        color: "orange"
    },
    {
        title: "Pink",
        color: "pink"
    },
    {
        title: "Black",
        color: "black"
    },
    {
        title: "White",
        color: "white"
    }
]

export default function Carousel() {

    const [active, setActive] = useState(0);

    const _renderCarouselItem = () => {

        const currentItem = carouselItems[active];

        return (
            <section
                className="active-carousel-image"
                style={{ backgroundColor: currentItem.color }}
            >
            </section>
        )

    }
    
    return (
        <section className="carousel">
            <section className="active-carousel-item">
                {_renderCarouselItem()}
            </section>
            <section className="carousel-arrows">
                <FaCircleChevronLeft 
                    className="carousel-arrow"
                    onClick={() => setActive(active - 1 < 0 ? carouselItems.length - 1 : active - 1)}
                />
                <FaCircleChevronRight
                    className="carousel-arrow"
                    onClick={() => setActive(active + 1 > carouselItems.length - 1 ? 0 : active + 1)}   
                />
            </section>
        </section>
    )
}