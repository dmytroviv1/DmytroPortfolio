import { FaGraduationCap } from "react-icons/fa6";
import { education } from "../../data/text";

const AboutEducation = () => {
  return (
    <>
      {education.map((item, key) => (
        <div className="flex flex-row justify-center xl:justify-start gap-4 mb-2" key={key}>
          <div className="relative">
            <div className="h-fit p-2 rounded-md bg-gradient-to-r from-violet-400 to-violet-700 translate-y-2">
              <FaGraduationCap className="text-lg md:text-xl" />
            </div>
            <div className="absolute top-2 left-1/2 -z-10 h-[calc(100%)] w-[3px] bg-gradient-to-r from-violet-400 to-violet-700 rounded-bl-full rounded-br-full -translate-x-1/2"></div>
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="text-lg md:text-xl font-semibold">{item.degree}</h3>
            <p className="mt-1">{item.college}</p>
            <p className="mt-0.5 text-sm text-gray-400">
              {item.started} – {item.graduated}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutEducation;
