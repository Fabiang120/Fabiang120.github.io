"use client";

import { useEffect, useRef } from "react";
import {
    AmbientLight,
    DirectionalLight,
    LinearSRGBColorSpace,
    Mesh,
    MeshPhongMaterial,
    PerspectiveCamera,
    Scene,
    SphereGeometry,
    UniformsUtils,
    Vector2,
    WebGLRenderer,
} from "three";
import { fragmentShader, vertexShader } from "./shaders/shaders";

export function DisplacementSphere() {
    const canvasRef = useRef();
    const renderer = useRef();
    const camera = useRef();
    const scene = useRef();
    const sphere = useRef();
    const uniforms = useRef();
    const start = useRef(Date.now());

    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        renderer.current = new WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            powerPreference: "high-performance",
        });

        renderer.current.setSize(width, height);
        renderer.current.setPixelRatio(1);
        renderer.current.outputColorSpace = LinearSRGBColorSpace;

        camera.current = new PerspectiveCamera(54, width / height, 0.1, 100);
        camera.current.position.z = 52;

        scene.current = new Scene();

        const material = new MeshPhongMaterial();
        material.onBeforeCompile = shader => {
            uniforms.current = UniformsUtils.merge([
                shader.uniforms,
                { time: { value: 0 } },
            ]);
            shader.uniforms = uniforms.current;
            shader.vertexShader = vertexShader;
            shader.fragmentShader = fragmentShader;
        };

        const geometry = new SphereGeometry(32, 128, 128);
        sphere.current = new Mesh(geometry, material);
        scene.current.add(sphere.current);

        scene.current.add(new AmbientLight(0xffffff, 0.8));
        const light = new DirectionalLight(0xffffff, 1.5);
        light.position.set(100, 100, 200);
        scene.current.add(light);

        const animate = () => {
            requestAnimationFrame(animate);
            if (uniforms.current?.time) {
                uniforms.current.time.value = 0.00005 * (Date.now() - start.current);
              }
            sphere.current.rotation.y += 0.002;
            renderer.current.render(scene.current, camera.current);
        };

        animate();

        return () => renderer.current.dispose();
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
        />
    );
}
