import questionImg from "../assets/question.png";
import { FaUser, FaPhoneAlt, FaEnvelope, FaCommentDots } from "react-icons/fa";
import { useState } from "react";

function Contact() {

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();


setLoading(true);

const form = e.target;
const data = new FormData(form);

fetch("/", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams(data).toString(),
})
  .then(() => {
    setSuccess(true);
    setLoading(false);
    form.reset();

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  })
  .catch(() => {
    alert("Something went wrong");
    setLoading(false);
  });


};

return ( <div> <section className="py-24 px-4 sm:px-6">

```
    <h2 className="text-4xl sm:text-5xl font-light text-center text-white mb-12 sm:mb-16">
      Get in <span className="text-purple-400 font-medium">Touch</span>
    </h2>

    <div className="relative w-full max-w-7xl mx-auto bg-white/10 backdrop-blur border border-white/20 rounded-3xl px-6 sm:px-10 pt-14 pb-10 flex items-center shadow-2xl overflow-hidden">

      {/* Image */}
      <div className="md:flex justify-center hidden mb-10 md:absolute md:-left-10 md:mb-0">
        <img
          src={questionImg}
          alt="Question"
          className="w-[220px] sm:w-[280px] md:w-[360px] drop-shadow-2xl"
        />
      </div>

      <div className="w-full text-white md:ml-[260px] lg:ml-[320px]">

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10"
        >

          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot spam protection */}
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          {/* Name */}
          <div>
            <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
              <FaUser /> Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="w-full bg-transparent border-b border-gray-500 focus:border-purple-400 outline-none py-2"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
              <FaPhoneAlt /> Mobile number
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter mobile number"
              className="w-full bg-transparent border-b border-gray-500 focus:border-purple-400 outline-none py-2"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
              <FaEnvelope /> Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="w-full bg-transparent border-b border-gray-500 focus:border-purple-400 outline-none py-2"
              required
            />
          </div>

          {/* Service */}
          <div className="relative group">
            <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
              <FaUser /> Select service
            </label>

            <select
              name="service"
              className="appearance-none w-full bg-transparent border-b border-gray-500 focus:border-purple-400 outline-none py-3 text-gray-300"
            >
              <option className="bg-black">Web Development</option>
              <option className="bg-black">UI/UX Design</option>
              <option className="bg-black">App Development</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
              <FaCommentDots /> Message
            </label>
            <textarea
              name="message"
              rows="2"
              placeholder="Write your message here"
              className="w-full bg-transparent border-b border-gray-500 focus:border-purple-400 outline-none"
              required
            ></textarea>
          </div>

          {/* Button */}
          <div className="mt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition"
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </div>

        </form>

        {/* Success Popup */}
        {success && (
          <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
            🎉 Message sent successfully!
          </div>
        )}

      </div>
    </div>
  </section>
</div>


);
}

export default Contact;
