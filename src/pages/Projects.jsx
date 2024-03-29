import { Link } from "react-router-dom";
import { arrow, threads } from "../assets/icons";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section className='max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-screen'>
      <h1 className='text-5xl font-extrabold leading-snug font-manrope'>
        A Portfolio of{" "}
        <span className='bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold'>
          Innovative
        </span>{" "}
        <br /> Creations and Developments
      </h1>

      <p className='font-sans text-slate-500 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='flex flex-wrap mt-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <b className='text-2xl font-poppins'>{project.name}</b>
              <p className='font-manrope mt-2 text-slate-500'>
                {project.description}
              </p>
              <div className='mt-5 flex items-center gap-2'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className=' font-manrope font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
