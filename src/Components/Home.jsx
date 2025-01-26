import React from 'react';
import './Home.css';
import linkedin from 'C:/Users/Owner/Desktop/Website/fabiang120.github.io/src/Components/Pictures/IMG_5365.jpg';
import cuba1 from 'C:/Users/Owner/Desktop/Website/fabiang120.github.io/src/Components/Pictures/cuba1.jpg';
import cuba2 from 'C:/Users/Owner/Desktop/Website/fabiang120.github.io/src/Components/Pictures/cuba2.jpg';
import cuba3 from 'C:/Users/Owner/Desktop/Website/fabiang120.github.io/src/Components/Pictures/cuba3.jpg';
import Ferguson from 'C:/Users/Owner/Desktop/Website/fabiang120.github.io/src/Components/Pictures/Ferguson.jpg';
import Html from 'C:/Users/Owner/Desktop/Website/fabiang120.github.io/src/Components/Pictures/Html.png';
import Python from 'C:/Users/Owner/Desktop/Website/fabiang120.github.io/src/Components/Pictures/Python.jpg';
import C from 'C:/Users/Owner/Desktop/Website/fabiang120.github.io/src/Components/Pictures/C.png';
import Aws from 'C:/Users/Owner/Desktop/Website/fabiang120.github.io/src/Components/Pictures/Aws.png';
import Uf from 'C:/Users/Owner/Desktop/Website/fabiang120.github.io/src/Components/Pictures/Uf.webp';
import work from 'C:/Users/Owner/Desktop/Website/fabiang120.github.io/src/Components/Pictures/work.jpg';
import store from 'C:/Users/Owner/Desktop/Website/fabiang120.github.io/src/Components/Pictures/amaz.png';

