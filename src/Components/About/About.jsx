import React from 'react';
import about_bg from '../../assets/about_bg.jpeg'

const description = "Results-driven Software Engineer with 2.9 years of experience in Python, Neo4j, Django, and FastAPI. Proven expertise in optimizing hiring workflows through AI technologies. Recognized for implementing a RetrievalQA pipeline, achieving a 75% reduction in web crawling time. Successfully led projects, including an MNC Master Data Management solution with Knowledge Graph. Proficient in data analysis, NLP, and AI-powered solutions. Currently pursuing an AI-focused Software Engineering Tech program. Known for innovation, problem-solving, and collaboration. Microsoft Certified in Azure AI Fundamentals. Adept at creating scalable solutions and contributing to diverse projects. Excited about leveraging technology to drive efficiency and excellence in every endeavor.";

const links = [];

const stats = [
  { name: 'Certifications', value: "Microsoft Certified: Azure AI Fundamentals (AI-900)" },
  { name: 'Collaboration', value: 'Collaborated with senior managers, leadership teams, research data scientists, and cross-functional teams.' },
  { name: 'Versatility', value: 'Engaged in diverse projects, from AI-based accelerators to MNC Master Data Management solutions.' },
  { name: 'Recognition', value: 'Top-ranking projects, showcased in innovation festivals and internal research meetings.' },
  { name: 'Adaptability', value: 'Quick learner, demonstrated adaptability to new technologies.' },
  { name: 'Leadership', value: 'Led projects, contributed to project management, and played a key role in the implementation of critical solutions.' },
  { name: 'Language Skills', value: 'Proficient in English (verbal and written)' },
  { name: 'Current Pursuit', value: 'Pursuing an AI-focused Software Engineering Tech program' },
];


const About = () => {
  return (
    <section id="about" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-25">
      <img src={about_bg} className="opacity-25 absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
      <div className="mx-flex max-w-screen-fit px-6 lg:px-8 md:object-center">
        {/* <div className="mx-auto max-w-2xl lg:mx-0"> */}
        {/* <div className="mx-auto max-w-2xl lg:mx-0 text-center"> */}
        <div className="mx-flex max-w-fit lg:mx-2">
          <h2 className="text-4xl items-center font-bold tracking-tight text-white sm:text-3xl">About Myself</h2>
          <p className="mt-6 text-justify items-center text-lg leading-8 text-gray-300">{description}</p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl lg:mx-0 lg:max-w-none">
          <table className="mt-16 w-full">
            <tbody>
              {stats.map((stat, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="text-base leading-7 text-yellow-200 p-2 font-bold">{stat.name}</td>
                  <td className="text-base leading-7 text-white p-2">{stat.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export { About };