function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <div className="bg-[#0D1B29] rounded-[40px] p-12">

        <p className="text-orange-500 tracking-widest">
          CONTACT
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Let's Work Together
        </h1>

        <p className="text-gray-400 mt-8 text-lg max-w-2xl leading-8">
          I'm always interested in new opportunities, collaborations
          and exciting projects. Feel free to reach out!
        </p>

        <div className="mt-12 space-y-6">

          <div>
            <h3 className="text-gray-500 mb-2">
              Email
            </h3>

            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              ritweekdubey2006@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-gray-500 mb-2">
              Location
            </h3>

            <p className="text-2xl">
              Ghaziabad, India
            </p>
          </div>

        </div>

        <a
         href="mailto:ritweekdubey2006@gmail.com"
        className="
        inline-block
        mt-12
        bg-orange-500
        px-8
        py-4
        rounded-2xl
        hover:bg-orange-600
        transition
         "
        >
        Say Hello 👋
        </a>

      </div>
    </section>
  );
}

export default Contact;