import { Button, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

function Home() {
    return (
        <div className="home-container">
            {/*
            <header className="home-header">
                <Typography variant="body1" align="center" color="textSecondary">
                    Fabian Garcia | 786-317-4619 | garciafabian@ufl.edu | sales@fabiansgeneralcorner.com
                </Typography>
            </header>

            <section className="links-container">
                <Button
                    className="home-link linkedin"
                    href="https://www.linkedin.com/in/fabian-garcia-787006292/"
                    target="_blank"
                >
                    LinkedIn
                </Button>
                <Button
                    className="home-link github"
                    href="https://github.com/Fabiang120"
                    target="_blank"
                >
                    GitHub
                </Button>
                <Button
                    className="home-link amazon"
                    href="https://www.amazon.com/sp?seller=A2ELM6GDQHRBL5&marketplaceID=ATVPDKIKX0DER"
                    target="_blank"
                >
                    Amazon Store
                </Button>
            </section>
            */}

            <section className="about-me">
                <div className="about-me-content">
                    <div className="about-me-text">
                        <p>Hi, my name is</p>
                        <h1>Fabian Garcia</h1>
                        <p>I sell stuff, code stuff, and talk to people.</p>
                        <p>
                            Anyway, here is a picture of me and some Cuban things I relate
                            to.
                        </p>
                    </div>
                    <div className="about-me-images">
                        <img
                            src={linkedin}
                            alt="Fabian Garcia"
                            className="about-me-image personal-image"
                        />
                        <img src={cuba1} alt="Cuban Heritage 1" className="about-me-image" />
                        <img src={cuba2} alt="Cuban Heritage 2" className="about-me-image" />
                        <img src={cuba3} alt="Cuban Heritage 3" className="about-me-image" />
                    </div>
                </div>
            </section>

            <section className="Education">
                <div className="education-content">
                    <div className="education-text">
                        <div class="custom-shape-divider-top-1737780762">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                            </svg>
                        </div>
                        <Typography variant="h1" align="center" gutterBottom>
                            Education
                        </Typography>
                        <p>
                            University of Florida, Bachelor's in Computer Science<br />
                            Expected Graduation: May 2026
                        </p>
                        <p>Cumulative GPA: 3.40</p>
                        <p>
                            <strong>Relevant Coursework:</strong> Introduction to Computer Organization, Data Structures and Algorithms, Introduction to Software Engineering, Operating Systems, Machine Learning Fundamentals
                        </p>
                        <p>
                            <strong>Involvement:</strong> Society of Software Developers & Society of Hispanic Professional Engineers
                        </p>
                        <p>
                            <strong>Honors:</strong> Dean's List (Fall 2022, Summer 2023, Spring 2024, Fall 2024)
                        </p>
                    </div>
                    <div className="education-images">
                        <img
                            src={Uf}
                            alt="University of Florida"
                            className="uf-image"
                        />
                        <img
                            src={Ferguson}
                            alt="Ferguson Hall"
                            className="ferguson-image"
                        />
                    </div>
                </div>
            </section>

            <section className="Projects">
                <div className="custom-shape-divider-top-1737781272">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
                <Typography variant="h1" align="center" gutterBottom>
                    Projects
                </Typography>
                <div className="project-grid">
                    <div className="project-card">
                        <h3>Sourcing Optimizer Application (C++)</h3>
                        <p>March 2024 - Present</p>
                        <ul>
                            <li>Extracts data from Excel sheets and uses Amazon's API to compare market prices against filters.</li>
                            <li>Implements multithreading, async HTTP requests, and cryptography with cpprest, OpenSSL, xlnt.</li>
                            <li>Developed a web-based file upload system using HTML, JavaScript, and a local server with CORS header validation.</li>
                        </ul>
                    </div>
                    <div className="project-card">
                        <h3>Criminal Facial Recognition Application (Python)</h3>
                        <p>February 2024</p>
                        <ul>
                            <li>Developed a facial recognition system that enhances image resolution using machine learning.</li>
                            <li>Utilized OpenCV and eigenvalue-based algorithms for image upscaling and facial recognition.</li>
                        </ul>
                    </div>
                    <div className="project-card">
                        <h3>US Camp Route Optimizer (3 team members, C++)</h3>
                        <p>December 2023</p>
                        <ul>
                            <li>Optimizes US camping route planning based on user preferences, integrating distance thresholds and amenities.</li>
                            <li>Implements Dijkstra's Algorithm and A* Search for efficient route calculation.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="Skills">
                <div className="Skills-content">
                    <div className="Skills-text">
                        <div class="custom-shape-divider-top-1737781070">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                            </svg>
                        </div>
                    <Typography variant="h1" align="center" gutterBottom>
                        Skills
                    </Typography>
                    <p>• Programming Languages: C++ (2 years), Python (3 years), Lua (1 year), C ({'>'}1 year), JavaScript ({'>'}1 year), HTML ({'>'}1 year)</p>
                    <p>• Frameworks / Libraries: Google test, Fuse, CppRestSDK, OpenSSL, xlnt, Scikit-Learn, OpenCV, Keras, TensorFlow, Matplotlib.</p>
                    <p>• Tools and Databases: Amazon Seller Api, AWS Tools, Git, GitHub, Jupyter Notebook, Roblox Studio, Valgrind</p>
                    <p>• Languages: English (Native), Spanish (Native)</p>
                    <p>• Certifications: Microsoft Office Specialist: Word, Excel, and PowerPoint.</p>                  
                    </div>
                    <div className="Skills-images">
                        <img
                            src={Aws}
                            alt="Aws"
                            className="coding-image"
                        />
                        <img
                            src={Python}
                            alt="Python"
                            className="coding-image"
                        />
                        <img
                            src={C}
                            alt="C"
                            className="coding-image"
                        />
                        <img
                            src={Html}
                            alt="Html"
                            className="coding-image"
                        />
                    </div>

                </div>
            </section>

            <section className="timeline-section">
                <div className="custom-shape-divider-top-1737781375">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="timeline-content">
                    <div className="timeline">
                        <Typography variant="h1" gutterBottom>
                            Business Timeline
                        </Typography>
                        <Timeline position="alternate">
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot sx={{ backgroundColor: "#084a8a;" }} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="h6">April 2023</Typography>
                                    <Typography variant="body2">Business Founded</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot sx={{ backgroundColor: "#444444;" }} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="h6">June 2023</Typography>
                                    <Typography variant="body2">LLC Founded</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot sx={{ backgroundColor: "#b36b00" }} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="h6">July 2023</Typography>
                                    <Typography variant="body2">Sold in All 50 States</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot sx={{ backgroundColor: "#084a8a" }} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="h6">September 2023</Typography>
                                    <Typography variant="body2">First $5000 in Sales</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot sx={{ backgroundColor: "#444444" }} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="h6">April 2024</Typography>
                                    <Typography variant="body2">Reached 1000 Product Sales</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot sx={{ backgroundColor: "#084a8a" }} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="h6">September 2024</Typography>
                                    <Typography variant="body2">Reached 2000 Product Sales</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot sx={{ backgroundColor: "#ff9900" }} />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="h6">October 2024</Typography>
                                    <Typography variant="body2">Reached $20000 in Sales</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                    <div className="image-container">
                        <img src={work} alt="Work" className="work-image" />
                        <img src={store} alt="Store" className="store-image" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;