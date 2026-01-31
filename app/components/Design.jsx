const Design = () => { 
    return (
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
                </section>
                <section className="article-section">
                    <h5>Visual Elements</h5>
                    <ul>
                        <li>Point, Line and Shape</li>
                        <li>Chromatics</li>
                        <li>Pattern</li>
                        <li>Lighting and Shading</li>
                        <li>Texture</li>
                    </ul>
                </section>
                <section className="article-section">
                    <h5>Design Principles</h5>
                </section>
                <section>
                    <h5>Composition</h5>
                </section>
                <section className="article-section">
                    <h5>Deformation</h5>
                    <p>Deformation, or known as stylization, is to transform a natural object into stylized imagery through  by designer.</p>
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
                    <h5>Feedback</h5>
                    <p>We should visualize state changes through visual cues and animations to draw attention and explain to end-users about their actions and the system's responses.</p>
                    <p>For progress of a task, we should provide the degree of completion to indicate the current status and expected completion time.</p>
                </section>
                <section className="article-section">
                    <h5>Storytelling</h5>
                    <p>Storytelling uses spatial and temporal signs to convey experience consists of narrative, emotion and aesthetic qualities in imagination of a user.</p>
                    <p>One of the strength strategies is to use storytelling to take a non-tangible concept and making it relatable through concrete ideas.</p>
                </section>
                <section className="article-section">
                    <h5>Branding</h5>
                    <p>Branding refers to a specific style of fonts, layouts, animation, interactions, and visual elements used in the presentation of information system by organizations.</p>
                    <p>Unified styles enable users to associate a particular organization with a professional brand image represented by its assaesthetic qualities, timing of animations, and usability of interactions.</p>
                </section>
            </section>
            
            <section className="featured-gallery">
                <h4 className="section-heading">Featured Works</h4>
                <ul className="featured-works">
                    <li className="featured-work">
                        <figure>
                            <img width="320" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/male-painting_2023.jpg" />
                            <figcaption>Realistic Painting, 2024</figcaption>
                        </figure>
                    </li>
                    <li className="featured-work">
                        <figure>
                            <img width="320" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/landscape.jpg" />
                            <figcaption>Landscape, 2023</figcaption>
                        </figure>
                    </li>
                    <li className="featured-work">
                        <figure>
                            <img width="320" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/sculpture-drawing_2022.jpg" />
                            <figcaption>Sculpture Drawing, 2022</figcaption>
                        </figure>
                    </li>
                    <li className="featured-work">
                        <figure>
                            <img width="320" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/character-rendering-assignment_2021.jpg" />
                            <figcaption>Character Rendering, 2021</figcaption>
                        </figure>
                    </li>
                    <li className="featured-work">
                        <figure>
                            <img width="320" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/mesh-line-art.png" />
                            <figcaption>Line Art, 2020</figcaption>
                        </figure>
                    </li>
                    <li className="featured-work">
                        <figure>
                            <img width="320" src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/graduation-poster_2019.jpg" />
                            <figcaption>Graduation Poster, 2019</figcaption>
                        </figure>
                    </li>
                </ul>
            </section>
        </section>
    ); 
}

export default Design;