import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import useTypewriter from './useTypewriter'

const About = () => {
  const { name, role, description, resume, social, avatar } = about

  const typedRole = useTypewriter([
    'Full Stack Developer',
    'Backend Developer',
    'Frontend Developer',
    'Freelancer',
  ])

  return (
    <div className='about'>
      <div className='about__content'>
        {name && (
          <h1>
            Hi, I am <span className='about__name'>{name}.</span>
          </h1>
        )}

        <h2 className='about__role'>
          I am a <span className='typing'>{typedRole}</span>
          <span className='cursor'>|</span>
        </h2>

        <p className='about__desc'>{description}</p>

        <div className='about__contact'>
          {resume && (
            <a href={resume} target='_blank' rel='noreferrer'>
              <span className='btn btn--outline'>Resume</span>
            </a>
          )}

          {social?.github && (
            <a
              href={social.github}
              target='_blank'
              rel='noreferrer'
              className='link link--icon'
            >
              <GitHubIcon />
            </a>
          )}

          {social?.linkedin && (
            <a
              href={social.linkedin}
              target='_blank'
              rel='noreferrer'
              className='link link--icon'
            >
              <LinkedInIcon />
            </a>
          )}
        </div>
      </div>

      {avatar && (
        <div className='about__img-wrap'>
          <img
            src={`${process.env.PUBLIC_URL}/${avatar}`}
            alt={name}
            className='about__img'
          />
        </div>
      )}
    </div>
  )
}

export default About
