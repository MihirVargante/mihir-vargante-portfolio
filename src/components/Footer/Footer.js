import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <div className='footer__social'>
      {about.social?.github && (
        <a
          href={about.social.github}
          aria-label='github'
          className='link link--icon footer__icon'
          target='_blank'
          rel='noreferrer'
        >
          <GitHubIcon />
        </a>
      )}
      {about.social?.linkedin && (
        <a
          href={about.social.linkedin}
          aria-label='linkedin'
          className='link link--icon footer__icon'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedInIcon />
        </a>
      )}
    </div>
    <p className='footer__copy'>
      &copy; {new Date().getFullYear()} {about.name}
    </p>
  </footer>
)

export default Footer
