import about from '../assets/about.png'

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6"
    >
      {/* MAIN WRAPPER */}
      <div
        className="
          max-w-7xl w-full
          grid grid-cols-1 lg:grid-cols-2
          gap-16 lg:gap-28
          items-center
        "
      >
        {/* IMAGE + STAR */}
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex justify-center relative order-2 lg:order-1"
        >
          <div className="relative w-80 h-80 lg:w-480px lg:h-480px">
            {/* ⭐ STAR */}
            <div
              className="absolute -inset-10 lg:-inset-28 rotate-12 z-0"
              style={{
                background:
                  'linear-gradient(45deg, #f97316, #fb923c, #f59e0b)',
                clipPath:
                  'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              }}
              data-aos="zoom-in"
              data-aos-delay="600"
            />

            {/* IMAGE */}
             <img
              src={about}
              alt="About Image"
              className="absolute inset-0 w-full h-full
              object-cover z-10 transition-all duration-300
              rotate-0 transform-none"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </figure>

        {/* CONTENT */}
        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="
            text-center lg:text-left
            order-1 lg:order-2
            lg:pl-10
          "
        >
          <h1
            className="
              text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
              font-bold mb-15 
              text-transparent bg-linear-to-r
              from-orange-400 to-orange-600
              bg-clip-text
            "
          >
            About Me
          </h1>

          <p
            className={`
              text-sm sm:text-base lg:text-lg xl:text-xl
              mb-8 leading-relaxed
              bg-linear-to-r from-orange-900/10 to-orange-900/5
              p-4 sm:p-6 rounded-2xl backdrop-blur-sm
              ${darkMode ? 'text-gray-300' : 'text-gray-700'}
            `}
          >
            Frontend Developer | Fresher
            <br></br>
            I am a BCA pursuing student with a strong interest in Frontend Development. 
            I enjoy building responsive and user-friendly websites using HTML, CSS, JavaScript, React, and Tailwind CSS. 
            I am continuously improving my skills and working on real-world projects to become a professional software developer.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">5+</div>
              <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                BCA Pursuing
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">10+</div>
              <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Frontend Learner
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">5+</div>
              <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Projects Build
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <a href='#projects'>
          <button
            className={`
              border-2 border-orange-500
              inline-flex items-center justify-center
              py-2 px-6 rounded-full
              text-base sm:text-lg font-semibold
              transition-all duration-300
              hover:shadow-[0_0_40px_rgba(255,165,0,0.6)]
              ${darkMode
                ? 'text-white bg-orange-500/10'
                : 'text-gray-800 bg-white/90'}
            `}
          >
            Learn More
          </button>
          </a>
        </article>
      </div>
    </section>
  )
}

