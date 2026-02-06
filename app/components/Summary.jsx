import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import useMediaQuery from './useMediaQuery';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Summary({ content }) { 
    const isMobile = useMediaQuery('(max-width: 768px)');
    let slides = 0;

    if(isMobile) {
        /* Mobile */
        slides = 1; 
    } else { 
        /* Desktop */
        slides = 3; 
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000, 
        slidesToShow: slides,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 2550, settings: { slidesToShow: 3 } }, 
            { breakpoint: 769, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <section id="summary" className="shopify-section">
            <article className="section-content">
                <div className="video-hero-wrapper">
                    <div className="video-container">
                        <iframe src="https://www.youtube.com/embed/W4_rUHyA6WE?autoplay=1&mute=1&rel=0&hd=1&loop=1&controls=0&playlist=W4_rUHyA6WE" title="Computer Game Development Graduation Group Project" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <section className="article-section">
                    <h2 className="section-heading">Summary</h2>
                    <article className="description">{content}</article>
                </section>
                <section className="gallery">
                    <Slider {...settings}>
                        <div>
                            <figure>
                                <img src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/IMG-20251226-WA0012.jpg" />
                                <figcaption>2025</figcaption>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <img src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/cleargo-photo.jpg" />
                                <figcaption>CLEARgo</figcaption>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <img src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/clapjc-certificate-photo.jpg" />
                                <figcaption>CLAP@JC</figcaption>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <img src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/freelance-2021.jpg" />
                                <figcaption>Freelance Designer</figcaption>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <img src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/2021-birthday-photo.jpg" />
                                <figcaption>amps</figcaption>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <img src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/higher-diploma-photo.jpg" />
                                <figcaption>CUSCS</figcaption>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <img src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/secondary-school-photo.jpg" />
                                <figcaption>LKPFC</figcaption>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <img src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/child-family-photo.png" />
                                <figcaption>Chan Family</figcaption>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <img src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/baby-photo.png" />
                                <figcaption>Born</figcaption>
                            </figure>
                        </div>
                    </Slider>
                </section>
                <section id="career-corporations" className="article-section">
                    <article className="section-header">
                        <h3 className="section-heading">Corporations</h3>
                        <p>Gained fulltime and freelance experience in the below corporations.</p>
                    </article>
                    <div className="logo-list-container">
                        <ul id="corporations" className="logo-list">
                            <li className="corporation" id="cleargo"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/cleargo-logo.png" alt="CLAERgo" /></li>
                            <li className="corporation" id="penker"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/penker-logo.png" alt="Penker" /></li>
                        </ul>
                    </div>
                </section>
                <section id="educational-organization" className="article-section">
                    <article className="section-header">
                        <h3 className="section-heading">Educational Organizations</h3>
                        <p>Developed knowledge and skills in the below educational organizations.</p>
                    </article>
                    <div className="logo-list-container">
                        <ul id="organizations" className="logo-list">
                            <li className="organization" id="shopify-academy"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/shopify-academy-logo.png" alt="hopify Academy" /></li>
                            <li className="organization" id="clap-jc"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/clapjc-logo.png" alt="CLAP@JC" /></li>
                            <li className="organization" id="google-digital-garage"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/google-digital-garage.png" alt="Google Digital Garage" /></li>
                            <li className="organization" id="amps"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/amps-logo.png" alt="amps" /></li>
                            <li className="organization" id="cuscs"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/cuscs-logo.png" alt="CUSCS" /></li>
                        </ul>
                    </div>
                </section>
                <section id="project-clients" className="article-section">
                    <article className="section-header">
                        <h3 className="section-heading">Projects</h3>
                        <p>Participated in the following projects in frontend web development career.</p>
                    </article>
                    <div className="logo-list-container">
                        <ul id="projects" className="logo-list">
                            <li className="project" id="broadway-lifestyle"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/broadway-logo.png" alt="Broadway Lifestyle" /></li>
                            <li className="project" id="midea-eureka"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/eureka-logo.png" alt="Midea Eureka" /></li>
                            <li className="project" id="hoi-tin"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/hoi-tin-logo.png" alt="Hoi Tin" /></li>
                            <li className="project" id="hipp"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/hipp-logo.png" alt="HiPP" /></li>
                            <li className="project" id="heybike"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/heybike-logo.png" alt="Heybike" /></li>
                            <li className="project" id="telford"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/telford-logo.png" alt="Telford (Tao Ti)" /></li>
                            <li className="project" id="south-stream"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/south-stream-logo.png" alt="South Stream" /></li>
                            <li className="project" id="suunto"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/suunto-logo.png" alt="e-Jacob" /></li>
                            <li className="project" id="nextcigar"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/nextcigar-logo.png" alt="nextCIGAR" /></li>
                            <li className="project" id="e-jacob"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/e-jacob-logo.png" alt="e-Jacob" /></li>
                        </ul>
                    </div>
                </section>
            </article>
        </section>
    ); 
}