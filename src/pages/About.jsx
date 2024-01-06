import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { hero } from "../assets/images";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-screen'>
      <h1 className='text-5xl font-extrabold leading-snug font-manrope'>
        Hello 👋
        <br />
        I'm{" "}
        <span className='bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent font-bold drop-shadow font-poppins'>
          Sama Mansour
        </span>
      </h1>

      <div className='mt-10 flex flex-col gap-3 font-sans text-slate-500'>
        <p>
          Hi, I am Sama Mansour. I am a Software Engineer.
        </p>
        <p>
          I hold a degree in Computer Science from Princess Sumaya
          University for Technology (PSUT) and am currently in search of an
          entry-level position at a reputable company. My goal is to further
          refine my abilities as a software developer while contributing to the
          success of the organization.
        </p>
      </div>

      <div className='py-12 w-full h-auto rounded-xl'>
        <img src={hero} alt='hero' className='object-cover rounded-xl' />
      </div>

      <div className='py-20 flex flex-col'>
        <h3 className='font-bold text-3xl relative font-poppins'>
          My <span className='fancy-text'>Skills.</span>
        </h3>

        <div className='mt-12 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-24 h-24' key={skill.name}>
              <div className='btn-back rounded-2xl' />
              <div className='btn-front rounded-2xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default About;
