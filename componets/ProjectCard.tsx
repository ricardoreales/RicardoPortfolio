import React from 'react';
import { IProject } from '../types/project';
import svgPaths from "../imports/svg-f28hnmr0fk";

interface IProjectCardProps {
  project: IProject;
  isActive?: boolean;
  onClick?: () => void;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ 
  project, 
  isActive = false, 
  onClick 
}) => {
  return (
    <div
      className={`
        relative rounded-[30px] overflow-hidden cursor-pointer h-[460px] sm:h-[480px]
        ${isActive ? 'shadow-2xl shadow-black/20' : 'shadow-lg shadow-black/10'}
        transition-all duration-300 hover:shadow-xl
      `}
      style={{ 
        backgroundImage: `url('${project.image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      onClick={onClick}
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-between p-[30px] sm:p-[40px] relative size-full">
          {/* Bottom gradient overlay */}
          <div className="absolute backdrop-blur-2xl backdrop-filter bg-gradient-to-b bottom-0 from-[#d9d9d900] h-[200px] left-0 rounded-bl-[30px] rounded-br-[30px] to-[#ffffff] to-[98.558%] w-full" />
          
          {/* Top section - Category Label */}
          <div className="relative z-10">
            <div
              className="backdrop-blur-[35px] backdrop-filter mix-blend-overlay relative rounded-[50px] shrink-0"
              style={{
                backgroundImage:
                  "linear-gradient(75.1513deg, rgba(255, 255, 255, 0.5) 11.138%, rgba(255, 255, 255, 0.05) 113.29%)",
              }}
            >
              <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center overflow-clip px-4 sm:px-5 py-2 sm:py-2.5 relative">
                <div className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] sm:text-[18px] text-center text-nowrap">
                  <p className="block leading-[20px] whitespace-pre">{project.title}</p>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none shadow-[10px_10px_29px_0px_inset_rgba(255,255,255,0.25)]" />
              <div className="absolute border-2 border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[50px]" />
            </div>
          </div>

          {/* Bottom section */}
          <div className="relative z-10 flex flex-col gap-4 sm:gap-5 items-center">
            {/* Company Logo/Name */}
            <div className="flex flex-col gap-2.5 items-center">
              <div className="h-8 sm:h-10 relative w-[140px] sm:w-[165px] flex items-center justify-center">
                <span className="text-white font-semibold text-lg">{project.company}</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="bg-[#1a1a1a] box-border content-stretch flex flex-col h-[45px] sm:h-[50px] items-center justify-between pl-[50px] sm:pl-[60px] pr-[25px] sm:pr-[30px] py-[12px] sm:py-[15px] relative rounded-[30px] shrink-0 w-[145px] sm:w-[165px]">
              {/* Background circle */}
              <div className="absolute bg-[#ffffff] bottom-[5px] left-[5px] rounded-[30px] top-[5px] w-8 sm:w-10" />
              
              {/* Border */}
              <div className="absolute inset-0 rounded-[30px]">
                <div className="absolute border border-[rgba(19,21,23,0.1)] border-solid inset-0 pointer-events-none rounded-[30px]" />
              </div>
              
              {/* Arrow Icon */}
              <div className="absolute bottom-[10%] left-[5px] overflow-clip rounded-[20px] top-[10%] w-8 sm:w-10">
                <div className="absolute box-border content-stretch flex flex-col items-start justify-center p-0 right-2 sm:right-2.5 size-4 sm:size-5 top-2 sm:top-2.5">
                  <div className="h-4 sm:h-5 relative shrink-0 w-full">
                    <div className="absolute bottom-[18.748%] left-[12.5%] right-[12.498%] top-[18.748%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 15 13"
                      >
                        <path
                          d={svgPaths.p38193000}
                          fill="var(--fill-0, #1A1A1A)"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Text */}
              <div className="h-4 sm:h-5 overflow-clip relative shrink-0 w-[100px] sm:w-[115px]">
                <div className="absolute box-border content-stretch flex flex-col items-start justify-start p-0 top-0 translate-x-[-50%] w-[110px] sm:w-[124px]" style={{ left: "calc(50% + 15px)" }}>
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] sm:text-[14px] text-left w-full">
                      <p className="block leading-[16px] sm:leading-[19.6px]">Ver proyecto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 