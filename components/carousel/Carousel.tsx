"use client";

import { useState } from "react";

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

    const _renderCarouselItems = () => {
        return carouselItems.map((item, index) => {
            return (
                <section 
                    key={index}
                    className={`carousel-item ${active === index ? "active" : ""}`}
                    style={{ backgroundColor: item.color }}
                >
                    <h1>{item.title}</h1>
                </section>
            )
        })
    }

    const _renderCarouselButtons = () => {
        return carouselItems.map((item, index) => {
            return (
                <button 
                    key={index}
                    className={`carousel-button ${active === index ? "active" : ""}`}
                    onClick={() => setActive(index)}
                >
                    {item.title}
                </button>
            )
        })
    }
    
    return (
        <section className="carousel">
            <section className="carousel-items">
                {_renderCarouselItems()}
            </section>
            <section className="carousel-buttons">
                {_renderCarouselButtons()}
            </section>
        </section>
    )
}