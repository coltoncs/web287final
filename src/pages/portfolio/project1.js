import mrp from '../../img/mrp.JPG';

export default function Project1() {
  return (
    <main>
      <h1>Market Ready Painting</h1>
      <img src={mrp} alt="Market Ready Painting NC's landing page" className="project-image" />
      <p>
        Market Ready Painting hired me to recreate their web presence.
        Previously on squarespace paying $200/year, I was able to create a new
        web presence for MRP and saved them the $200 yearly hosting costs,
        bringing their only costs down to a $6/year domain renewal.
      </p>
      <p>Technology used:</p>
      <ul>
        <li>Google Firebase</li>
        <li>HTML5 &amp; CSS3</li>
        <li>React.js</li>
        <li>Bulma</li>
      </ul>
      <a href="https://marketreadypaintingnc.com" target="_blank" rel="noopener noreferrer">Go to site</a>
    </main>
  )
}