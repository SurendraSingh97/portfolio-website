const skillList = [
  { name: "Python" },
  { name: "Rest-API" },
  { name: "Django" },
  { name: "Machine Learning" },
  { name: "FastAPI" },
  { name: "Knowledge Graphs" },
  { name: "Neo4j" },
  { name: "MongoDB" },
  { name: "FastAPI" },
  { name: "Html & CSS" },
  { name: "React js" },
  { name: "Javascript" },
  { name: "Node js" },
  { name: "Docker" },
  { name: "MySql" },
  { name: "Git" },
];

const Skills = () => {
  return (
    <section id='skills' className='flex flex-col justify-evenly items-center dark:text-white'>
      {/* <h2 className="text-center font-bold text-2xl pt-16 mb-4 m-6">My Skills</h2> */}
      <h2 className="text-center font-bold text-2xl pt-16 mb-4 m-6">My Skills</h2>
      <div className='grid gap-4 lg:grid-cols-4 grid-cols-2 w-auto max-w-screen-lg mb-10 m-6'>
        {skillList.map((skill, index) => (
          <button
            key={index}
            className="cursor-pointer w-full h-50 rounded-lg shadow-2xl border hover:border-indigo-500 bg-indigo-200 text-black text-sx m-2 px-3 py-0.5"
          >
            {skill.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export { Skills };