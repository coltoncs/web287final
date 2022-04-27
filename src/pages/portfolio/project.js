export default function Project( project ) {
  return (
    <main>
      <h1>{project.name}</h1>
      <img src={project.image} alt={`${project.name}'s landing page`} className="project-image" />
      <p>
        {project.description}
      </p>
      <p>Technology used:</p>
      <ul>
        {project.tech.map( element => <li>{element}</li>)}
      </ul>
      <a href={project.link} target="_blank" rel="noopener noreferrer">Go to site</a>
    </main>
  )
}