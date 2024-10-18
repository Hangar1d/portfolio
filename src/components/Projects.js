const Projects = () => {
  const projects = [
    {
      title: "TheThoughtSpace",
      description:
        "Write your unsaid thoughts and let it out. Send it to someone or simply let it float in",
      image: "/Project1.gif", 
      link: "https://thethoughtspaces.com/",
    },
    {
      title: "Trading Journal App",
      description:
        "A web-based platform to track, analyze, and improve trading performance",
      image: "/Project2.gif", 
      link: "https://openai.com",
    },
  ];

  return (
    <section className="p-10 bg-darkBlack text-lightGray">
      <h2 className="text-4xl font-bold mb-16 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-jetBlack shadow-md rounded-lg overflow-hidden transition-transform transform "
          >
            <img
              src={project.image} // Directly use the string path here
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-500 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-white-600 hover:text-blue-800 transition duration-300"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
