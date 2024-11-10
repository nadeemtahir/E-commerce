"use client";
import React from "react";

function BrowseTheRangeSection() {
  return (
    <section className="flex flex-col items-center pt-10">
      <div>
        <p className="text-[32px] font-bold text-center md:text-[28px]">Browse The Range</p>
        <p className="text-20 text-customGray text-center md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex flex-wrap justify-center space-x-4 mt-4">
        <div className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img src="/btr_1.png" alt="category picture" className="h-80 w-full object-cover" />
        </div>
        <div className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img src="/btr_2.png" alt="category picture" className="h-80 w-full object-cover" />
        </div>
        <div className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img src="/btr_3.png" alt="category picture" className="h-80 w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export default BrowseTheRangeSection;
