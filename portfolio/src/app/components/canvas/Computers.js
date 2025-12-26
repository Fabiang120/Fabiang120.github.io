"use client";

import { useGLTF, PresentationControls, Float } from "@react-three/drei";

export default function Computers() {
    return (
        <group>
            <PresentationControls
                global
                config={{ mass: 1, tension: 170, friction: 26 }}
                snap={{ mass: 4, tension: 400 }}
                rotation={[0, 0.3, 0]}
                polar={[-Math.PI / 3, Math.PI / 3]}
                azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
                <Float rotationIntensity={0.4}>
                    {/* Placeholder Box until actual Computer GLB is provided */}
                    <mesh>
                        <boxGeometry args={[2, 1.5, 0.1]} />
                        <meshStandardMaterial color="#333" />
                    </mesh>
                    {/* Screen Placeholder */}
                    <mesh position={[0, 0, 0.06]}>
                        <planeGeometry args={[1.8, 1.3]} />
                        <meshBasicMaterial color="#0055ff" />
                    </mesh>
                </Float>
            </PresentationControls>
        </group>
    );
}
