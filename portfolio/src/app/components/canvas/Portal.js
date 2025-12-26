"use client";

import { MeshPortalMaterial, RoundedBox, Text, Environment, OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Portal() {
    const portalRef = useRef();

    return (
        <group position={[0, -2, 0]}>
            <RoundedBox args={[2, 3, 0.1]}>
                <MeshPortalMaterial side={THREE.DoubleSide}>
                    <color attach="background" args={['#222']} />
                    <Environment preset="sunset" />
                    <ambientLight intensity={0.5} />
                    <Text fontSize={0.3} position={[0, 1, 0]} color="white">
                        My Projects
                    </Text>
                    {/* Content inside the portal */}
                    <mesh position={[0, -0.5, -2]}>
                        <sphereGeometry args={[1, 32, 32]} />
                        <meshStandardMaterial color="hotpink" wireframe />
                    </mesh>
                </MeshPortalMaterial>
            </RoundedBox>
        </group>
    );
}
