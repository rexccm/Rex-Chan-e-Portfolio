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
                            <li className="project" id="hipp"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/hipp-logo.png" alt="HiPP" /></li>
                            <li className="project" id="heybike"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/heybike-logo.png" alt="Heybike" /></li>
                            <li className="project" id="telford"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/telford-logo.png" alt="Telford (Tao Ti)" /></li>
                            <li className="project" id="south-stream"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/south-stream-logo.png" alt="South Stream" /></li>
                            <li className="project" id="nextcigar"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/nextcigar-logo.png" alt="nextCIGAR" /></li>
                            <li className="project" id="cleargo"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/cleargo-logo.png" alt="e-Jacob" /></li>
                            <li className="project" id="hoi-tin"><img width="240" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/hoi-tin-logo.png" alt="Hoi Tin" /></li>
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
                        <h4>CSS Layout Modules</h4>
                        <ul id="css-layout-modules">
                            <li><b>Flow</b></li>
                            <li><b>Box Model</b></li>
                            <li><b>Flexbox</b></li>
                            <li><b>Grid</b></li>
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
                    <h3 className="section-heading">AJAX</h3>
                    <ul className="related-career-history">
                        <li>Education: Certificate of Front-End Web Developer (CLAP@JC) | Internet Programming (A-)</li>
                        <li>Experience: Junior Web Developer, Frontend Team (CLEARgo)</li>
                    </ul>
                    <p>Asynchronous JavaScript and XML (AJAX) is a set of web development techniques that allows client-side scripts send requests to the web server programs in an asynchronous format without reloading the entire page.</p>
                    <p>Web server response was in XML format in the early days of AJAX, but most modern web services use JSON format for data interchange.</p>
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
                    <h3 className="section-heading">SEO</h3>
                    <ul className="related-career-history">
                        <li>Education: Certificate of Fundamentals of Digital Marketing (Google) | Certificate of Front-End Web Developer (CLAP@JC)</li>
                        <li>Experience: Junior Web Developer, Frontend Team (CLEARgo)</li>
                        <li>Projects: Broadway Lifestyle, nextCIGAR, Midea Eureka, CLEARgo</li>
                    </ul>
                    <p>Implemented SEO strategies such as semantic HTML, metadata, JSON-LD, heading hierarchy, and HTML attributes.</p>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">Computer Graphics Programming</h3>
                    <ul></ul>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">Backend Development</h3>
                    <ul className="related-career-history">
                        <li>Education: Internet Programming (A-) | Database Management (A)</li>
                    </ul>
                    <p>Developed basic concepts of CRUD, salting, and injections by PHP in Internet Programming course in Higher Diploma programme.</p>
                    <ul id="backend-concepts">
                        <li><b>CRUD Operations:</b> Create, read, update, and delete (CRUD) are the basic operations of data manipulation.</li>
                        <li><b>Salting:</b> Salting is a security technique used to enhance password hashing. It involves adding a random value called salt to the password before hashing it. This makes it more difficult for attackers to use precomputed tables such as rainbow tables to crack passwords.</li>
                        <li><b>Code Injections:</b> Injection attacks like SQL injection occur when an attacker is able to inject malicious code into a query or command in order to exfiltrate data or damage storage. Understanding how to prevent injections.</li>
                    </ul>
                    <section className="article-section">
                        <h4>CRUD Operations</h4>
                        <ul id="crud-operations">
                            <li><b>Create</b>: To create a resource, developer sends a POST request containing an object with properties to the API point like /api/products, which then responds with an object which has an ID that includes the relevant data fields.</li>
                            <li><b>Read</b>: To read a resource, developer sends a GET request to the API endpoint, and then it responds with a list or single object. We sends that request to the original API endpoint like /api/products when we want to read all of the data, while we sends the request to the endpoint with its ID like /api/products/1 if we to search for specific data. </li>
                            <li><b>UPDATE</b>: To update a resource, developer sends a PUT request containing the updated object to the API endpoint with ID, and then it responds with an object included the relevant data fields. </li>
                            <li><b>Delete</b>: To delete a resource, developer sends a DELETE request to the API endpoint with the target ID. However, the delete request is not prefer to use due to concerns about data integrity in reality. </li>
                        </ul>
                    </section>
                    <section className="article-section">
                        <h4>Salting</h4>
                        <figure>
                            <div className="one-way-dataflow-container">
                            <div className="one-way-dataflow-box"><p>rexChan123</p> <p>(Password)</p></div>
                            <div className="one-way-dataflow-arrow">→</div>
                            <div className="one-way-dataflow-box"><p>rexChan123rteZb</p> <p>(Password + Salt)</p></div>
                            <div className="one-way-dataflow-arrow">→</div>
                            <div className="one-way-dataflow-box"><p>4b6f9b7e5e2a6b4e6e5b1d32b9b96b223b6f2c5b5dbb5d3e1ff9d3d06b6a3b5a</p> <p>(Hashed Password + Salt)</p></div>
                            </div>
                            <figcaption className="figure-caption">Password Hash Salting Figure</figcaption>
                        </figure>
                    </section>
                    <section className="article-section">
                        <h4>Code Injections</h4>
                    </section>
                    <section className="article-section">
                        <h4>Database Management</h4>
                        <section className="article-section">
                            <h5>Data Hierarchy</h5>
                            <figure>
                                <ol id="data-hierarchy">
                                    <li className="data-level">Database / Storage</li>
                                    <li className="data-level">Table / File</li>
                                    <li className="data-level">Row / Record</li>
                                    <li className="data-level">Column / Field</li>
                                    <li className="data-level">Byte / Character</li>
                                    <li className="data-level">Bit</li>
                                </ol>
                                <figcaption className="figure-caption">Data Hierarchy Figure</figcaption>
                            </figure>
                        </section>
                        <section className="article-section">
                            <h5>Keys</h5>
                            <ul>
                                <li><b>Primary Key</b></li>
                                <li><b>Candidate Key</b></li>
                                <li><b>Composite Key</b></li>
                                <li><b>Super Key</b></li>
                                <li><b>Foreign Key</b></li>
                            </ul>
                        </section>
                        <section className="article-section">
                            <h5>Schema</h5>
                        </section>
                        <section className="article-section">
                            <h5>Data Dictionary</h5>
                        </section>
                        <section className="article-section">
                            <h5>Normalization</h5>
                        </section>
                        <section className="article-section">
                            <h5>ER Diagram</h5>
                        </section>
                        <section className="article-section">
                            <h5>SQL</h5>
                            <ul>
                                <li><b>Data Definition Language (DDL)</b></li>
                                <li><b>Data Manipulation Language (DML)</b></li>
                                <li><b>Data Control Language (DCL)</b></li>
                                <li><b>Transaction Control Language (TCL)</b></li>
                                <li><b>Joining</b></li>
                                <li><b>Views</b></li>
                            </ul>
                        </section>
                    </section>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">Design</h3>
                    <ul className="related-career-history">
                        <li>Education: Multimedia Technologies and Applications (B+) | Certificate of MangAnime Elementary Drawing (amps, Japanese Duly Qualified)</li>
                        <li>Experience: Freelance Designer</li>
                    </ul>
                    <p>Learned fundamental knowledge and skills of design, art, and traditional animation, and passed examination of elementary drawing held by amps, a duly constituted animation school under Cool Japan Policy introduced by Japanese government.</p>
                    <p>Experienced in pre-production, production, and post-production of freelance design and digital painting commissions.</p>
                    <section className="article-section">
                        <h4>UI</h4>
                        <section className="article-section">
                            <h5>Semiotics</h5>
                            <section className="article-section">
                                <h6>Paradigms and Syntagms</h6>
                                <p>In semiotics, all relations on a canvas are either paradigmatic or syntagmatic; an artwork is thus constructed at the intersection of the paradigmatic and syntagmatic axes.</p>
                                <ul id="semiotic-axes">
                                    <li><b>Paradigmatic Axis:</b> Relations between elements that can be substituted for one another in a given context.</li>
                                    <li><b>Syntagmatic Axis:</b> Relations between elements that combine the selected signs into one composition.</li>
                                </ul>
                            </section>
                            <section>
                                <h5></h5>
                            </section>
                        </section>
                        <section className="article-section">
                            <h5>Visual Elements</h5>
                        </section>
                        <section className="article-section">
                            <h5>Design Principles</h5>
                        </section>
                        <section className="article-section">
                            <h5>Deformation</h5>
                            <ul>
                                <li><b>Simplification</b></li>
                                <li><b>Exaggeration</b></li>
                                <li><b>Distortion</b></li>
                            </ul>
                        </section>
                    </section>
                    <section>
                        <h4>UX</h4>
                        <p>User Experience (UX)</p>
                        <section className="article-section">
                            <h5>Storytelling</h5>
                            <p>Storytelling uses spatial and temporal signs to convey experience consists of narrative, emotion and aesthetic qualities in imagination of a user.</p>
                            <p>One of the strength strategies is to use storytelling to take a non-tangible concept and making it relatable through concrete ideas.</p>
                        </section>
                        <section className="article-section">
                            <h5>Feedback</h5>
                            <p>We should visualize state changes through visual cues and animations to draw attention and explain to end-users about their actions and the system's responses.</p>
                            <p>For progress of a task, we should provide the degree of completion to indicate the current status and expected completion time.</p>
                        </section>
                    </section>
                    <section className="featured-gallery">
                        <h4 className="section-heading">Featured Works</h4>
                        <ul className="featured-works">
                            <figure className="featured-work">
                                <img width="320" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/male-painting_2023.jpg" />
                                <figcaption>Realistic Painting, 2024</figcaption>
                            </figure>
                            <figure className="featured-work">
                                <img width="320" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/sculpture-drawing_2022.jpg" />
                                <figcaption>Sculpture Drawing, 2022</figcaption>
                            </figure>
                            <figure className="featured-work">
                                <img width="320" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/character-rendering-assignment_2021.jpg" />
                                <figcaption>Character Rendering, 2021</figcaption>
                            </figure>
                            <figure className="featured-work">
                                <img width="320" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/mesh-line-art.png" />
                                <figcaption>Line Art, 2020</figcaption>
                            </figure>
                            <figure className="featured-work">
                                <img width="320" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/graduation-poster_2019.jpg" />
                                <figcaption>Graduation Poster, 2019</figcaption>
                            </figure>
                        </ul>
                    </section>
                </section>
            </article>
        </section>
    ); 
}