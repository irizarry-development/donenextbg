"use client";

import { useEffect, useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { CAROUSEL_DELAY } from "~/app/app.config";
import Image from 'next/image';

export default function Carousel() {

    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive(active + 1 > 9 ? 0 : active + 1);
        }, CAROUSEL_DELAY * 1000);
        return () => clearInterval(interval);
    })

    return (
        <section className="carousel">
            <Image className="active-carousel-image" src={`/carousel/carousel-${active + 1}.jpeg`} alt={`Carousel Image ${active}`} width={800} height={400} />
            <section className="carousel-arrows">
                <FaCircleChevronLeft
                    className="carousel-arrow"
                    onClick={() => setActive(active - 1 < 0 ? 9 : active - 1)}
                />
                <FaCircleChevronRight
                    className="carousel-arrow"
                    onClick={() => setActive(active + 1 > 9 ? 0 : active + 1)}
                />
            </section>
        </section>
    )
}