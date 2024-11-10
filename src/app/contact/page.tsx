function Contact() {
  return (
    <section
      id="contact"
      className="my-10 py-8 px-4 bg-bisque shadow-lg rounded-lg"
    >
      <h2 className="text-3xl font-semibold text-center text-pink-600 mb-6">
        Contact Us
      </h2>
      <form className="max-w-3xl mx-auto">
        <div className="mb-6">
          <label
            className="block mb-2 text-gray-800 text-lg font-medium"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            className="border border-gray-300 w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
            type="text"
            id="name"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block mb-2 text-gray-800 text-lg font-medium"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="border border-gray-300 w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
            type="email"
            id="email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block mb-2 text-gray-800 text-lg font-medium"
            htmlFor="message"
          >
            Message:
          </label>
          <textarea
            className="border border-gray-300 w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
            id="message"
            rows={6}
            required
          ></textarea>
        </div>
        <button
          className="bg-pink-600 text-white w-full p-3 rounded-md font-semibold hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
