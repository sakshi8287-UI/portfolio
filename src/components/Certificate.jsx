import cert1 from "../assets/image.jpeg";
import cert2 from "../assets/img1.jpeg";
import cert3 from "../assets/img2.jpeg";
import cert4 from "../assets/img3.jpeg";

const certificates = [
  {
    title: "Oops Using C++ Compitition",
    issuer: "India Institude of Computer Science",
    year: "2026",
    image: cert1,
    link: "cart1",
  },
  {
    title: "Web Application Best Project",
    issuer: "India Institude of Computer Science",
    year: "2025",
    image: cert2,
    link: "cart2",
  },
  {
    title: "Web Publishing Mock Test",
    issuer: "India Institude of Computer Science",
    year: "2025",
    image: cert3,
    link: "cart3",
  },
  {
    title: "Python Project Compitition",
    issuer: "India Institude of Computer Science",
    year: "2026",
    image: cert4,
    link: "cart4",
  },
];

const Certificates = ({ darkMode }) => {
  return (
    <section
      id="certificate"
      className="py-20"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
    >
      <div className="container mx-auto px-6">

        <div className="text-center mb-12" data-aos="fade-up">
          <h2
            className="text-4xl font-bold"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            My{" "}
            <span className="text-orange-500">
              Certificates
            </span>
          </h2>

          <p
            className="mt-3"
            style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
          >
            My achievements and certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="rounded-xl overflow-hidden shadow-xl hover:scale-105 duration-300"
              style={{
                background: darkMode ? "#1f2937" : "white",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <h3
                  className="text-xl font-bold"
                  style={{ color: darkMode ? "white" : "#111827" }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-2"
                  style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
                >
                  {item.issuer}
                </p>

                <p className="text-orange-500 font-semibold mt-1">
                  {item.year}
                </p>

                <button
                    onClick={() => window.open(item.image, "_blank")}
                    className="inline-block mt-5 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition cursor-pointer"
                    >
                    View Certificate
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certificates;