import portrait from '../img/portrait.jpg';

const Home = () => {
  return (
    <main>
      <img src={portrait} alt="Portrait of myself" className="portrait" />
      <blockquote className="quote">
        Shooting for a career in full-stack web development, welcome to my
        personal portfolio website. Here you can find collections of projects
        I've completed, my personal blog, and more.<cite>Colton Sweeney</cite>
      </blockquote>
    </main>
  );
};

export default Home;