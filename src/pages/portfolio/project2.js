import ureco from "../../img/ureco.JPG";

export default function Project2() {
  return (
    <main>
      <h1>United Restaurant Equipment Company</h1>
      <img
        src={ureco}
        alt="Market Ready Painting NC's landing page"
        className="project-image"
      />
      <p>
        URECO hired me as a web developer to help fix their ecommerce presence.
        Prior to my employment, their website was barebones and product data was
        scattered and incomplete. Since my employment, I've updated the product
        catalog to include up-to-date information and high-quality images. I've
        also re-worked the original website pages into responsive pages that are
        integrated with the ecommerce platform, allowing URECO to delete their
        static Wix site and focus solely on the BigCommerce ecommerce website.
      </p>
      <p>Technology used:</p>
      <ul>
        <li>BigCommerce</li>
        <li>HTML5 &amp; CSS3</li>
        <li>React.js</li>
        <li>NetSuite</li>
      </ul>
      <a href="https://ureco.com" target="_blank" rel="noopener noreferrer">
        Go to site
      </a>
    </main>
  );
}
