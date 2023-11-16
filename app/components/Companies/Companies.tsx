"use client"
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/assets/slickCompany/airbnb.svg"
    },
    {
        imgSrc: "/assets/slickCompany/hubspot.svg"
    },
    {
        imgSrc: "/assets/slickCompany/microsoft.svg"
    },
    {
        imgSrc: "/assets/slickCompany/google.svg"
    },
    {
        imgSrc: "/assets/slickCompany/walmart.svg"
    },
    {
        imgSrc: "/assets/slickCompany/fedex.svg"
    },
]


// CAROUSEL SETTINGS
export default function Companies() {
    
        return (

            <div className="bg-lightpink py-8 md:py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-lg my-4 md:my-10 text-lightgrey text-center">
                    Trusted by companies of all sizes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.map((item, i) => (
                        <div
                            key={i}
                            className="flex justify-center items-center p-4"
                        >
                            <img
                                src={item.imgSrc}
                                alt={item.imgSrc}
                                className="max-w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>

        )
    }

