import Image from "next/image";
import noPhoto from "@/public/no-photo.png";
import botImg1 from "@/public/botImg1.png";
import { FaArrowDown } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <div className="p-20">
        <div className="flex justify-between">
          <div className="mt-8">
            <div className="text-6xl font-extrabold text-[#1F2B6C]">
              <p>24/7 Chatbot</p>
              <p className="mt-2">Support</p>
            </div>
            <div className="w-[600px]">
              <p className="mt-10 text-xl font-normal leading-loose">
                Ask our AI assistant any health question, anytime. Schedule
                convenient consultations with healthcare professionals.
              </p>
            </div>
            <a
              href="#ask"
              className="w-fit mt-8 px-6 py-4 flex items-center gap-2 text-sm bg-[#1F2B6C] text-white font-medium rounded-full"
            >
              <span>Just ask Gemina </span>
              <span>
                <FaArrowDown />
              </span>
            </a>
          </div>
          <div>
            <div className="w-[500px] h-[500px] relative">
              <div>
                <Image
                  src={botImg1}
                  alt="robot ai"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-r-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="w-[60%] mx-auto flex flex-col justify-center items-center">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Ask any question about your photo and skin issue here..."
              className="w-full block py-10 px-5 border rounded-lg shadow-emerald-200 focus:outline-none border-[#18AF0B] focus:border-2"
            />

            <div className="absolute top-0 right-0 bottom-0">
              <button className="w-[150px] h-full text-white text-base font-bold bg-[#18AF0B] hover:bg-[#388a30] transition-all duration-150 ease-linear rounded-r-md">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] mx-auto mt-5 mb-20 py-14 grid place-items-center">
        <div>
          <button
            id="ask"
            className="block mb-10 py-3 px-6 text-[#1F2B6C] text-base font-bold border-2 border-[#dfe3f9] hover:bg-[#dfe3f9] rounded-lg transition-all duration-150 ease-linear "
          >
            Upload Photo
          </button>
        </div>
        <div className="bg-white p-10 rounded-md">
          <div className="w-[400px] h-[350px] relative">
            <div>
              <Image
                src={noPhoto}
                alt="robot ai"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-r-md"
              />
            </div>
          </div>
          <p className="mt-8 text-base font-medium text-[#1F2B6C] text-center tracking-wide">
            Oops! No available photo yet
          </p>
        </div>

        <div className="mt-10 p-20 shadow-sm bg-white ">
          <h1 className="mb-10 text-lg font-semibold text-[#18AF0B]">
            Your AI Assistant's Health Result
          </h1>
          <p className="tracking-wide leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            laborum, eum sit fugiat perferendis odio quae necessitatibus
            reiciendis ducimus, maiores in repellendus, aliquam ut qui explicabo
            animi! Minima, tenetur! Aut! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Asperiores fugit soluta officiis, saepe adipisci
            architecto? Libero voluptates nihil expedita delectus fugiat itaque
            eum quisquam praesentium quidem laboriosam quia ea modi provident ut
            vero eos dolor illum quos aliquam molestiae, vitae aperiam
            voluptatibus! Aspernatur laboriosam reprehenderit, odit ex
            accusantium maiores eligendi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
