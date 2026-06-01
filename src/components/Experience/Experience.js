import { experience } from '../../portfolio'
import useScrollReveal from '../../hooks/useScrollReveal'
import './Experience.css'

const ExperienceItem = ({ job, index }) => {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className='experience__item reveal'
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className='experience__dot' />
      <div className='experience__body'>
        <div className='experience__header'>
          <div>
            <h3 className='experience__role'>{job.role}</h3>
            <p className='experience__company'>{job.company}</p>
          </div>
          <span className='experience__duration'>{job.duration}</span>
        </div>
        <ul className='experience__desc'>
          {job.description.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Experience = () => {
  if (!experience || !experience.length) return null

  return (
    <section className='section experience' id='experience'>
      <h2 className='section__title'>Experience</h2>
      <div className='experience__timeline'>
        {experience.map((job, i) => (
          <ExperienceItem key={job.company} job={job} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Experience
