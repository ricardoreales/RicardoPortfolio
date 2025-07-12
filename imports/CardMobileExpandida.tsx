import svgPaths from "./svg-f28hnmr0fk";
import imgVector from "figma:asset/219586c08e753a22d465cfaf9731ba3a2c71ac55.png";
import imgCardMobileExpandida from "figma:asset/4c8ea8a0fc9a7ccc34524fb2bce2b1d90c37a963.png";

function Textohero() {
  return (
    <div
      className="backdrop-blur-[35px] backdrop-filter mix-blend-overlay relative rounded-[50px] shrink-0 w-[158px]"
      data-name="TEXTOHERO"
      style={{
        backgroundImage:
          "linear-gradient(75.1513deg, rgba(255, 255, 255, 0.5) 11.138%, rgba(255, 255, 255, 0.05) 113.29%)",
      }}
    >
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center overflow-clip px-5 py-2.5 relative w-[158px]">
        <div className="flex flex-col font-['Figtree:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[20px] text-center text-nowrap">
          <p className="block leading-[20px] whitespace-pre">UX Research</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[10px_10px_29px_0px_inset_rgba(255,255,255,0.25)]" />
      <div className="absolute border-2 border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}

function Frame3520() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0">
      <Textohero />
    </div>
  );
}

function Frame3522() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-start p-0 relative shrink-0">
      <div className="h-10 relative shrink-0 w-[165px]" data-name="Vector">
        <img
          className="block max-w-none size-full"
          height="40"
          src={imgVector}
          width="165"
        />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div
      className="absolute bg-[#ffffff] bottom-[5px] left-[5px] rounded-[30px] top-[5px] w-10"
      data-name="Background"
    />
  );
}

function Group() {
  return (
    <div
      className="absolute bottom-[18.748%] contents left-[12.5%] right-[12.498%] top-[18.748%]"
      data-name="Group"
    >
      <div
        className="absolute bottom-[18.748%] left-[12.5%] right-[12.498%] top-[18.748%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 15 13"
        >
          <path
            d={svgPaths.p38193000}
            fill="var(--fill-0, #1A1A1A)"
            id="Vector"
          />
        </svg>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="h-5 relative shrink-0 w-full" data-name="SVG">
      <Group />
    </div>
  );
}

function Container() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-center p-0 right-2.5 size-5 top-2.5"
      data-name="Container"
    >
      <Svg />
    </div>
  );
}

function Icon() {
  return (
    <div
      className="absolute bottom-[10%] left-[5px] overflow-clip rounded-[20px] top-[10%] w-10"
      data-name="Icon"
    >
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[111px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left w-full">
        <p className="block leading-[19.6px]">Ver proyecto</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start p-0 top-0 translate-x-[-50%] w-[124px]"
      data-name="Container"
      style={{ left: "calc(50% + 17.4844px)" }}
    >
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start p-0 top-[29.6px] translate-x-[-50%]"
      data-name="Container"
      style={{ left: "calc(50% + 0.485001px)" }}
    >
      <div className="h-[19.6px] shrink-0 w-[83.97px]" data-name="Rectangle" />
    </div>
  );
}

function Text() {
  return (
    <div
      className="h-5 overflow-clip relative shrink-0 w-[115px]"
      data-name="Text"
    >
      <Container2 />
      <Container3 />
    </div>
  );
}

function LinkVariant1() {
  return (
    <div
      className="bg-[#1a1a1a] box-border content-stretch flex flex-col h-[50px] items-center justify-between pl-[60px] pr-[30px] py-[15px] relative rounded-[30px] shrink-0 w-[165px]"
      data-name="Link - Variant 1"
    >
      <Background />
      <div className="absolute inset-0 rounded-[30px]" data-name="Border">
        <div className="absolute border border-[rgba(19,21,23,0.1)] border-solid inset-0 pointer-events-none rounded-[30px]" />
      </div>
      <Icon />
      <Text />
    </div>
  );
}

function Frame3521() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0">
      <Frame3522 />
      <LinkVariant1 />
    </div>
  );
}

export default function CardMobileExpandida() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat relative rounded-[30px] size-full"
      data-name="Card Mobile expandida"
      style={{ backgroundImage: `url('${imgCardMobileExpandida}')` }}
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-between p-[40px] relative size-full">
          <div className="absolute backdrop-blur-2xl backdrop-filter bg-gradient-to-b bottom-0 from-[#d9d9d900] h-[200px] left-0 rounded-bl-[30px] rounded-br-[30px] to-[#ffffff] to-[98.558%] w-[267px]" />
          <Frame3520 />
          <Frame3521 />
        </div>
      </div>
    </div>
  );
}