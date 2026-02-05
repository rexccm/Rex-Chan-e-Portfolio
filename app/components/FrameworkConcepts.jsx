import React, { useState } from 'react';

const FrameworkConcepts = () => { 
  /* Hooks: variables and setters */
  const [activeIndex, setActiveIndex] = useState(0);

  const components = [
    { 
      name: 'State', 
      content: 'The <b>source of truth</b> of a web application at a specific point in time that is carried by the observable properties.<br>e.g. a string, an integer, a boolean, or an array.' 
    },
    { 
      name: 'View', 
      content: 'A <b>declarative presentation</b> of user interface mapping the current state.<br>e.g. an unordered list mapping with data in repetitive structure.' 
    },
    { 
      name: 'Actions', 
      content: 'The <b>events</b> or <b>transition condition</b> that trigger updates in the state based on user input.<br>e.g. a click event, a mouseover event, a keyup event, or an input value.' 
    }
  ];

  return (
    <section id="framework" className="article-section">
      {/* Section header */}
      <article className="section-header">
        <h2 className="section-heading">Modern Frontend Framework</h2>
        <p className="description">I practice the following concepts of modern frontend web frameworks during development.</p>
      </article>

      {/* Related career history */}
      <ul className="related-career-history">
        <li>Education: Certificate of Front-End Web Developer (CLAP@JC) | Logic and Artificial Intelligence in Games (B+)</li>
        <li>Projects: Telford (Tao Ti), e-Portfolio</li>
      </ul>

      {/* FSM */}
      <article id="fsm" className="section-header">
        <h3 className="section-heading">FSM</h3>
        <p className="description">
          Finite-state machine (FSM) is a design pattern applied in modern frontend web frameworks which provide a clear representation of a finite number of states with transitions between these states triggered by events or specific conditions.
        </p>
      </article>

      {/* State Management */}
      <article id="state-management">
        <h3 className="section-heading">State Management</h3>
        <div className="section-header">
          <p>The view updates automatically through data-binding when the state of data model changes so as to synchronize state and visual presentation. For instance, React hooks and Vue Reactivity APIs are variants of reactive state management systems.</p>
          <p>State management consists of three parts:</p>
        </div>

        <div className="tabs-with-figure">
          {/* Tabs Section */}
          <div className="tabs">
            <menu className="tab-list">
              {components.map((comp, index) => (
                <li
                  key={comp.name}
                  onMouseOver={() => setActiveIndex(index)}
                  className={`tab`}
                >
                  {comp.name}
                </li>
              ))}
            </menu>
            
            {/* Tab Content */}
            <div 
              className="tab-content"
              dangerouslySetInnerHTML={{ __html: components[activeIndex].content }}
            />
          </div>

          {/* Figure */}
          <figure className="">
            <div className="">
              <menu className="ring">
                {components.map((comp, index) => {
                  const angle = (index * 360) / components.length;
                  return (
                    <li
                      key={`ring-${comp.name}`}
                      onMouseOver={() => setActiveIndex(index)}
                      style={{ transform: `rotate(${angle}deg) translate(85px) rotate(-${angle}deg)` }}
                      className="state-management-component"
                    >
                      {comp.name}
                    </li>
                  );
                })}
              </menu>
            </div>
            <figcaption>Interactive State Management Flow</figcaption>
          </figure>
        </div>
      </article>
    </section>
  );
};

export default FrameworkConcepts;