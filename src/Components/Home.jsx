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
import parting from 'C:/Users/Owner/Desktop/Website/fabiang120.github.io/src/Components/Pictures/parting.png';
import vaul from 'C:/Users/Owner/Desktop/Website/fabiang120.github.io/src/Components/Pictures/vaul.png';

import Hometown3DMap from './Hometown3DMap';
import { Button, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
        <div className="container-fluid px-0">
            <section className="about-me py-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-7 about-text text-center text-md-start">
                            <p className="fs-6 fs-lg-5">Hi, my name is</p>
                            <h1 className="fs-1 fs-lg-2 fs-xl-1">Fabian Garcia</h1>
                            <p className="fs-6 fs-lg-5">I sell, code and talk to people.</p>
                            <p className="fs-6 fs-lg-5">
                                Anyway, here is a picture of me and some Cuban things I relate to.
                            </p>
                        </div>

                        <div className="col-12 col-md-5 about-text text-center text-md-start">
                            <div className="row g-2 image-grid">
                                <div className="col-6">
                                    <div className="ratio ratio-1x1">
                                        <img src={linkedin} className="img-fluid object-fit-cover rounded" />
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="ratio ratio-1x1">
                                        <img src={cuba1} className="img-fluid object-fit-cover rounded" />
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="ratio ratio-1x1">
                                        <img src={cuba2} className="img-fluid object-fit-cover rounded" />
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="ratio ratio-1x1">
                                        <img src={cuba3} className="img-fluid object-fit-cover rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Education-svg-wrapper">
                <div className="custom-shape-divider-top-1737780762">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>
            <section className="Education">
                <div className="container education-content">
                    <Typography variant="h1" align="center" gutterBottom>
                        Education
                    </Typography>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-7 education-text text-center text-md-start">
                            <p>
                                University of Florida, Bachelor's in Computer Science<br />
                                Expected Graduation: May 2026
                            </p>
                            <p>Cumulative GPA: 3.51</p>
                            <p>
                                <strong>Relevant Coursework:</strong> Intro to Cryptology, Info and Database Sys 1,
                                Software Engineering, Operating Systems, Intro to Machine Learning,
                                Data Structures and Algorithms
                            </p>
                            <p>
                                <strong>Involvement:</strong> Society of Software Developers, Gator AI,
                                Society of Hispanic Professional Engineers
                            </p>
                            <p>
                                <strong>Honors:</strong> Dean's List (Fall 2022, Summer 2023, Spring 2024,
                                Fall 2024, Spring 2025) | HSF Scholar & HSF Scholarship Receiver
                            </p>
                        </div>

                        <div className="col-12 col-md-5 text-center text-md-start">
                            <div className="row justify-content-center g-4">
                                <div className="col-12 col-lg-6">
                                    <div className="education-image-wrapper">
                                        <div className="ratio ratio-1x1">
                                            <img
                                                src={Uf}
                                                className="img-fluid object-fit-cover rounded mx-auto d-block"
                                                alt="University of Florida"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6">
                                    <div className="education-image-wrapper">
                                        <div className="ratio ratio-1x1">
                                            <img
                                                src={Ferguson}
                                                className="img-fluid object-fit-cover rounded mx-auto d-block"
                                                alt="John A Ferguson Senior HS"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                <div className="container">
                    <div className="row align-items-stretch">
                        <Typography variant="h1" align="center" gutterBottom>
                            Projects
                        </Typography>
                        <div class="col-12 col-lg-4 g-4">
                            <div className="card">
                                <img src={parting} className="card-img-top" alt="Parting Gifts" />
                                <div className="card-body">
                                    <h3>Parting Gifts (4 team members, GO)</h3>
                                    <p>January 2025 - April 2025</p>
                                    <ul>
                                        <li>Built an application for creating digital wills, enabling users to schedule the future delivery of personal
                                                messages, videos, and files.</li>
                                        <li>Led development of a full-stack application using GO, JavaScript, HTML, Tailwind CSS, and Three.js.</li>
                                        <li>Engineered robust user management with bcrypt, SQLite, and secure HTTP requests.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 g-4">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Sourcing Optimizer Application (C++)</h3>
                                    <p>March 2024 - Present</p>
                                    <ul>
                                        <li>Extracts data from Excel sheets and uses Amazon's API to compare market prices against filters.</li>
                                        <li>Implements multithreading, async HTTP requests, and cryptography with cpprest, OpenSSL, xlnt.</li>
                                        <li>Developed a web-based file upload system using HTML, JavaScript, and a local server with CORS header validation.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 g-4">
                            <div className="card">
                                <img src={vaul} className="card-img-top" alt="Vault" />
                                <div className="card-body">
                                    <h3>Vault (4 team members, Python)</h3>
                                    <p>August 2024 - January 2025</p>
                                    <ul>
                                        <li>Developed a time capsule web app with group chats, a post feed, and scheduled openings.</li>
                                        <li>Designed the backend with Flask and SQLite, adding secure authentication, real-time messaging, file
                                            uploads, and search features.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section className="Skills">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 Skills-text">
                            <div className="custom-shape-divider-top-1737781070">
                                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                                </svg>
                            </div>

                            <Typography variant="h1" align="center" gutterBottom className="fw-bold">
                                Skills
                            </Typography>

                            <p><strong>Programming Languages:</strong> C++, SQL, Java, Python, Swift, Go, Lua, C, JavaScript, HTML</p>
                            <p><strong>Frameworks / Libraries / Technologies:</strong> Google Test, Fuse, CppRestSDK, OpenSSL, xlnt, Scikit Learn, OpenCV, Keras, TensorFlow, Matplotlib, React, Flask, HTML, CSS</p>
                            <p><strong>Tools and Databases:</strong> Amazon Seller Api, AWS, Git, Valgrind</p>
                            <p><strong>Languages:</strong> English (Native), Spanish (Native)</p>
                            <p><strong>Certifications:</strong> Microsoft Office Specialist: Word, Excel, Power Point, Forklift Certification.</p>
                        </div>
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
                <div className="container">
                    <div className="row align-items-center">
                    <Typography variant="h1" gutterBottom>
                            Business Timeline
                    </Typography>
                        <div className="col-12 col-md-7">
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
                        <div className="col-12 col-md-5">
                            <div className="row g-4">
                                <div className="col-12">
                                    <img src={work} alt="Work" className="img-fluid object-fit-cover rounded" />
                                </div>
                                <div className="col-12">
                                    <img src={store} alt="Store" className="img-fluid object-fit-cover rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="map-section">
                <div className="custom-shape-divider-top-1761695006">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className="container">
                    <Typography variant="h1" align="center" gutterBottom>
                        My Hometown In 2D
                    </Typography>
                    <div className="map-container">
                        <Hometown3DMap />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;