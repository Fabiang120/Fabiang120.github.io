import React from 'react';
import './Home.css';
import linkedin from 'C:/Users/Owner/Desktop/Website/fabiang120.github.io/src/Components/Pictures/website picture.jpg';

function Home(){
    return(
        <div className="home-contianer">
            <header className="home-header">
                <img src={linkedin} alt="Your Description" className="top-right-image" />
                <h1> Welcome To My Website</h1>
                <p>Fabian Garcia | 786-317-4619 | garciafabian@ufl.edu | sales@fabiansgeneralcorner.com </p>    
            </header>
            <section className="links-container">
            <a
                href="https://www.linkedin.com/in/fabian-garcia-787006292/"
                target="_blank"
                rel="noopener noreferrer"
                className="home-link linkedin"
            >
                LinkedIn
            </a>
            <a
                href="https://github.com/Fabiang120"
                target="_blank"
                rel="noopener noreferrer"
                className="home-link github"
            >
                GitHub
            </a>
            <a
                href="https://www.amazon.com/sp?seller=A2ELM6GDQHRBL5&marketplaceID=ATVPDKIKX0DER"
                target="_blank"
                rel="noopener noreferrer"
                className="home-link amazon"
            >
                Amazon Store
            </a>
            </section>
            <section className="about-me">
                <h1>About Me</h1>
                <p>
                    A large part of my identity is rooted in my Cuban heritage and the sacrifices my parents made
                    to provide me with the opportunities I have today. Their perseverance and dedication have always
                    inspired me to work hard and strive for success.
                </p>
                <p>
                    I am currently pursuing a Bachelor's degree in Computer Science at the University of Florida,
                    where I combine my passion for technology with a drive to learn and grow. Alongside my studies,
                    I am a businessman and the proud owner of Fabian's General Corner LLC, a wholesale company that
                    serves customers across all 50 states.
                </p>
            </section>
            <section className="Education">
                <h1>Education</h1>
                <p>
                    University of Florida, Bachelor’s in Computer Science Expected Graduation: May 2026
                    <p>Cumulative GPA: 3.40</p>
                    <p>Relevant Coursework: Introduction to Computer Organization, Data Structures and Algorithms, Introduction to Software Engineering, Operating Systems, Machine Learning Fundamentals</p>
                    <p>Involvement: Society of Software Developers & Society of Hispanic Professional Engineers</p>
                    <p>Honors: Dean’s List (Fall 2022, Summer 2023, Spring 2024, Fall 2024)</p>
                </p>
            </section>
            <section className="Projects">
                <h1>Projects</h1>
                <div className="project-grid">
                    <p>
                        Sourcing Optimizer Application (C++) March 2024- Present
                        <p> • Extracts data from Excel sheets and uses Amazon’s API to compare market prices against filters</p>
                        <p> • Implements multithreading, async HTTP requests, and cryptography with cpprest, OpenSSL, xlnt.</p>
                        <p> • Developed a web-based file upload system using HTML, JavaScript, and a local server with CORS header validation</p>
                    </p>
                    <p>
                        Criminal Facial Recognition Application (Python) February 2024
                        <p> • Developed a facial recognition system that enhances image resolution using machine learning</p>
                        <p> • Utilized OpenCV and eigenvalue-based algorithms for image upscaling and facial recognition</p>
                    </p>
                    <p>
                        US Camp Route Optimizer (3 team members, C++) December 2023
                        <p> • Optimizes US camping route planning based on user preferences, integrating distance thresholds and amenities</p>
                        <p> • Implements Dijkstra’s Algorithm and A* Search for efficient route calculation</p>
                    </p>
                </div>
            </section>
            <section className="Skills">
                <h1>Skills</h1>
                <p>• Programming Languages: C++ (2 years), Python (3 years), Lua (1 year), C ({'>'}1 year), Java Script ({'>'}1 year), HTML ({'>'}1 year)</p>
                <p>• Frameworks / Libraries: Google test, Fuse, CppRestSDK, OpenSSL, xlnt, Scikit-Learn, OpenCV, Keras, TensorFlow, Matplotlib.</p>
                <p>• Tools and Databases: Amazon Seller Api, AWS Tools, Git, GitHub, Jupyter Notebook, Roblox Studio, Valgrind</p>
                <p>• Languages: English (Native), Spanish (Native)</p>
                <p>• Certifications: Microsoft Office Specialist: Word, Excel, and PowerPoint.</p>
            </section>
            <section className="timeline-section">
                <h1>Business Timeline</h1>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-bubble" onClick={() => alert('April 2023: Business Founded')}>
                            <span>Apr 2023</span>
                        </div>
                        <p>Business Founded</p>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-bubble" onClick={() => alert('June 2023: LLC Founded')}>
                            <span>Jun 2023</span>
                        </div>
                        <p>LLC Founded</p>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-bubble" onClick={() => alert('July 2023: Sold in All 50 States')}>
                            <span>Jul 2023</span>
                        </div>
                        <p>Sold in All 50 States</p>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-bubble" onClick={() => alert('September 2023: First $5000 in Sales')}>
                            <span>Sep 2023</span>
                        </div>
                        <p>First $5000 in Sales</p>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-bubble" onClick={() => alert('April 2024: Reached 1000 Product Sales')}>
                            <span>Apr 2024</span>
                        </div>
                        <p>1000 Product Sales</p>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-bubble" onClick={() => alert('September 2024: Reached 2000 Product Sales')}>
                            <span>Sep 2024</span>
                        </div>
                        <p>2000 Product Sales</p>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-bubble" onClick={() => alert('October 2024: Reached $20000 in Sales')}>
                            <span>Oct 2024</span>
                        </div>
                        <p>$20000 in Sales</p>
                    </div>
                </div>
            </section>
        </div>
       // Founded in April 2023 //
       // June 2023 LLC Founded //
       // first $5000 sales was in september 2023 //
       // Reached 1000 product sales April 2024 //
       // Sold in all 50 states in July 2023 //
       // Reached $20000 sales in Oct 2024 //
       // Reached 2000 product sales Sep 2024 //
    );
}

export default Home;