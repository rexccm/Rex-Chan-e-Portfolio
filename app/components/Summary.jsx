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
                <section id="page-header" className="article-section">
                    <h3 className="section-heading">Knowledge Tree</h3>
                    <p>The following presents my knowledge tree in the industry.</p>
                </section>
                <section id="web-authoring" className="article-section">
                    <h3 className="section-heading">Web Authoring</h3>
                    <ul className="related-career-history">
                        <li>Education: E-Commerce and Web Application Development (B+) | Certificate of Front-End Web Developer (CLAP@JC)</li>
                        <li>Experience: Junior Web Developer, Frontend Team (CLEARgo)</li>
                        <li>Projects: Broadway Lifestyle, HiPP, Telford (Tao Ti), South Stream, Heybike, nextCIGAR, Midea Eureka, Hoi Tin (Jacobson)</li>
                    </ul>
                    <p>Experienced in authoring standard-based web pages epecially e-Commerce using the web development layers.</p>
                    <figure>
                        <figcaption>Web Development Layers</figcaption>
                    </figure>
                    <ul id="web-development-layers">
                        <li><b>Content Layer: </b>This layer is created in HyperText Markup Language (HTML) which contains the structure comprised of document type definition (doctype), tags, and character entities, and contents such as text, images, videos, and hyperlinks of web pages.</li>
                        <li><b>Presentation Layer: </b>This layer is created in Cascading Style Sheets (CSS) which defines the appearance including the global, local, and pseudo styles, layout systems, media queries, and animations of web pages.</li>
                        <li><b>Behaviour Layer: </b>This layer is created in scripting language, often JavaScript, which implements event-driven, functional, and imperative logic, document object model (DOM) manipulation, and Web APIs.</li>
                    </ul>
                </section>
                <section id="ui-slicing" className="article-section">
                    <h3 className="section-heading">UI Slicing</h3>
                    <ul>
                        <li>Education: Certificate of Front-End Web Developer (CLAP@JC)</li>
                        <li>Experience: Junior Web Developer, Frontend Team (CLEARgo)</li>
                        <li>Projects: Broadway Lifestyle, Telford (Tao Ti), HiPP, Heybike, South Stream, nextCIGAR, Midea Eureka, Hoi Tin (Jacobson), e-Jacob</li>
                    </ul>
                    <section className="article-section">
                        <h4>Selectors</h4>
                        <ul id="selectors">
                            <li><b>IDs (#)</b>: A unique identity code of an HTML element on single page. e.g. #header, #main, #footer</li>
                            <li><b>Classes (.)</b>: A class name shared by multiple HTML elements. e.g. .gallery, .section-heading, .description</li>
                            <li><b>Pseudo-classes (:)</b>: A pseudo-class let us apply styles based on state transitions on the grounds of FSM. e.g. :hover, :focus, :active, :visited, :disabled, :first-child, :nth-child(even), :lang(en), :before, :first-letter</li>
                        </ul>
                    </section>
                    <section className="article-section">
                        <h4>Box Model</h4>
                        <p>The CSS box model is essentially a box wraps around each HTML element where a box consists of the below: </p>
                        <ul>
                            <li><b>Content</b>: The content like plain text or multimedia of the box.</li>
                            <li><b>Padding</b>: The area inside the border and surrounding the content.</li>
                            <li><b>Border</b>: A visible border of the box between the padding and margin.</li>
                            <li><b>Margin</b>: The area outside the border and surrounding the border.</li>
                        </ul>
                    </section>
                    <section className="article-section">
                        <h4>Layout</h4>
                        <ul id="layouts">
                            <li><b>Table</b>: Traditional nested HTML layout system consists of table rows and items included table head and table data.</li>
                            <li><b>Float</b>: Traditional CSS layout system placed element on the left or right.</li>
                            <li><b>Flexbox</b>: A 1-dimentional CSS3 layout module for greater control over arranging elements along on x-axis or y-axis.</li>
                            <li><b>Grid</b>: A 2-dimentional CSS3 layout module imported concept of gird from print design into web. It provides a system for laying elements out in rows and columns.</li>
                        </ul>
                    </section>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">Web Animation</h3>
                    <ul className="related-career-history">
                        <li>Education: Introduction to 3D Animation (B+) | Certificate of MangAnime Elementary Drawing (amps, Japanese Duly Qualified)</li>
                        <li>Experience: Junior Web Developer, Frontend Team (CLEARgo)</li>
                        <li>Projects: CLEARgo.com, Midea Eureka, Heybike</li>
                    </ul>
                    <p>Familiar with web animation which adds the dimension of time to the GUI of a web page in order to convey information organized by data, feedback, and aesthetic qualities to end-users through storytelling.</p>
                    <section className="article-section">
                        <h4>Animation Types</h4>
                        <ul id="animation-types">
                            <li><b>Straight Ahead Animation:</b> This is a difficult technique where the UX/UI designer or frontend developer generates a series of frames in sequence, one after the other. However, it is the most experimental approach which allows us to make decisions and change ideas as we want. I created straight ahead animation with image sequences generated by UX/UI designer for Heybike X-Series page header.</li>
                            <li><b>Pose-to-Pose Animation:</b> This is the most popular approach applied in frontend web development, as it forms the core of CSS transitions and keyframes. By defining the significant points in a series of actions, we can separate the animation into keyframes and in-betweens. Notably, many web standard methods handle the tweening for us automatically.</li>
                        </ul>
                    </section>
                    <section className="article-section">
                        <h4 className="section-heading">​Web Animation Methods</h4>
                        <ul id="web-animation-methods">
                            <li><b>Transitions:</b> By applying the concept of finite-state machines (FSM), CSS fills in the in-betweens smoothly over a specified duration between two states.</li>
                            <li><b>Keyframes:</b> CSS keyframes implement the traditional animation theory of pose-to-pose since the frontend developer can break down the timeline into several phases by defining the significant points as keyframes.</li>
                            <li><b>setInterval:</b> A basic JavaScript timing method used to trigger animations at fixed intervals, though less efficient than requestAnimationFrame.</li>
                            <li><b>requestAnimationFrame:</b> The high-performance method for scripted animations, ensuring synchronization with the browser's refresh rate.</li>
                            <li><b>jQuery Effects:</b> jQuery provides simplification of commonly complex animation operations such as fade-in/out, slide-up/down, and animate, etc.</li>
                        </ul>
                    </section>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">Interactions​</h3>
                    <ul className="related-career-history">
                        <li>Education: Certificate of Front-End Web Developer (CLAP@JC) | Internet Programming (A-)</li>
                        <li>Experience: Junior Web Developer, Frontend Team (CLEARgo)</li>
                        <li>Projects: Broadway Lifestyle, Heybike, Midea Eureka, Telford (Tao Ti), nextCIGAR, South Stream, CLEARgo.com</li>
                    </ul>
                    <p>Created interactions to give feedback and enrich the user experience (UX) for end-users when they are browsing web pages.</p>
                    <section className="article-section">
                        <h4>Interaction Types</h4>
                        <p>In Human-Computer Interaction (HCI), there are two major types of interaction on graphical user interface (GUI):</p>
                        <ul className="interaction-types">
                            <li><b>Direct interaction:</b> The physical actions on visual representations of the objects of interest which are typically limited to selecting content included with a click or a tap, and moving it with a drag.</li>
                            <li><b>Mediated interaction:</b> The actions of end-user transformed and interpreted to complex commands by using widgets known as instruments such as menus, scrollbars and dialog boxes, before being applied to the target object.</li>
                        </ul>
                    </section>
                    <section className="article-section">
                        <h4 className="section-heading">Instruments</h4>
                        <p>Instruments are objects that can be manipulated by the end-users to affect other objects where they must have clear technical properties which can be combined with those of the target objects.</p>
                        <p>For example, a color swatch is an ubiquitous custom instrument often using to choose variant product (configurable product) on recently e-Commerce sites.</p>
                        <p>In jQuery UI, there are two types of ready-to-use widgets based on​ above interactions:</p>
                        <ul className="instruments">
                            <li><b>Low-level interaction helpers:</b> The underlying core based on direct interactions that are designed to work with physical action performed by end-user primarily mouse events. For instance, draggable, droppable, resizable, selectable, and sortable.</li>
                            <li><b>Higher-level widgets:</b> The instruments often build upon the foundation provided by the low-level helpers triggering side effects after end-users performed actions. For instance, accordion, tabs, dialog, auto-complete, slider, and date-picker.</li>
                        </ul>
                    </section>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">Data Interchange</h3>
                    <p>XML and JSON are used for data interchange in client-server communication.</p>
                    <p>In modern web development, JSON is preferred whenever the additional features implemented by XML are deemed to be unnecessary.</p>
                    <section className="article-section">
                        <h4 className="section-heading">XML</h4>
                        <p>Extensible Markup Language (XML) is a markup language which represents data as tag-based tree structure in data interchange.</p>
                        <p>Unlike JSON, XML uses namespaces to distinguish between properties that are different but share the same name.</p>
                        <p>While JSON limited data types to basic types, XML supports many complex data types.</p>
                    </section>
                    <section className="article-section">
                        <h4 className="section-heading">JSON</h4>
                        <p>JavaScript Object Notation (JSON) is the most popular interchange language in modern web development since JSON is directly understandable to JavaScript on the grounds of vast majority of JavaScript popularity.</p>
                        <p>JSON is a lightweight interchange format which is parsed quicker than XML with less computational resource usage.</p>
                        <p>JSON uses a map with key-value pairs while it can use array in value.</p>
                    </section>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">AJAX</h3>
                    <ul className="related-career-history">
                        <li>Education: Certificate of Front-End Web Developer (CLAP@JC) | Internet Programming (A-)</li>
                        <li>Experience: Junior Web Developer, Frontend Team (CLEARgo)</li>
                    </ul>
                    <p>Asynchronous JavaScript and XML (AJAX) is a set of web development techniques that allows client-side scripts send requests to the web server programs in an asynchronous format without reloading the entire page.</p>
                    <p>Web server response was in XML format in the early days of AJAX, but most modern web services use JSON format for data interchange.</p>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">Computer Graphics Programming</h3>
                    <ul className="related-career-history">
                        <li>Education: Mathematics in Interactive Media (B+) | Integrated 2D and 3D Graphics Programming (A-)</li>
                        <li>Experience: Junior Web Developer, Frontend Team (CLEARgo)</li>
                        <li>Projects: CLEARgo.com, Integrated 2D and 3D Graphics Programming Project</li>
                    </ul>
                    <p>Created scrolling event-driven 3D transformation animation including rotation and translation for CLEARgo oversea expansion page using Three.js library on WebGL environment.</p>
                    <p>Developed Chrismas gift collection mini game by DirectX in Higher Diploma course.</p>
                    <section className="article-section">
                        <h3 className="section-heading">Mathematics in Interactive Media</h3>
                        <section className="article-section">
                            <h4>2D Transformations</h4>
                            <p>We can represent a 2D transformation as a 3x3 matrix: </p>
                            <ul>
                                <li><b>Translation</b></li>
                                <li><b>Rotation</b></li>
                                <li><b>Scale</b></li>
                                <li><b>Skew</b></li>
                            </ul>
                        </section>
                        <section className="article-section">
                            <h4>3D Transformations</h4>
                            <p>We can represent a 3D transformation as a 4x4 matrix to account for the z-axis (depth) and homogeneous coordinates: </p>
                            <ul>
                                <li><b>Translation</b></li>
                                <li><b>Rotation</b></li>
                                <li><b>Scale</b></li>
                            </ul>
                        </section>
                    </section>
                    <section className="article-section">
                        <h3 className="section-heading">Computer Graphics Programming</h3>
                        <p>Rasterizers like WebGL and DirectX convert 3D vector primitives included triangles (polygons), points (vertices), and lines (edges) into 2D pixel-based graphics on the screen.</p>
                        <section className="featured-gallery">
                            <h4 className="section-heading">Featured Works</h4>
                            <ul className="featured-works">
                                <li><img width="400" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/directx-presentation01.jpg" /></li>
                                <li><img width="400" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/directx-presentation02.jpg" /></li>
                                <li><img width="400" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/directx-presentation03.jpg" /></li>
                                <li><img width="400" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/directx-presentation04.jpg" /></li>
                                <li><img width="400" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/directx-presentation05.jpg" /></li>
                            </ul>
                        </section>
                    </section>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">Control Structures</h3>
                    <ul id="control-structures">
                        <li><b>Sequence:</b> A series of statements executed one after another in the order they are listed.</li>
                        <li><b>Selection:</b> It is used to choose between different paths of execution based on a condition.</li>
                        <li><b>Iteration:</b> It allows the execution of one or more statements multiple times.</li>
                    </ul>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">OOP</h3>
                    <ul className="related-career-history">
                        <li>Education: Object Oriented Programming (B)</li>
                        <li>Experience: Junior Web Developer, Frontend Team (CLEARgo)</li>
                        <li>Projects: Broadway Lifestyle, South Stream, Heybike, nextCIGAR, HiPP</li>
                    </ul>
                    <p>Objects are instances of classes or prototypes while classes or prototypes define the attributes and behavior of objects. There are three features of OOP: </p>
                    <ul id="oop-features">
                        <li><b>Encapsulation:</b> Bundling data and methods that operate on the data within a single class or prototype.</li>
                        <li><b>Inheritance:</b> Allowing a class or prototype to inherit properties and methods from its parent class or prototype.</li>
                        <li><b>Polymorphism:</b> Enabling objects of different types to be treated as instances of the same type through a common interface.</li>
                    </ul>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">Modern Frontend Frameworks</h3>
                    <ul className="related-career-history">
                        <li>Education: Certificate of Front-End Web Developer (CLAP@JC) | Logic and Artificial Intelligence in Games (B+)</li>
                        <li>Experience: Junior Web Developer, Frontend Team (CLEARgo)</li>
                        <li>Projects: Telford (Tao Ti), e-Portfolio</li>
                    </ul>
                    <p>Practiced the following concepts of modern frontend web frameworks during development.</p>
                    <section className="article-section">
                        <h4>FSM</h4>
                        <p>Finite-state machine (FSM) is a design pattern applied in modern frontend web frameworks which provide a clear representation of a finite number of states with transitions between these states triggered by events or specific conditions.</p>
                    </section>
                    <section className="article-section">
                        <h4>State Management</h4>
                        <p>The view updates automatically through data-binding when the state of data model changes so as to synchronize state and visual presentation. For instance, Knockout observables, React hooks, and Vue Reactivity APIs are variants of reactive state managment system.</p>
                        <p>State management is a self-contained system consists of three parts:</p>
                        <ul>
                            <li><b>State:</b> The source of truth of a web application at a specific point in time that is carried by the observable properties. e.g. a string, an integer, a boolean, or an array.</li>
                            <li><b>View:</b> A declarative presentation of user interface mapping the current state. e.g. an unordered list mapping with data in repetitive structure.</li>
                            <li><b>Actions:</b> The events or transition condition that trigger updates in the state based on user input. e.g. a click event, a mouseover event, a keyup event, or an input value.</li>
                        </ul>
                    </section>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">Web Components</h3>
                    <ul className="related-career-history">
                        <li>Experience: Junior Web Developer, Frontend Team (CLEARgo)</li>
                        <li>Projects: Broadway Lifestyle, South Stream, nextCIGAR</li>
                    </ul>
                    <section className="article-section">
                        <h4>Custom Elements</h4>
                    </section>
                    <section className="article-section">
                        <h4>Shadow DOM</h4>
                        <p>Shadow DOM serves for encapsulation of internal DOM structure and style rules to prevent style leakage from the light DOM.</p>
                        <ul className="">
                            <li><b>Shadow Host:</b> The regular DOM node that the shadow DOM is attached to.</li>
                            <li><b>Shadow Root:</b> The root node of the shadow DOM tree.</li>
                            <li><b>Shadow Tree:</b> The DOM subtree within the shadow root that contains the elements and styles encapsulated from the light DOM.</li>
                        </ul>
                    </section>
                    <section className="article-section">
                        <h4>HTML Templates</h4>
                    </section>
                    <section className="article-section">
                        <h4>Custom State</h4>
                        <p>The CustomStateSet and :state() are mechanisms for defining and managing custom state within custom elements based on state management. </p>
                        <ul className="custom-state-mechanisms">
                            <li><b>CustomStateSet</b>: The CustomStateSet interface stores an ordered list of state values for an custom element and allows states to be added and removed from the set.</li>
                            <li><b>:state()</b>: The :state() pseudo-class allows for styling based on the current state of the element.</li>
                        </ul>
                    </section>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">Headless CMS</h3>
                    <ul className="related-career-history">
                        <li>Experience: Junior Web Developer, Frontend Team (CLEARgo)</li>
                        <li>Projects: Telford (Tao Ti), e-Porfolio</li>
                    </ul>
                    <p>Worked on headless content management systems (Headless CMS) included Shopify Hydrogen and Magento PWA Studio which decoupled frontend from backend repository and allow for independent scalability and provided better security.</p>
                    <p>A headless CMS makes content accessible via an API for applications displaying on any device, without pre-defined frontend templates.</p>
                    <p>For instance, Hydrogen is a Shopify React-based Remix framework fetching raw data typically in JSON by GraphQL from the Storefront API of Shopify CMS while Magento PWA Studio fetching databy GraphQL through state management library Apollo Client.</p>
                    <ul>
                        <li><b>Hydrogen</b></li>
                        <li><b>Magento PWA Studio</b></li>
                    </ul>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">SEO</h3>
                    <ul className="related-career-history">
                        <li>Education: Certificate of Fundamentals of Digital Marketing (Google) | Certificate of Front-End Web Developer (CLAP@JC)</li>
                        <li>Experience: Junior Web Developer, Frontend Team (CLEARgo)</li>
                        <li>Projects: Broadway Lifestyle, nextCIGAR, Midea Eureka, CLEARgo.com</li>
                    </ul>
                    <p>Implemented SEO strategies such as semantic HTML, metadata, JSON-LD, heading hierarchy, and HTML attributes.</p>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">MVC Architecture</h3>
                    <p>The Model-View-Controller (MVC) is an architectural pattern which seperates an application into three main components based on seperation of concepts (SoC) while each component is built to handle specific development aspect of the application.</p>
                    <p>MVC is one of the most frequently used industry-standard web development framework to create scalable and extensible projects. And this architecture inspired variants included MVVM and MVP.</p>
                    <section className="article-section">
                        <h4 className="section-heading">Model</h4>
                        <p>Model corresponds to all data-related logic which can represent data transfering between View and Controller or business logic-related data.</p>
                        <p>For instance, an PHP object retrieve data from database, and then manipulate and update it.</p>
                    </section>
                    <section className="article-section">
                        <h4 className="section-heading">View</h4>
                        <p>View is used for all the presentation logic in user interface (UI) components like React components which the end-user ineracts with.</p>
                        <p>For instance, React root component pass the data through properties (props) downward to children React components.</p>
                    </section>
                    <section className="article-section">
                        <h4 className="section-heading">Controller</h4>
                        <p>Controller acts as an interface between Model and View to process all the business logic and incoming requests, manipulate data using Model and interact with View and to render the screen.</p>
                        <p>For instance, Controller handle all the interactions and inputs from and Controller View and update the database using Controller Model.</p>
                    </section>
                </section>
            </article>
        </section>
    ); 
}