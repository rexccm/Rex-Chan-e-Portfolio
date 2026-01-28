import { useState } from 'react';

const PLATFORMS = [
    { id: 'shopify', title: 'Shopify Plus', url: 'https://cdn.shopify.com/s/files/1/0626/2253/1645/files/shopify-logo-with-title.png?v=1769607226', content: '<ol><li><b>Liquid Theme</b>: An e-Commerce CMS platform mainly using template language <em>Liquid</em>, <em>JavaScript</em> (usually using <em>Web Components</em>), <em>CSS3</em>, <em>HTML5</em>, <em>JSON</em>, and allowing us to apply JavaScript libraries like <em>jQuery</em> (with <em>JSON-LD</em>) to develop the storefront.</li><li><b>Hydrogen</b>: A modern headless e-Commerce framework mainly using <em>React</em> (with <em>JavaScript</em>), <em>GraphQL</em>, <em>Remix</em>, and <em>JSON</em> so as to decouple the frontend from Shopify headless CMS.</li></ol>' }, 
    { id: 'magento', title: 'Magento', url: 'https://cdn.shopify.com/s/files/1/0626/2253/1645/files/magento-logo-with-title.png?v=1769607233', content: '<ol><li><b>Magento2</b>: An e-Commerce CMS platform mainly using <em>PHP</em>, <em>JavaScript</em> (with frameworks like <em>jQuery</em>, <em>KnockoutJS</em>), <em>CSS3</em>, <em>HTML5</em>, <em>XML</em>, and <em>CSV</em> to develop the frontend.<br></li><li><b>PWA Studio</b>: A progressive web application development solution primarily using <em>React</em> (with <em>JavaScript</em>), <em>Apollo Client</em> (with <em>GraphQL</em>), <em>Redux</em>, and <em>JSON</em> in order to decouple the frontend from Magento2 backend.</li></ol>' }, 
	{ id: 'hubspot', title: 'HubSpot', url: 'https://cdn.shopify.com/s/files/1/0626/2253/1645/files/hubspot-logo-with-title.png?v=1769608348', content: 'A marketing CMS platform mainly using template language <em>HubL</em>, <em>JavaScript</em>, <em>CSS3</em>, <em>HTML5</em>, and <em>JSON</em>, and allowing us to import libraries like <em>jQuery</em>, <em>jQuery UI</em>, and <em>Slick</em> to develop the storefront.' }, 
	{ id: 'unity', title: 'Unity', url: 'https://cdn.shopify.com/s/files/1/0626/2253/1645/files/unity-logo-with-title.png?v=1769607240', content: 'A game engine mainly using <em>C#</em> to develop 2D and 3D PC and mobile games.' }, 
	{ id: 'photoshop', title: 'Photoshop', url: 'https://cdn.shopify.com/s/files/1/0626/2253/1645/files/photoshop-logo-with-title.png?v=1769609040', content: 'A 2D raster graphics editor composing images in multi-layers.' }, 
];

export default function Platforms() {
  const [activePlatform, setActivePlatform] = useState(null);

  return (
    <section id="platforms" className="article-section">
      <article className="section-header">
        <h2 className="section-heading">Platforms</h2>
        <p className="section-desc">I experienced in the following platforms.</p>
      </article>

      <ul className="platform-list list-none">
        {PLATFORMS.map((platform) => (
          <li
            key={platform.id}
            className="platform cursor-help relative"
            onMouseEnter={() => setActivePlatform(platform)}
            onMouseLeave={() => setActivePlatform(null)}
          >
            <img 
              src={platform.url} 
              alt={platform.title} 
              className=""
            />

            {/* 自定義 Tooltip (取代 jQuery UI) */}
            {activePlatform?.id === platform.id && (
              <div className="platform-tooltip">
                <div className="ui-tooltip-content">
                    <h3>
                        {/* <img src={`/images/${platform.id}-logo.png`} className="" alt="" /> */}
                        {platform.title}
                    </h3>
                    <div 
                    className="tooltip-content"
                    dangerouslySetInnerHTML={{ __html: platform.content }} 
                    />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
