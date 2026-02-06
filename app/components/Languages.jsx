import React from 'react';

const Languages = () => {
  const logoGroups = [
    { id: 1, logos: ["https://cdn.shopify.com/s/files/1/0626/2253/1645/files/react-logo.png", "https://cdn.shopify.com/s/files/1/0626/2253/1645/files/remix-logo.png"] },
    { id: 2, logos: ["https://cdn.shopify.com/s/files/1/0626/2253/1645/files/hydrogen-logo.png", "https://cdn.shopify.com/s/files/1/0626/2253/1645/files/javascript-logo.png"] },
    { id: 3, logos:  ["https://cdn.shopify.com/s/files/1/0626/2253/1645/files/css-logo.png", "https://cdn.shopify.com/s/files/1/0626/2253/1645/files/html-logo.png"] },
    { id: 4, logos: ["https://cdn.shopify.com/s/files/1/0626/2253/1645/files/bootstrap-logo.png", "https://cdn.shopify.com/s/files/1/0626/2253/1645/files/slick-logo.png"] },
    { id: 5, logos: ["https://cdn.shopify.com/s/files/1/0626/2253/1645/files/jquery-logo.png", "https://cdn.shopify.com/s/files/1/0626/2253/1645/files/three-js-logo.png"] },
    { id: 6, logos: ["https://cdn.shopify.com/s/files/1/0626/2253/1645/files/php8-logo.png", "https://cdn.shopify.com/s/files/1/0626/2253/1645/files/liquid-logo.png"] },
    { id: 7, logos: ["https://cdn.shopify.com/s/files/1/0626/2253/1645/files/sql-logo.png?v=1770401524", "https://cdn.shopify.com/s/files/1/0626/2253/1645/files/graphql-logo.png"] },
    { id: 8, logos: ["https://cdn.shopify.com/s/files/1/0626/2253/1645/files/c-sharp-logo.png", "https://cdn.shopify.com/s/files/1/0626/2253/1645/files/java-logo.png"] },
];

  return (
    <div id="languages-container" className="article-section">
        <section className="section-header">
            <h3 className="section-heading">Skills</h3>
            <p>The following presents my skillset in the industry.</p>
        </section>
        <div className="language-list-wrapper">
            <ul class="language-list">
                {logoGroups.map((group) => (
                    <div className="logo-column" key={group.id}>
                        {group.logos.map((logo) => (
                            <img 
                            className="language"
                            key={logo} 
                            src={`${logo}`} 
                            alt={logo.split('.')[0]} 
                            />
                        ))}
                    </div>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default Languages;
