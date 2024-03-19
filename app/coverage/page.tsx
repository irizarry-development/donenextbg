"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { Circle } from "~/components/map/Circle";
import Button from "~/components/ui/Button";
import { COVERAGE_AREAS, COVERAGE_DETAIL_HEADER, COVERAGE_DETAIL_TEXT, COVERAGE_DISCLAIMER, DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM, MAP_CIRCLE_STROKE_COLOR, MAP_CIRCLE_FILL_COLOR, MAP_CIRCLE_FILL_OPACITY, MAP_CIRCLE_RADIUS, MAP_CIRCLE_STROKE_OPACITY, MAP_CIRCLE_STROKE_WEIGHT, COVERAGE_CTA_BUTTON_TEXT, COVERAGE_CTA_BUTTON_HREF } from "~/app/app.config";

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
                        <Circle
                            radius={MAP_CIRCLE_RADIUS}
                            center={DEFAULT_MAP_CENTER}
                            strokeColor={MAP_CIRCLE_STROKE_COLOR}
                            strokeOpacity={MAP_CIRCLE_STROKE_OPACITY}
                            strokeWeight={MAP_CIRCLE_STROKE_WEIGHT}
                            fillColor={MAP_CIRCLE_FILL_COLOR}
                            fillOpacity={MAP_CIRCLE_FILL_OPACITY}
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