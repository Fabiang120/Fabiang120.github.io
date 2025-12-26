"use client";
import { useState } from "react";
import { DisplacementSphere } from "./canvas/DisplacementSphere";


export default function IntroSection() {
    return (
        // We need a animated image in the back ground screen must be transparent
        // My name needs to be there 
        // Plus the text developer and + languages 
        <div className="intro-section relative w-full border border-white">
            <DisplacementSphere />
            <h3 className="Inter">Fabian Garcia</h3>
            <h1>Developer</h1>
            <h1>Languages: C++ Java JavaScript Python HTML/CSS React SQL TailWind Bootstrap Next Node.js</h1>
        </div>
    );
}