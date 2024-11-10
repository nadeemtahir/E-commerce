import Link from "next/link";

function About() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to our furniture website, your ultimate destination for stylish
          and functional home furnishings. We believe that every space deserves to
          be a reflection of your unique personality and lifestyle. Our curated
          collection features a wide range of pieces, from contemporary sofas and
          elegant dining sets to cozy bedroom essentials. Each item is thoughtfully
          selected to blend aesthetics with practicality, ensuring that you can create
          the perfect ambiance in any room of your home.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          At our store, we prioritize quality and craftsmanship. We partner with
          renowned manufacturers who share our commitment to sustainability and
          ethical production. Our user-friendly interface allows you to easily browse
          through categories, filter by style or material, and find the perfect pieces
          that suit your taste and budget. With detailed product descriptions and
          high-resolution images, you can shop with confidence, knowing that you’re
          making an informed decision.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Join us in transforming your living space into a sanctuary of comfort and style!
        </p>
      </div>
    </div>
  );
}

export default About;
