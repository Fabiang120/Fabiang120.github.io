import React from 'react';
import './Home.css';

function Home(){
    return(
        <div className="home-contianer">
            <header className="home-header">
                <h1> Welcome To My Website</h1>
                <p>Fabian Garcia| 786-317-4619| garciafabian@ufl.edu| sales@fabiansgeneralcorner.com</p>    
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
        </div>

        // Display my Name bold //
        // Then my phone and school email, personal and sales //
        // Then my links//

        // Then I want an about me section//

        // Dashboard section//
        // This is education, skills, projects and certifications //
        
        // Business Timeline //
    );
}

export default Home;