import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import DescriptionIcon from '@material-ui/icons/Description'
import { about } from '../../portfolio'
import './About.css'
import useTypewriter from './useTypewriter'

const About = () => {
  const { name, description, resume, social, avatar, openToWork } = about

  const typedRole = useTypewriter([
    'Full Stack Developer',
    'Backend Developer',
    'Frontend Developer',
    'Freelancer',
  ])

  return (
    <div className='about'>
      <div className='about__content'>
        {openToWork && (
          <div className='about__badge'>
            <span className='about__badge-dot' />
            Open to Work
          </div>
        )}

        {name && (
          <h1>
            Hi, I am <span className='about__name'>{name}.</span>
          </h1>
        )}

        <h2 className='about__role'>
          <span className='typing'>{typedRole}</span>
          <span className='cursor'>|</span>
        </h2>

        <p className='about__desc'>{description}</p>

        <div className='about__contact'>
          {resume && (
            <a
              href={resume}
              target='_blank'
              rel='noreferrer'
              className='about__btn about__btn--filled'
            >
              <DescriptionIcon fontSize='small' />
              Resume
            </a>
          )}

          {social?.github && (
            <a
              href={social.github}
              target='_blank'
              rel='noreferrer'
              className='about__btn about__btn--outline'
            >
              <GitHubIcon fontSize='small' />
              GitHub
            </a>
          )}

          {social?.linkedin && (
            <a
              href={social.linkedin}
              target='_blank'
              rel='noreferrer'
              className='about__btn about__btn--outline'
            >
              <LinkedInIcon fontSize='small' />
              LinkedIn
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
