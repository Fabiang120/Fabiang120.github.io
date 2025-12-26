"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Preload, Environment } from "@react-three/drei";

export default function Scene({ children, ...props }) {
    return (
        <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
            <Canvas {...props} className="pointer-events-auto">
                <Suspense fallback={null}>
                    {children}
                </Suspense>
                <Preload all />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
