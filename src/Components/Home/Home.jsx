import { HiMail } from 'react-icons/hi'
import resume from '../../assets/resume.pdf'
import { FaLinkedin, FaArrowCircleDown, } from 'react-icons/fa'
// import home from '../../assets/image-home.png'

const Home = ({name, title, linkedIn }) => {
  return (
    <section id="home" className=" lg:min-h-screen lg:flex justify-start lg:space-y-80 lg:space-x-20 text-white">
      <img
        className=" absolute w-full h-full inset-0 -z-10 object-cover object-right md:object-center"
        src="https://cutewallpaper.org/21/portfolio-background-image/portfolio-background-House-of-Coders.png" alt=""
      />
    
      <div className=" abolute m-6">
        <h1 className="lg:mb-4 font-bold text-3xl">Hello everyone!</h1>
        <h2 className="mb-4 " >My name is <span className=" font-semibold text-lg text-red-300">{name}</span>, {title}</h2>
        <div className="flex gap-2 ">
          <a href={`https://www.linkedin.com/in/${linkedIn}`} target='_blank' className="p-2 border border-indigo-400 rounded-lg dark:border-yellow-50 flex gap-2 justify-evenly items-center hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">LinkedIn<FaLinkedin /></a>
          <a href={resume} download target='_blank' className="p-2 border border-indigo-400 rounded-lg dark:border-yellow-50 flex gap-2 justify-evenly items-center hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% " ><FaArrowCircleDown />Download CV</a>
          {/* <a href={`mailto:${github}`} target='_blank' className="p-2 border border-indigo-400 rounded-lg dark:border-yellow-50 flex gap-2 justify-evenly items-center hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">Email<HiMail/></a> */}
          {/* <a href={`mailto:${email}`}><HiOutlineMail className='w-8 h-8'/>
          </a> */}
        </div>
      </div>

    </section>
  )
}
export { Home }