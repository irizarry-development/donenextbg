"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { Circle } from "~/components/map/Circle";
import Button from "~/components/ui/Button";

export default function CoveragePage() {

    const DEFAULT_MAP_CENTER = {
        lat: 36.9636545,
        lng: -86.4805194
    }

    return (

        <section className="coverage-page">

            <section className="coverage-map">
                <APIProvider
                    apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
                >
                    <Map
                        style={{ width: '100vw', height: '50rem' }}
                        defaultCenter={DEFAULT_MAP_CENTER}
                        defaultZoom={7}
                        gestureHandling={'cooperative'}
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
            <section className="coverage-details">
                <h1>Our Coverage Area</h1>
                <p>
                    We are proud to serve the following areas:
                </p>
                <ul>
                    <li>Bowling Green</li>
                    <li>Glasgow</li>
                    <li>Scottsville</li>
                    <li>Franklin</li>
                    <li>Portland</li>
                    <li>Lebanon</li>
                    <li>Springfield</li>
                    <li>Elizabethtown</li>
                    <li>Greensburg</li>
                    <li>Edmonton</li>
                    <li>And more!</li>
                </ul>
                <p>
                    If you don't see your area listed, please contact us to see if we can help you.
                    
                </p>
                <Button
                        text="Contact Us"
                        href="/contact"
                        size="large"
                        color="primary"
                    />
            </section>
        </section>
    )
}