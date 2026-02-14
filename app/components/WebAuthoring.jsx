const WebAuthoring = () => { 
    return (
        <>
        <section id="web-authoring" className="article-section">
                    <h3 className="section-heading">Web Authoring</h3>
                    <ul className="related-career-history">
                        <li>Education: E-Commerce and Web Application Development (B+) | Certificate of Front-End Web Developer (CLAP@JC)</li>
                        <li>Projects: Broadway Lifestyle, HiPP, Telford (Tao Ti), South Stream, Heybike, nextCIGAR, Midea Eureka, Hoi Tin (Jacobson)</li>
                    </ul>
                    <p>Experienced in authoring standard-based web pages epecially e-Commerce using the web development layers.</p>
                    <ul id="web-development-layers">
                        <li><b>Content Layer</b>: This layer is created in HyperText Markup Language (HTML) which contains the structure comprised of document type definition (doctype), tags, and character entities, and contents such as text, images, videos, and hyperlinks of web pages.</li>
                        <li><b>Presentation Layer</b>: This layer is created in Cascading Style Sheets (CSS) which defines the appearance including the global, local, and pseudo styles, layout systems, media queries, and animations of web pages.</li>
                        <li><b>Behaviour Layer</b>: This layer is created in scripting language, often JavaScript, which implements event-driven, functional, and imperative logic, document object model (DOM) manipulation, and Web APIs.</li>
                    </ul>
                    <figure>
                        <table>
                            <tbody>
                                <tr><td>Content Layer</td></tr>
                                <tr><td>Presentation Layer</td></tr>
                                <tr><td>Behaviour Layer</td></tr>
                            </tbody>
                        </table>
                        <figcaption>Web Development Layers</figcaption>
                    </figure>
                </section>
                <section id="ui-slicing" className="article-section">
                    <h3 className="section-heading">UI Slicing</h3>
                    <ul>
                        <li>Education: Certificate of Front-End Web Developer (CLAP@JC)</li>
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
                    <h3 className="section-heading">Interactions​</h3>
                    <ul className="related-career-history">
                        <li>Education: Certificate of Front-End Web Developer (CLAP@JC) | Internet Programming (A-)</li>
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
                        <p>XML has to be parsed with an XML parser.</p>
                    </section>
                    <section className="article-section">
                        <h4 className="section-heading">JSON</h4>
                        <p>JavaScript Object Notation (JSON) is the most popular interchange language in modern web development since JSON is directly understandable to JavaScript on the grounds of vast majority of JavaScript popularity.</p>
                        <p>JSON is a lightweight interchange format which is parsed quicker than XML with less computational resource usage.</p>
                        <p>JSON uses a map with key-value pairs while it can use array in value.</p>
                        <p>Unlike XML, JSON can be directly parsed by a standard JavaScript function.</p>
                    </section>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">AJAX</h3>
                    <ul className="related-career-history">
                        <li>Education: Certificate of Front-End Web Developer (CLAP@JC) | Internet Programming (A-)</li>
                    </ul>
                    <p>Asynchronous JavaScript and XML (AJAX) is a set of web development techniques that allows client-side scripts send requests to the web server programs in an asynchronous format without reloading the entire page.</p>
                    <p>Web server response was in XML format in the early days of AJAX, but most modern web services use JSON format for data interchange.</p>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">Computer Graphics Programming</h3>
                    <ul className="related-career-history">
                        <li>Education: Mathematics in Interactive Media (B+) | Integrated 2D and 3D Graphics Programming (A-)</li>
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
                        <section className="article-section">
                            <h4>Collision Detection</h4>
                            <p>Rather than checking the actual shape of the object, graphics programmers often use the following bounding areas to detect if the both of the bounding areas intersect to each other.</p>
                            <ul id="collision-detection">
                                <li><b>AABB</b>: The axis-aligned bounding box (AABB) is a rectangular box surrounding an object defined by minimum and maximum corner points on x-axis, y-axis, and z-axis of the minimum 2D/3D space which is used in the simplest and fastest collision detection by checking if all their axis-projected shadows overlap.</li>
                                <li><b>Bounding Sphere</b>: The bounding sphere enclosing an object which used in hit detection by comparing the radius versus the distance between the center and the hitpoint.</li>
                            </ul>
                        </section>
                    </section>
                    <section className="article-section">
                        <h3 className="section-heading">Computer Graphics Programming</h3>
                        <p>Rasterizers like WebGL and DirectX convert 3D vector primitives included triangles (polygons), points (vertices), and lines (edges) into 2D pixel-based graphics on the screen.</p>
                        <p>The below is a project implemented AABB collision detection under DirectX environment.</p>
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
                    <h3 className="section-heading">Algorithm</h3>
                    <ul className="related-career-history">
                        <li>Education: Data Structure and Algorithms (B+)</li>
                    </ul>
                    <p>Learned basic concepts of algorithm design.</p>
                    <section className="article-section">
                        <h4 className="section-heading">Control Structures</h4>
                        <ul id="control-structures">
                            <li><b>Sequence</b>: A series of statements executed one after another in the order they are listed.</li>
                            <li><b>Selection</b>: It is used to choose between different paths of execution based on a condition.</li>
                            <li><b>Iteration</b>: It allows the execution of one or more statements multiple times.</li>
                        </ul>
                    </section>
                    <section className="article-section">
                        <h4 className="section-heading">Recursion</h4>
                        <p>Recursion, also known as recursive call, is an problem-solving approach by using a function repeatly calling itself with its return valueto yield another return value until an answer is produced.</p>
                    </section>
                    <section className="article-section">
                        <h4 className="section-heading">Sorting</h4>
                        <ul id="control-structures">
                            <li><b>Bubble Sort</b>: A sorting algorithm that continuously swapping element pairs by moving the largest or smallest elements to the end of the list until they arrange in the correct order.</li>
                            <li><b>Insertion Sort</b>: A sorting algorithm that iterates, removes one element from input list each repetition, finds the location it belongs within the sorted list, and insets it there until no input elements remain.</li>
                            <li><b>Selection Sort</b>: A sorting algorithm that repeatedly finds the minimum or maximum element from the unsorted part of the list and swaps it with the element at the beginning of the unsorted section until the entire list is sorted.</li>
                            <li><b>Merge Sort</b>: A sorting algorithm that divides a sequence into multiple levels of subsequences, sorts the subsequences recursively, and then merge the pairs of sorted subsequences.</li>
                        </ul>
                    </section>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">OOP</h3>
                    <ul className="related-career-history">
                        <li>Education: Object Oriented Programming (B)</li>
                        <li>Projects: Broadway Lifestyle, South Stream, Heybike, nextCIGAR, HiPP</li>
                    </ul>
                    <p>Objects are instances of classes or prototypes while classes or prototypes define the attributes and behavior of objects. There are three features of OOP: </p>
                    <ul id="oop-features">
                        <li><b>Encapsulation:</b> Bundling data and methods that operate on the data within a single class or prototype.</li>
                        <li><b>Inheritance:</b> Allowing a class or prototype to inherit properties and methods from its parent class or prototype.</li>
                        <li><b>Polymorphism:</b> Enabling objects of different types to be treated as instances of the same type through a common interface.</li>
                    </ul>
                        <div class="viewmodel-figure-container">
                            <div class="viewmodel-figure-wrapper">
                                <table class="viewmodel-figure">
                                <tr>
                                    <th class="classifier-name">ClassifierName</th>
                                </tr>
                                <tr>
                                    <td>
                                    <ul class="attribute-list">
                                        <li class="operation-item">attribute: type</li>
                                    </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <ul class="operation-list">
                                    <li class="operation-item">operation(parameter: type): returnType</li>
                                    </ul>
                                    </td>
                                </tr>
                                </table>
                                <figcaption class="figure-caption">UML Class (Prototype) Diagram</figcaption>
                            </div>
                            <div class="viewmodel-figure-wrapper">
                                <table class="viewmodel-figure">
                                <tr>
                                    <th class="classifier-name">WarningBlock</th>
                                </tr>
                                <tr>
                                    <td>
                                    <ul class="attribute-list">
                                        <li class="operation-item">color: string</li>
                                        <li class="operation-item">fontWeight: string</li>
                                    </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <ul class="operation-list">
                                    <li class="operation-item">setColor(color: string): void</li>
                                    <li class="operation-item">setFontWeight(fontWeight: string): void</li>
                                    <li class="operation-item">changeWarningState(): void</li>
                                    </ul>
                                    </td>
                                </tr>
                                </table>
                                <figcaption class="figure-caption">WarningBlock Diagram</figcaption>
                            </div>
                        </div>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">Web Components</h3>
                    <ul className="related-career-history">
                        <li>Projects: Broadway Lifestyle, Heybike, nextCIGAR</li>
                    </ul>
                    <p>Web Components refers to a set of web native APIs which allows web developers to create reusable modular custom elements.</p>
                    <section className="article-section">
                        <h4>Custom Element</h4>
                        <p>Custom elements are HTML element which allow web developers to define their own properties, behaviors, and styles.</p>
                        <p>A custom element is implemented as a class that extends the base class HTMLElement or standard HTML elements such as HTMLParagraphElement) and img (HTMLImageElement).</p>
                        <p>After defining the class, we must register the custom element to the current page and start using it in our code.</p>
                        <p>The Custom Elements API provides lifecycle callbacks including connectedCallback and disconnectedCallback that enable us to register and unregister events.</p>
                        <section className="article-section">
                            <h5>Custom State</h5>
                            <p>The CustomStateSet and :state() are mechanisms for defining and managing custom state within custom elements based on state management. </p>
                            <ul className="custom-state-mechanisms">
                                <li><b>CustomStateSet</b>: The CustomStateSet interface stores an ordered list of state values for an custom element and allows states to be added and removed from the set.</li>
                                <li><b>:state()</b>: The :state() pseudo-class allows for styling based on the current state of the element.</li>
                            </ul>
                        </section>
                    </section>
                    <section className="article-section">
                        <h4>Shadow DOM</h4>
                        <p>Shadow DOM serves for encapsulation of internal DOM structure and style rules to prevent style leakage from the light DOM.</p>
                        <ul className="">
                            <li><b>Shadow Host:</b> The regular DOM node that the shadow DOM is attached to.</li>
                            <li><b>Shadow Root:</b> The root node of the shadow DOM tree.</li>
                            <li><b>Shadow Tree:</b> The DOM subtree within the shadow root that contains the elements and styles encapsulated from the light DOM.</li>
                        </ul>
                        <section className="article-section">
                            <h5>Slots</h5>
                            <p>Slots only exist in Shadow DOM and act as placeholder to get content from Light DOM.</p>
                            <p>It allows us to build web components modularly while we can modify component instances to hold different components so as to offer more flexibility and versatility.</p>
                            <p>In shadow DOM, slot element with attribute name="X" defines an insertion point to render elements with attribute slot="X".</p>
                            <p>For rendering purposes for each slot element with attribute name="X" in Shadow DOM, the browser looks for slot="X" with the same name in the light DOM.</p>
                            <p>The slot attribute is only valid for top-level children of the shadow host while the grandchildren with this attribute are ignored.</p>
                            <p>The multiple elements in light DOM are appended into the slot one after another if they have the same name.</p>
                        </section>
                    </section>
                    <section className="article-section">
                        <h4>HTML Template</h4>
                        <p>A template is a declarative element to define a reusable snippet of HTML that can be cloned and inserted in the document by script while the browser ignores templates when loading DOM content.</p>
                        <p>We can create multiple instances of the same HTML with dynamic content without having to rewrite values inside the code by using standard DOM manipulation APIs.</p>
                        <p>Each template element has an associated DocumentFragment object as template content.</p>
                    </section>
                </section>
                <section className="article-section">
                    <h3 className="section-heading">Headless CMS</h3>
                    <ul className="related-career-history">
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
        </>
    )
}; 

export default WebAuthoring;