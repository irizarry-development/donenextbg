"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { Circle } from "~/components/map/Circle";
import Button from "~/components/ui/Button";
import { COVERAGE_AREAS, COVERAGE_DETAIL_HEADER, COVERAGE_DETAIL_TEXT, COVERAGE_DISCLAIMER, DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM, COVERAGE_CTA_BUTTON_TEXT, COVERAGE_CTA_BUTTON_HREF, COVERAGE_POLYGONS } from "~/app/app.config";
import { Polygon } from "~/components/map/Polygon";

export default function CoveragePage() {
    return (
        <section className="coverage-page">
            <section className="coverage-map">
                <APIProvider
                    apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
                >
                    <Map
                        style={{ width: '100vw', height: '45rem' }}
                        defaultCenter={DEFAULT_MAP_CENTER}
                        defaultZoom={DEFAULT_MAP_ZOOM}
                        gestureHandling={'cooperative'}
                        disableDefaultUI={true}
                    >
                        <Polygon 
                            encodedPaths={COVERAGE_POLYGONS}
                            strokeWeight={1.5}
                        />
                    </Map>
                </APIProvider>
            </section>
            <section className="coverage-details">
                <h1>{COVERAGE_DETAIL_HEADER}</h1>
                <p>
                    {COVERAGE_DETAIL_TEXT}
                </p>
                <ul>
                    {COVERAGE_AREAS.map((area, index) => <li key={index}>{area}</li>)}
                </ul>
                <p>
                    {COVERAGE_DISCLAIMER}
                </p>
                <Button
                    text={COVERAGE_CTA_BUTTON_TEXT}
                    href={COVERAGE_CTA_BUTTON_HREF}
                    size="large"
                    color="primary"
                />
            </section>
        </section>
    )
}