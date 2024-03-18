"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { Fragment } from "react";
import { FaEnvelopeCircleCheck, FaPhoneFlip } from "react-icons/fa6";
import { Circle } from "~/components/map/Circle";

const DEFAULT_MAP_CENTER = {
    lat: 36.9636545,
    lng: -86.4805194
    }

export default function ContactPage() {
    return (
        <section className="contact-page">
            <section className="contact-details">
                <h1>Contact Us</h1>
                <p>Get in touch with us today to get started on your next project.</p>
                <section className="contact-methods">
                    <a href="tel:123-456-7890" className="contact-method">
                        <FaPhoneFlip />
                    </a>
                    <a href="mailto:hello@test.com">
                        <FaEnvelopeCircleCheck />
                    </a>
                </section>
            </section>
            <section className="coverage-details">
                <h1>Our Coverage Area</h1>
                <p>Check out our coverage area to see if we service your area.</p>

                <section className="coverage-map">
                    <APIProvider
                    apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
                    >
                        <Map
                            style={{width: '100vw', height: '100vh'}}
                            defaultCenter={DEFAULT_MAP_CENTER}
                            defaultZoom={8}
                            gestureHandling={'greedy'}
                            disableDefaultUI={true}
                        >
                            <Circle
                        radius={120000}
                        center={DEFAULT_MAP_CENTER}
                        strokeColor={'#0c4cb3'}
                        strokeOpacity={1}
                        strokeWeight={3}
                        fillColor={'#3b82f6'}
                        fillOpacity={0.3}
                        />
                        </Map>
                    </APIProvider>
                </section>
            </section>
            
        </section>
    )
}