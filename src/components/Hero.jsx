import link from '../assets/link.png'
import github from '../assets/github.png'
import mail from '../assets/mail.png'
import hero from '../assets/hero.png'
import hi from '../assets/hi.png'
import CV from '../assets/CV.pdf'
import { FaDownload, FaEnvelope } from 'react-icons/fa'

const Hero = ({ darkMode = true }) => {

  const socialIcons = [
    { icon: link, alt: 'link', url: "https://www.linkedin.com/in/sakshi-sharma-61b7a8385"},
    { icon: github, alt: 'Github', url:"https://github.com/frontend411"},
    { icon: mail, alt: 'mail', url: "mailto:sak8287071@gmail.com?subject=myportfolio%20Contact"},
  ]

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    buttonSecondary:
      'text-white border-2 border-orange-500 hover:bg-orange-600',
    decorativeCircle: 'bg-orange-500',
  }

  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    buttonSecondary:
      'text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white',
    decorativeCircle: 'bg-orange-400',
  }

  const Theme = darkMode ? darkTheme : lightTheme

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font z-10"
      >
        <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-center lg:mt-14 mt-14">

          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0 mt-8 lg:mt-10">

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  data-aos="fade-up"
                  data-aos-delay={400 + index * 100}
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${
                      darkMode ? '' : 'brightness-75'
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* Heading */}
            <h1
              className={`title-font text-4xl sm:text-6xl lg:text-6xl mb-4 font-bold ${Theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'm Sakshi
            </h1>

            {/* Description */}
            <p
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${Theme.textSecondary}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Frontend Developer specializing in React and modern UI design.
I build responsive and user-friendly web applications.
Currently seeking internship opportunities to apply my skills and grow as a developer.
            </p>

            {/* Buttons */}
            <div className="w-full pt-4 sm:pt-6">
              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a href={CV} download className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center text-white
                    bg-linear-to-r from-orange-500 to-amber-500 border-0
                    py-3 px-6 sm:px-8
                    hover:shadow-[0_0_40px_rgba(255,165,0,0.7)]
                    rounded-full text-base sm:text-lg font-semibold
                    transition-all duration-300 transform"
                  >
                    <FaDownload className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Download CV
                  </button>
                </a>

                <a href="#contact" className="w-full sm:w-auto">
                  <button
                    className={`w-full sm:w-auto inline-flex items-center justify-center
                    ${Theme.buttonSecondary}
                    py-3 px-6 sm:px-8
                    hover:shadow-[0_0_40px_rgba(255,165,0,0.7)]
                    rounded-full text-base sm:text-lg font-semibold
                    transition-all duration-300 transform`}
                  >
                    <FaEnvelope className="w-4 h-4 sm:w-5 mr-2" />
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 mb-15 lg:mt-0 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-80 h-80 lg:w-170 lg:h-170 -mt-15 lg:-mt-1">
              <div className="relative overflow-hidden">
                <img
                  src={hero}
                  alt="Hero"
                  className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>

              <img
                src={hi}
                alt="Hi"
                className="absolute top-1 sm:top-10 left-1 sm:left-5 w-30 h-30 sm:w-50 sm:h-50 object-contain animate-bounce opacity-90 z-10"
              />
            </div>
          </div>
        </div>

        {/* Decorative Circle */}
        <div
          className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 ${Theme.decorativeCircle}
          rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse hidden sm:block`}
        />
      </section>
    </div>
  )
}

export default Hero