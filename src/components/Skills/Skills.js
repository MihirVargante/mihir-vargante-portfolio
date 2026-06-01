import { FaAws } from 'react-icons/fa'
import {
  SiJavascript, SiTypescript, SiReact, SiAngular, SiRedux,
  SiHtml5, SiCss, SiTailwindcss, SiBootstrap, SiD3,
  SiOpenjdk, SiSpringboot, SiNodedotjs, SiExpress, SiPhp, SiLaravel,
  SiMongodb, SiPostgresql, SiMysql, SiNeo4J,
  SiSocketdotio, SiRedis, SiDocker, SiGit, SiJest, SiGithubactions,
} from 'react-icons/si'
import { skills } from '../../portfolio'
import './Skills.css'

const SKILL_META = {
  'JavaScript':     { icon: SiJavascript,    color: '#F7DF1E' },
  'TypeScript':     { icon: SiTypescript,    color: '#3178C6' },
  'React':          { icon: SiReact,         color: '#61DAFB' },
  'Angular':        { icon: SiAngular,       color: '#DD0031' },
  'Redux':          { icon: SiRedux,         color: '#764ABC' },
  'HTML':           { icon: SiHtml5,         color: '#E34F26' },
  'CSS / SASS':     { icon: SiCss,           color: '#1572B6' },
  'Tailwind CSS':   { icon: SiTailwindcss,   color: '#06B6D4' },
  'Bootstrap':      { icon: SiBootstrap,     color: '#7952B3' },
  'D3.js':          { icon: SiD3,            color: '#F9A03C' },
  'Java':           { icon: SiOpenjdk,       color: '#ED8B00' },
  'Spring Boot':    { icon: SiSpringboot,    color: '#6DB33F' },
  'Node.js':        { icon: SiNodedotjs,     color: '#339933' },
  'Express':        { icon: SiExpress,       color: '#888888' },
  'PHP':            { icon: SiPhp,           color: '#777BB4' },
  'Laravel':        { icon: SiLaravel,       color: '#FF2D20' },
  'MongoDB':        { icon: SiMongodb,       color: '#47A248' },
  'PostgreSQL':     { icon: SiPostgresql,    color: '#336791' },
  'MySQL':          { icon: SiMysql,         color: '#4479A1' },
  'Neo4j':          { icon: SiNeo4J,         color: '#008CC1' },
  'Socket.io':      { icon: SiSocketdotio,   color: '#25C2A0' },
  'Redis':          { icon: SiRedis,         color: '#DC382D' },
  'Docker':         { icon: SiDocker,        color: '#2496ED' },
  'AWS':            { icon: FaAws,           color: '#FF9900' },
  'REST APIs':      { icon: null,            color: null },
  'Git':            { icon: SiGit,           color: '#F05032' },
  'CI/CD':          { icon: SiGithubactions, color: '#2088FF' },
  'Jest':           { icon: SiJest,          color: '#C21325' },
}

const CATEGORIES = [
  { label: 'Frontend',  keys: ['JavaScript', 'TypeScript', 'React', 'Angular', 'Redux', 'HTML', 'CSS / SASS', 'Tailwind CSS', 'Bootstrap', 'D3.js'] },
  { label: 'Backend',   keys: ['Java', 'Spring Boot', 'Node.js', 'Express', 'PHP', 'Laravel', 'Socket.io', 'REST APIs'] },
  { label: 'Database',  keys: ['MongoDB', 'PostgreSQL', 'MySQL', 'Neo4j', 'Redis'] },
  { label: 'Tools',     keys: ['Docker', 'AWS', 'Git', 'CI/CD', 'Jest'] },
]

const SkillPill = ({ name }) => {
  const meta = SKILL_META[name] || {}
  const Icon = meta.icon || null
  const color = meta.color || null

  return (
    <li className='skill-pill'>
      {Icon && (
        <Icon className='skill-pill__icon' style={{ color }} />
      )}
      <span>{name}</span>
    </li>
  )
}

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <div className='skills__categories'>
        {CATEGORIES.map(({ label, keys }) => {
          const filtered = keys.filter((k) => skills.includes(k))
          if (!filtered.length) return null
          return (
            <div key={label} className='skills__category'>
              <span className='skills__category-label'>{label}</span>
              <ul className='skills__list'>
                {filtered.map((skill) => (
                  <SkillPill key={skill} name={skill} />
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
