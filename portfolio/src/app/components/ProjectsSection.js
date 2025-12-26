"use client";

export default function ProjectsSection() {
    return (
        <section className="projects-section border border-white">
            <h2>Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <h3>Parting Gifts</h3>
                    <p>Encrypted digital will platform that delivers your final messages and gifts when you're gone.</p>
                </div>
                <div className="project-card">
                    <h3>Amazon FBA Sourcing Optimizer</h3>
                    <p>C++ tool that automates Amazon product research, saving 6+ hours daily and driving 20K+ sales.</p>
                </div>
                <div className="project-card">
                    <h3>Vault</h3>
                    <p>Time capsule social media app to lock away memories today and unlock them in the future.</p>
                </div>
            </div>
        </section>
    );
}
