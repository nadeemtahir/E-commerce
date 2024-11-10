"use client";
import React from "react";
import Image from 'next/image';

const products = [
  { id: 1, src: '/p_1.png', alt: 'Product 1' },
  { id: 2, src: '/p_2.png', alt: 'Product 2' },
  { id: 3, src: '/r_1.png', alt: 'Product 3' },
  { id: 4, src: '/r_2.png', alt: 'Product 4' },
  { id: 5, src: '/p_5.png', alt: 'Product 5' },
  { id: 6, src: '/p_6.png', alt: 'Product 6' },
  { id: 7, src: '/p_7.png', alt: 'Product 7' },
  { id: 8, src: '/p_8.png', alt: 'Product 8' },
  // Add more products as needed
];

function OurProductSection() {
  return (
    <section className="w-full overflow-x-hidden">
      <div>
        <p className="text-[32px] font-bold text-center">Our Products</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] mt-[30px] px-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={product.src}
                alt={product.alt}
                width={400} // Adjust according to your design
                height={300} // Adjust according to your design
                className="object-cover"
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available.</p>
        )}
      </div>
    </section>
  );
}

export default OurProductSection;