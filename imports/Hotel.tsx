import imgRectangle273 from "figma:asset/733738b9ceaf193e472aeb73b72f91226fb212d6.png";

function Group435() {
  return (
    <div className="absolute contents leading-[0] left-[124.014px] not-italic text-[#1a2b49] text-right top-[257.119px]">
      <div className="absolute font-['Gilroy:ExtraBold',_sans-serif] h-[20.407px] left-[156.194px] text-[14.128px] top-[272.299px] translate-x-[-100%] w-[32.181px]">
        <p className="block leading-[1.44]">$349</p>
      </div>
      <div className="absolute font-['Gilroy:Light',_sans-serif] h-[20.407px] left-[156.921px] text-[11.3853px] top-[257.119px] translate-x-[-100%] w-[32.181px]">
        <p className="block leading-[1.44]">From</p>
      </div>
    </div>
  );
}

function Group438() {
  return (
    <div className="absolute contents left-[124.014px] top-[257.119px]">
      <Group435 />
    </div>
  );
}

function Group453() {
  return (
    <div className="absolute contents left-0 top-0">
      <div
        className="absolute bg-[#ffffff] h-[302.183px] left-0 rounded-[3.13956px] shadow-[0px_3.89312px_23.3587px_0px_rgba(189,189,189,0.23)] top-0 w-[166.397px]"
        data-name="Rectangle"
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[193.868px] left-0 rounded-tl-[1.56978px] rounded-tr-[1.56978px] top-0 w-[166.397px]"
        style={{ backgroundImage: `url('${imgRectangle273}')` }}
      />
      <div className="absolute font-['Gilroy:Regular',_sans-serif] h-[40.814px] leading-[0] left-[8.72px] not-italic text-[#1a2b49] text-[14.128px] text-left top-[207.211px] w-[138.052px]">
        <p className="block leading-[1.44]">
          Sheraton New York Times Square Hotel
        </p>
      </div>
      <Group438 />
    </div>
  );
}

function Group211() {
  return (
    <div className="absolute bottom-[4.416%] contents left-[5.24%] right-[81.223%] top-[88.052%]">
      <div className="absolute bg-[#32a636] bottom-[4.416%] left-[5.24%] right-[81.223%] rounded-[3.13956px] top-[88.052%]" />
      <div className="absolute bottom-[5.455%] font-['Gilroy:ExtraBold',_sans-serif] leading-[0] left-[6.952%] not-italic right-[83.614%] text-[#ffffff] text-[12.5582px] text-center top-[89.351%]">
        <p className="block leading-[normal]">9.2</p>
      </div>
    </div>
  );
}

function Group2211() {
  return (
    <div
      className="absolute bottom-[4.416%] contents left-[5.24%] right-[48.38%] top-[88.052%]"
      data-name="Group 221.1"
    >
      <div className="absolute bottom-[5.455%] font-['Lato:Regular',_sans-serif] leading-[0] left-[20.96%] not-italic right-[48.38%] text-[#bdbdbd] text-[0px] text-left top-[89.87%]">
        <p className="font-['Gilroy:Light',_sans-serif] leading-[normal] text-[12.5582px]">
          <span>{`Fair `}</span>
          <span className="adjustLetterSpacing tracking-[-0.251165px]">{`(234) `}</span>
        </p>
      </div>
      <Group211 />
    </div>
  );
}

export default function Hotel() {
  return (
    <div
      className="relative shadow-[0px_3.17336px_19.0401px_0px_rgba(189,189,189,0.23)] size-full"
      data-name="hotel"
    >
      <Group453 />
      <Group2211 />
    </div>
  );
}