import React from "react";

function HeroSection() {
  return (
    <section
      className="bg-hero flex flex-col justify-center items-end w-full h-[calc(100vh-73px)] bg-no-repeat bg-cover bg-bottom"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className="bg-[#d6c9b9] mx-4 md:mr-[56px] md:ml-0 inline-block rounded-[10px] px-4 md:px-[39px] pt-[37px] md:pt-[62px] pb-[37px]">
        <p className="text-red-950 font-semibold text-normal">New Arrival</p>
        <p className="text-orange-950 py-4 md:py-2 text-header leading-tight md:text-5xl font-bold">
          Discover Our <br /> New Collection
        </p>
        <p className="text-orange-950 text-[18px] mb-[46px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-orange-300 text-orange-950 px-4 py-2 rounded hover:underline `">Buy Now</button>
      </div>
    </section>
  );
}

export default HeroSection;