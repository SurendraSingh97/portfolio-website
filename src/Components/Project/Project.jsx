import chatbot from "../../assets/chatbot.jpeg"

const projectlist = [
  {
    title: "Universal Chatbot Engine",
    description: "Multi-functional bot generation engine with built Python, FastAPI, and Rasa to create customized bots for ITSM, FAQ, and information retrieval ",
    image: "https://www.ometrics.com/blog/wp-content/uploads/2018/10/chatbot_thumb.png",
  },
  {
    title: "AI-based AR/VR accelerator",
    description:"AI solution for enhancing 3D models from product photos. Improved usability with event-based UI and optimized neural model performance.",
    image: "https://media.licdn.com/dms/image/D5612AQGczTquITxL3A/article-cover_image-shrink_720_1280/0/1679644013652?e=2147483647&v=beta&t=imxt5pii_ERPjwDp7T13Fiaw3k1hNiX14WbOEQgAdYQ",
  },
  {
  title: "KG Driven MDM",
    description: "Led master data management project, leveraging Neo4j for a Knowledge Graph. Handled large set of data hierarchy, mergers, and acquisitions for efficient information management.",
    image: "https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt6ccda5c51ecbe2b3/6372682cecdec90f24291a82/Untitled_design_(16).png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
  },
  // {
  // title: "Cognitive Search using KG",
  //   description: "Led master data management project, leveraging Neo4j for a Knowledge Graph. Handled large set of data hierarchy, mergers, and acquisitions for efficient information management.",
  //   image: "https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt6ccda5c51ecbe2b3/6372682cecdec90f24291a82/Untitled_design_(16).png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
  // },
]
const Project = () => {
  return (    
    <section id="project" className="flex flex-col justify-evenly items-center dark:text-white mb-16 ">
      {/* <h2 className="text-center font-bold text-2xl pt-16 mb-4">Projects Portfolio</h2> */}
      <h2 className="text-center font-bold text-2xl pt-16 mb-4">Projects Portfolio</h2>
      <div className="grid lg:grid-cols-3 gap-10 p-6 max-w-screen-lg  ">
        {projectlist.map((project) => (
          <div className=" rounded-lg border shadow-xl hover:border-indigo-500" key={project.title}>
            <div className=" text-center p-4 flex flex-col">
              <img className=" rounded-t-lg mb-4 " src={project.image} alt={project.title} />
              <h3 className=" font-bold text-xl ">{project.title}</h3>
              <span className=" font-light text-l">{project.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export { Project }