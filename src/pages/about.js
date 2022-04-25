import { VscFilePdf } from 'react-icons/vsc';
import { FaReact } from 'react-icons/fa';

const About = () => {
  return (
    <main>
      <h1>About this site</h1>
      <p>
        My name is Colton Sweeney, and I'm currently a student at Wake Technical
        Community College studying for an AAS for Web Development. I also work
        part-time at United Restaurant Equipment Company in Raleigh, NC. This
        website serves as a portfolio site for my WEB287 class.
      </p>
      <p>
        This website will evolve over my time in WEB287, coming to its final
        design by the end of the semester and documented throughout the way.
        More information can be found on the blog page. The Portfolio section of
        this website showcases a few of my projects that I've completed.
      </p>
      <p>
        This website was built with React.js<FaReact /> and react-router-dom's HashRouter.
      </p>

      <a style={{ display: 'flex', alignItems: 'center' }} href="./sweeney_resume.pdf" className="download_link">
        <VscFilePdf size={'2rem'}/> Download portfolio
      </a>
    </main>
  );
};

export default About;
