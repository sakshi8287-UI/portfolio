import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.jpeg'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'

const Projects = ({ darkMode = false }) => {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      desc: 'A responsive personal portfolio showcasing my skills, projects, and experience.',
      image: project1,
      tags: ['React', 'Tailwind CSS', 'Vite', 'Responsive Design'],
      demoLink: 'https://sakshi8287-ui.github.io/portfolio/',
      githubLink: 'https://github.com/sakshi8287-UI/portfolio',
    },
    {
      id: 2,
      title: 'E-Commerce Product Page',
      desc: 'A modern product listing page with filters and clean UI design.',
      image: project2,
      tags: ['HTML', 'CSS', 'JavaScript', 'UI Design'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      desc: 'A weather app that shows real-time weather data using an API.',
      image: project3,
      tags: ['JavaScript', 'API', 'React', 'Async/Await'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'To Do List Application',
      desc: 'A task management app with add, delete, and complete features.',
      image: project4,
      tags: ['React', 'JavaScript', 'Local Storage'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 5,
      title: 'Amazone clone',
      desc: 'A high converting landing page with smooth layout and animations.',
      image: project5,
      tags: ['HTML', 'Tailwind', 'CSS', 'Responsive UI'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 6,
      title: 'student managment system',
      desc: 'An interactive skills section with progress bars and hover effects.',
      image: project6,
      tags: ['React', 'Tailwind', 'CSS', 'AOS Animation'],
      demoLink: '#',
      githubLink: '#',
    },
  ]

  return (
    <section
      id="projects"
      style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            My{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Projects
            </span>
          </h2>

          <p
            className="max-w-xl mx-auto"
            style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
          >
            A showcase of my recent work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? 'linear-gradient(to right, #1f2937, #111827)'
                  : 'linear-gradient(to right, #ffffff, #f9fafb)',
                borderColor: darkMode ? '#374151' : '#e5e7eb',
              }}
              className="group rounded-xl border transition-all duration-300 hover:border-orange-500/50"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-36 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? 'white' : '#1f2937' }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-3"
                  style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
                >
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                        color: darkMode ? '#d1d5db' : '#4b5563',
                      }}
                      className="px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-5">
                  <a
                    href={project.demoLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg transition-all hover:shadow-lg hover:shadow-orange-500/25"
                    style={{
                      background: 'linear-gradient(to right, #f97316, #f59e0b)',
                    }}
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a>

                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg transition-all hover:shadow-lg hover:shadow-gray-800/25"
                    style={{
                      background: 'linear-gradient(to right, #6b7280, #4b5563)',
                    }}
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center font-semibold gap-2 px-7 py-4 text-white text-sm rounded-full transition-all hover:shadow-lg hover:shadow-orange-500/25"
            style={{
              background: 'linear-gradient(to right, #f97316, #f59e0b)',
            }}
          >
            <FaGithub />
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects