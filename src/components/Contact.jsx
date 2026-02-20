import ContactImg from '../assets/contactImg.png'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = ({ darkMode }) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5tn8ekl',
      'template_0v3iyp5',
      form.current,
      'T4rD7l9srdbwnMOHg'
    )
    .then(() => {
      alert("Message Sent Successfully!");
      form.current.reset();
    })
    .catch(() => {
      alert("Failed to send message");
    });
  };

  return (
    <section
      id="contact"
      style={{ 
        backgroundColor: darkMode ? '#111827' : '#f9fafb'
      }}
      className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          data-aos='fade-up'
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            Get In{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Touch
            </span>
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl sm:mb-40"
            style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
          >
            Let's discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">

          <div
            className="flex justify-center order-2 lg:order-1"
            data-aos='fade-right'
          >
            <img
              src={ContactImg}
              alt="Contact"
              className="w-full max-w-xl sm:max-w-2xl lg:max-w-3xl h-auto object-contain"
            />
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            style={{
              background: darkMode
                ? 'linear-gradient(to right, #1f2937, #111827)'
                : 'linear-gradient(to right, #ffffff, #f9fafb)',
              borderColor: darkMode ? '#374151' : '#e5e7eb'
            }}
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
            data-aos='fade-left'
          >

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">

              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                style={{
                  backgroundColor: darkMode ? '#374151' : '#faede3',
                  borderColor: darkMode ? '#4b5563' : '#d1d5db',
                  color: darkMode ? 'white' : '#1f2937'
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                required
              />

              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                style={{
                  backgroundColor: darkMode ? '#374151' : '#faede3',
                  borderColor: darkMode ? '#4b5563' : '#d1d5db',
                  color: darkMode ? 'white' : '#1f2937'
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              style={{
                backgroundColor: darkMode ? '#374151' : '#faede3',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                color: darkMode ? 'white' : '#1f2937'
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              style={{
                backgroundColor: darkMode ? '#374151' : '#faede3',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                color: darkMode ? 'white' : '#1f2937'
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4"
              required
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              style={{
                backgroundColor: darkMode ? '#374151' : '#faede3',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                color: darkMode ? 'white' : '#1f2937'
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-4 sm:mb-6 resize-none"
              required
            />

            <button
              type="submit"
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)'
              }}
              className="w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all cursor-pointer"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;