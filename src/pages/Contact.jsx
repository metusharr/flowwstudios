import questionImg from "../assets/question.png";
import backgroundimg from "../assets/background.png";
import { FaUser, FaPhoneAlt, FaEnvelope, FaCommentDots } from "react-icons/fa";

function Contact() {
  return (
    <div
      
    >
      <section className="py-24 px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-light text-center text-white mb-12 sm:mb-16">
          Get in <span className="text-purple-400 font-medium">Touch</span>
        </h2>

        <div className="relative w-full max-w-7xl mx-auto bg-white/1 backdrop-blur border border-white/20 rounded-3xl px-6 sm:px-10 pt-14 sm:pt-18 pb-10 flex items-center shadow-2xl overflow-hidden">

          {/* Question Image */}
          <div className="
            md:flex justify-center hidden mb-10
            md:absolute md:-left-10  md:mb-0
          ">
            <img
              src={questionImg}
              alt="Question"
              className="w-[220px]  sm:w-[280px] md:w-[360px] drop-shadow-2xl"
            />
          </div>

          {/* Right Form Section */}
          <div className="
            w-full text-white
            md:ml-[260px] lg:ml-[320px]
          ">

            <form className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">

              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                  <FaUser /> Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full bg-transparent border-b border-gray-500 focus:border-purple-400 outline-none py-2"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                  <FaPhoneAlt /> Mobile number
                </label>
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  className="w-full bg-transparent border-b border-gray-500 focus:border-purple-400 outline-none py-2"
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                  <FaEnvelope /> Email
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full bg-transparent border-b border-gray-500 focus:border-purple-400 outline-none py-2"
                />
              </div>

              {/* Select */}
              <div className="relative group">
                <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                  <FaUser /> Select service
                </label>

                <select
                  className="appearance-none w-full bg-transparent border-b border-gray-500 
                  group-hover:border-gray-300 focus:border-purple-400 
                  outline-none py-3 pr-8 text-gray-300 transition duration-300"
                >
                  <option className="bg-black text-white">Select your service</option>
                  <option className="bg-black text-white">Web Development</option>
                  <option className="bg-black text-white">UI/UX Design</option>
                  <option className="bg-black text-white">App Development</option>
                </select>

                <span className="absolute right-0 top-10 text-gray-400 group-hover:text-purple-400 transition duration-300">
                  ▾
                </span>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                  <FaCommentDots /> Message
                </label>
                <textarea
                  rows="2"
                  placeholder="Write your message here"
                  className="w-full bg-transparent border-b border-gray-500 focus:border-purple-400 outline-none"
                ></textarea>
              </div>

              {/* Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:scale-105 transition duration-300 shadow-lg"
                >
                  <img src="/arrow.png" className="w-5 h-5" alt="" />
                  Send message
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;