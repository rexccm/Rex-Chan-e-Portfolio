export function Summary({ content }) { 
    return (
        <section id="summary" class="shopify-section">
            <h2 class="section-heading">Summary</h2>
            <article class="section-content">
                {content} 
                
                <section id="web-authoring" class="article-section">
                    <h3>Web Authoring</h3>
                    <p>I am experienced in authoring standard-based web pages using the web development layers.</p>
                    <ul id="web-development-layers">
                        <li><b>Content Layer: </b>This layer is created in HyperText Markup Language (HTML) which contains the structure comprised of document type definition (doctype), tags, and character entities, and contents such as text, images, videos, and hyperlinks of web pages.</li>
                        <li><b>Presentation Layer: </b>This layer is created in Cascading Style Sheets (CSS) which defines the appearance including the global, local, and pseudo styles, layout systems, media queries, and animations of web pages.</li>
                        <li><b>Behaviour Layer: </b>This layer is created in scripting language, often JavaScript, which implements event-driven, functional, and imperative logic, document object model (DOM) manipulation, and Web APIs.</li>
                    </ul>
                </section>
                <section class="article-section">
                    <h3>Web Animation</h3>
                    <p>I am familiar with web animation which adds the dimension of time to the GUI of a web page in order to convey information organized by data, feedback, and aesthetic qualities to end-users through storytelling.</p>
                    <section class="article-section">
                        <h4>Animation Types</h4>
                        <ul id="animation-types">
                            <li><b>Straight Ahead Animation:</b> This is a difficult technique where the UX/UI designer or frontend developer generates a series of frames in sequence, one after the other. However, it is the most experimental approach which allows us to make decisions and change ideas as we want.</li>
                            <li><b>Pose-to-Pose Animation:</b> This is the most popular approach applied in frontend web development, as it forms the core of CSS transitions and keyframes. By defining the significant points in a series of actions, we can separate the animation into keyframes and in-betweens. Notably, many web standard methods handle the tweening for us automatically.</li>
                        </ul>
                    </section>
                    <section class="article-section">
                        <h4 class="section-heading">​Web Animation Methods</h4>
                        <ul id="web-animation-methods">
                            <li><b>Transitions:</b> By applying the concept of finite-state machines (FSM), CSS fills in the in-betweens smoothly over a specified duration between two states.</li>
                            <li><b>Keyframes:</b> CSS keyframes implement the traditional animation theory of pose-to-pose since the frontend developer can break down the timeline into several phases by defining the significant points as keyframes.</li>
                            <li><b>setInterval:</b> A basic JavaScript timing method used to trigger animations at fixed intervals, though less efficient than requestAnimationFrame.</li>
                            <li><b>requestAnimationFrame:</b> The high-performance method for scripted animations, ensuring synchronization with the browser's refresh rate.</li>
                            <li><b>jQuery Effects:</b> jQuery provides simplification of commonly complex animation operations such as fade-in/out, slide-up/down, and animate, etc.</li>
                        </ul>
                    </section>
                </section>
                <section class="article-section">
                    <h3 class="section-heading">Interactions​</h3>
                    <p>I create interactions to give feedback and enrich the user experience (UX) for end-users when they are browsing web pages.</p>
                    <section class="article-section">
                        <h4>Interaction Types</h4>
                        <p>In Human-Computer Interaction (HCI), there are two major types of interaction on graphical user interface (GUI):</p>
                        <ul class="interaction-types">
                            <li><b>Direct interaction:</b> The physical actions on visual representations of the objects of interest which are typically limited to selecting content included with a click or a tap, and moving it with a drag.</li>
                            <li><b>Mediated interaction:</b> The actions of end-user transformed and interpreted to complex commands by using widgets known as instruments such as menus, scrollbars and dialog boxes, before being applied to the target object.</li>
                        </ul>
                    </section>
                    <section class="article-section">
                        <h4 class="section-heading">Instruments</h4>
                        <p>Instruments are objects that can be manipulated by the end-users to affect other objects where they must have clear technical properties which can be combined with those of the target objects.</p>
                        <p>For example, a color swatch is an ubiquitous custom instrument often using to choose variant product (configurable product) on recently e-Commerce sites.</p>
                    </section>
                    <section class="article-section">
                        <h4>Ready-to-Use Widgets</h4>
                        <p>In jQuery UI, there are two types of ready-to-use widgets based on​ above interactions:</p>
                        <ul class="ready-to-use-widgets">
                            <li><b>Low-level interaction helpers:</b> The underlying core based on direct interactions that are designed to work with physical action performed by end-user primarily mouse events. For instance, draggable, droppable, resizable, selectable, and sortable.</li>
                            <li><b>Higher-level widgets:</b> The instruments often build upon the foundation provided by the low-level helpers triggering side effects after end-users performed actions. For instance, accordion, tabs, dialog, auto-complete, slider, and date-picker.</li>
                        </ul>
                    </section>
                </section>
                <section class="article-section">
                    <h3 class="section-heading">Control Structures</h3>
                    <ul class="control-structures">
                        <li><b>Sequence:</b> A series of statements executed one after another in the order they are listed.</li>
                        <li><b>Selection:</b> It is used to choose between different paths of execution based on a condition.</li>
                        <li><b>Iteration:</b> It allows the ex
                         to repeat one or more statements multiple times.</li>
                        <li><b>Loops:</b> Used to execute a block of code multiple times, such as for, while, and do...while loops.</li>
                    </ul>
                </section>
                <section class="article-section">
                    <h3>Object-oriented Programming</h3>
                    <p>Objects are instances of classes while classes define the attributes and behavior of objects. There are three features of OOP: </p>
                    <ul class="oop-features">
                        <li><b>Encapsulation:</b> Bundling data and methods that operate on the data within a single class.</li>
                        <li><b>Inheritance:</b> Allowing a class to inherit properties and methods from its parent class.</li>
                        <li><b>Polymorphism:</b> Enabling objects of different types to be treated as instances of the same type through a common interface.</li>
                    </ul>
                </section>
                <section class="article-section">
                    <h3 class="section-heading">Framework Concepts</h3>
                    <p>I practice the following concepts of modern frontend web frameworks during development.</p>
                    <section class="article-section">
                        <h4>Finite-state Machine</h4>
                        <p>Finite-state machine (FSM) is a design pattern applied in modern frontend web frameworks which provide a clear representation of a finite number of states with transitions between these states triggered by events or specific conditions.</p>
                    </section>
                    <section class="article-section">
                        <h4>State Management</h4>
                        <p>The view updates automatically through data-binding when the state of data model changes so as to synchronize state and visual presentation. For instance, Knockout observables, React hooks, and Vue Reactivity APIs are variants of reactive state managment system.</p>
                        <p>State management is a self-contained system consists of three parts:</p>
                        <ul>
                            <li><b>State:</b> The source of truth of a web application at a specific point in time that is carried by the observable properties. e.g. a string, an integer, a boolean, or an array.</li>
                            <li><b>View:</b> A declarative presentation of user interface mapping the current state. e.g. an unordered list mapping with data in repetitive structure.</li>
                            <li><b>Actions:</b> ​The events or transition condition that trigger updates in the state based on user input. e.g. a click event, a mouseover event, a keyup event, or an input value.</li>
                        </ul>
                    </section>
                </section>
            </article>
        </section>
    ); 
}