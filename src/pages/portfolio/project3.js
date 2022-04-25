import personal from "../../img/portfolio.png";

export default function Project3() {
  return (
    <main>
      <h1>Personal Portfolio Site</h1>
      <img
        src={personal}
        alt="My personal portfolio's landing page"
        className="project-image"
      />
      <p>
        This is my personal blog/portfolio site that I built with Gatsby and
        deployed on Netlify. This was sort of an experiment for me in creating
        and deploying JAMstack websites, and had evolved over time. JAMstack's
        are nice to use for small sites, they use Markdown for data and the
        entire site is statically generated, leading to some fast load speeds.
        They're not as practical for large web apps, but for small websites and
        personal blogs they're a great alternative to the traditional CMS.
      </p>
      <p>Technology used:</p>
      <ul>
        <li>Netlify CI/CD</li>
        <li>HTML5 &amp; CSS3</li>
        <li>React.js</li>
        <li>Gatsby.js</li>
      </ul>
      <a
        href="https://coltonsweeney.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to site
      </a>
    </main>
  );
}
