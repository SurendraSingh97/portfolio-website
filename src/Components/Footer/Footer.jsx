import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Contact from '../Contact/Contact'; 
const Footer = (props) => {
  const {
    name,
    email,
    github,
    linkedIn,
  } = props;

  return (
    <>
      {/* Contact Form */}
      <Contact />

      {/* Footer */}
      <footer id='footer' className="w-screen lg:flex lg:justify-evenly p-16 bg-slate-500 text-white text-center">
        <div className="flex flex-col items-center mb-6">
          <h2 className='font-bold text-2xl mb-4'>{name}</h2>
          <p className='font-light text-lg mb-4'>Connect with me:</p>
          <div className="flex gap-3 items-center justify-center">
            <a href={`mailto:${email}`}>
              <HiOutlineMail className='w-8 h-8' />
            </a>
            <a href={`https://github.com/${github}`} target='_blank' rel="noopener noreferrer">
              <FaGithub className='w-8 h-8' />
            </a>
            <a href={`https://www.linkedin.com/in/${linkedIn}`} target='_blank' rel="noopener noreferrer">
              <FaLinkedin className='w-8 h-8' />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Footer };
