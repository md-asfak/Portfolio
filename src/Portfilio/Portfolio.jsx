import React from 'react'
import ashfak from './Images/md_ashfak.jpeg'
import project_1 from "./Images/project1.png"
import project_2 from "./Images/Project2.png"
import project_3 from "./Images/project3.png"
import project_4 from "./Images/project4.png"
import project_5 from "./Images/project5.png"
import project_6 from "./Images/project6.png"
import project_7 from "./Images/project7.png"
import project_8 from "./Images/project8.png"
import project_9 from "./Images/project9.png"

export default function Portfolio() {
    return (
        <>
            <header>
                <nav className='Container'>
                    <div className="logo">Portfolio</div>

                    <ul>
                        <a href="#hero"><li>Home</li></a>
                        <a href="#project"><li>Project</li></a>
                        <a href="#contact"><li>Contact</li></a>

                    </ul>

                </nav>
            </header>

            <main>
                <section id='hero'>
                    <div className="Container">

                        <div className="hero_img">
                            <img src={ashfak} alt="#" />
                        </div>

                        <div className="hero_content">
                            <h1> <span className='color lg_text'> Hi,</span>
                                <span className='sm_text'>I am </span>
                                <span className='lg_text'>Ashfakur Rahman</span>
                            </h1>

                            <h2 className='role'>Frontend Developer.....</h2>
                        </div>

                    </div>
                </section>

                <section id="project">
                    <h1>Projects</h1>
                    <div className="Container">
                        <div className="Project_container">
                            <div className="grid_item">
                                <img src={project_1} alt="#" />
                                <div className="card">
                                    <h4>Atribute Website</h4>
                                    <a href="https://md-asfak.github.io/Atribute/">Go Now</a>

                                </div>
                            </div>

                            <div className="grid_item">
                                <img src={project_2} alt="#" />
                                <div className="card">
                                    <h4>Job Application Form</h4>
                                    <a href="https://md-asfak.github.io/Login_Page/">Go Now</a>
                                </div>
                            </div>

                            <div className="grid_item">
                                <img src={project_3} alt="#" />
                                <div className="card">
                                    <h4>Paralax Website</h4>
                                    <a href="https://md-asfak.github.io/Paralax_Web/">Go Now</a>
                                </div>
                            </div>

                            <div className="grid_item">
                                <img src={project_4} alt="#" />
                                <div className="card">
                                    <h4>Landing Website</h4>
                                    <a href="https://md-asfak.github.io/Landing_Web/">Go Now</a>
                                </div>
                            </div>

                            <div className="grid_item">
                                <img src={project_5} alt="#" />
                                <div className="card">
                                    <h4>Restuarant Website</h4>
                                    <a href="https://md-asfak.github.io/Restuarant_Web/">Go Now</a>
                                </div>
                            </div>

                            <div className="grid_item">
                                <img src={project_6} alt="#" />
                                <div className="card">
                                    <h4>Music Website</h4>
                                    <a href="https://md-asfak.github.io/my_web/">Go Now</a>
                                </div>
                            </div>

                            <div className="grid_item">
                                <img src={project_7} alt="#" />
                                <div className="card">
                                    <h4>Youtube Clone Website</h4>
                                    <a href="https://md-asfak.github.io/Youtube_clone/">Go Now</a>
                                </div>
                            </div>

                            <div className="grid_item">
                                <img src={project_8} alt="#" />
                                <div className="card">
                                    <h4>Documentation Website</h4>
                                    <a href="https://md-asfak.github.io/Document_Web/">Go Now</a>
                                </div>
                            </div>
                            
                            <div className="grid_item">
                                <img src={project_9} alt="#" />
                                <div className="card">
                                    <h4>Blog Website</h4>
                                    <a href="https://md-asfak.github.io/Blog_Web/">Go Now</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section id='contact'>
                    <div className="Container">
                        
                            <h1>Let's work together</h1>
                            <div className="top_icon">

                                <div className="contact_way">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <h3>Facebook</h3>
                                </div>

                                <div className="contact_way">
                                    <i class="fa-brands fa-linkedin"></i>
                                    <h3>Linkedin</h3>
                                </div>

                                <div className="contact_way">
                                    <i class="fa-brands fa-instagram"></i>
                                    <h3>Instagram</h3>
                                </div>

                            </div>
                            
                            <div className="bottom_contact">

                                <div className="contact_way">
                                    <i class="fab fa-github"></i>
                                    <h3>Github</h3>
                                </div>

                                <div className="contact_way">
                                    <i class="fa fa-mobile"></i>
                                    <h3>Call Me</h3>
                                </div>

                            </div>



                    </div>
                </section>

            </main>

            <footer>
                <div className="container">
                    <p>Copyright by Md Ashfak @2023</p>
                </div>
            </footer>

        </>
    )
}
