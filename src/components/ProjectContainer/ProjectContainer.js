import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import useScrollReveal from '../../hooks/useScrollReveal'
import './ProjectContainer.css'

const GRADIENTS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
]

const ProjectContainer = ({ project, index = 0 }) => {
  const ref = useScrollReveal()
  const gradient = GRADIENTS[index % GRADIENTS.length]

  return (
    <div
      ref={ref}
      className='project reveal'
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {project.image ? (
        <img src={project.image} alt={project.name} className='project__image' />
      ) : (
        <div className='project__gradient-header' style={{ background: gradient }}>
          <span className='project__gradient-letter'>
            {project.name.charAt(0)}
          </span>
        </div>
      )}

      <div className='project__body'>
        <div className='project__title-row'>
          <h3>{project.name}</h3>
          <div className='project__links'>
            {project.sourceCode && (
              <a
                href={project.sourceCode}
                className='project__link-btn'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon fontSize='small' />
                GitHub
              </a>
            )}
            {project.livePreview && (
              <a
                href={project.livePreview}
                className='project__link-btn project__link-btn--live'
                target='_blank'
                rel='noreferrer'
              >
                <LaunchIcon fontSize='small' />
                Live Demo
              </a>
            )}
          </div>
        </div>

        <p className='project__description'>{project.description}</p>

        {project.stack && (
          <ul className='project__stack'>
            {project.stack.map((item) => (
              <li key={item} className='project__stack-item'>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ProjectContainer
