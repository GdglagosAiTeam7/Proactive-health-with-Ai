"use client"
import React, {useState} from 'react'
import Image from "next/image";
import Link from "next/link";
// import inputFile from "../../../${file.name}"
import noPhoto from "@/public/no-photo.png";
// import botImg1 from "/botImg1.png";
import botImg1 from "@/public/botImg1.png";
import botImg2 from "@/public/ai-doctor-b1.png";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import axios from 'axios';


const Home = () => {
const [file, setFile] = useState();
const[question, setQuestion] = useState("")
const [response, setResponse] = useState();



function handleChange(e){
  setQuestion(e.target.value)
}

const handleClick = async (e) => {
  // console.log("Selected file:", file.type, file.name);
  console.log(file)
  try {
    const newPost = await axios.post(
      "https://proactive-health-ai.onrender.com/api/upload-image",
      {
        question,
        mimeType: file.type,
        path: `out/${file.name}`,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const post = await newPost.data;
    setResponse(post);
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
};

  return (
    <div className="pb-10">
      <div className="p-10  md:p-20 ">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mt-8">
            <div className="text-3xl text-center md:text-left md:text-5xl font-extrabold text-[#1F2B6C]">
              <p>24/7 Chatbot</p>
              <p className="mt-2 md:mt-5">Support</p>
            </div>
            <div className="flex flex-col items-center md:block">
              <div className="md:w-[600px]">
                <p className="mt-10 text-base md:text-[1.2rem] font-normal md:font-extralight text-center md:text-left leading-loose md:leading-[2rem] tracking-wide">
                  Take a picture of your skin issue, Upload here and Ask our AI
                  assistant any health question about it. You can also schedule
                  convenient consultations with healthcare professionals and
                  Dermatologist.
                </p>
              </div>
              <div>
                <a
                  href="#ask"
                  className="w-fit mt-8 px-6 py-4 flex items-center gap-2 text-sm md:text-base border border-[#1F2B6C] text-[#1F2B6C] hover:bg-[#dde0f2] hover:border-[#a5aac5] font-medium md:font-semibold tracking-wide rounded-full shadow-lg transition-all ease-linear duration-200"
                >
                  <span>Just ask PHAI</span>
                  <span>
                    <FaArrowDown />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="hidden md:block w-[300px] h-[300px] md:w-[500px] md:h-[500px] mt-10 md:mt-0 relative">
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
            <div className="block md:hidden w-[300px] h-[300px] md:w-[500px] md:h-[500px] mt-10 md:mt-0 relative">
              <div>
                <Image
                  src={botImg2}
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
        <div className="w-[90%] md:w-[60%] mx-auto flex flex-col justify-center items-center">
          <div className="w-full relative bg-[#f6f6fc] p-5">
            <input
              type="text"
              placeholder="Ask about your photo e.g diagnoses.."
              className="w-full block py-4 md:py-10 px-5 border rounded-sm shadow-sm focus:outline-none focus:border-1.2 focus:border-[#dddfe8] text-wrap placeholder:text-sm md:placeholder:text-base"
              value={question}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <button 
            className="mt-3 md:mt-5 py-3 px-8 text-white text-base font-medium bg-[#3f4a87] hover:bg-[#1F2B6C] hover:text-white transition-all duration-150 ease-linear rounded-sm tracking-wide shadow-md"
            onClick={handleClick}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      {
        response !== null ? 
        <div>
        <div className="w-[90%] mx-auto mt-5 mb-5 md:my-10  py-10 px-5 md:py-14 grid place-items-center bg-[#f9fafc] md:bg-white">
           {response && <Image 
            // src={`"../../../${file.name}"`}
            src={`/${file.name}`}
            alt="input image"
            width={400}
            height={200}
            // fill
            // style={{ objectFit: "cover", width: '40%'}}
            // className="rounded-r-md"
           />}
        </div>
          <div className="w-[70%] mx-auto mt-5 mb-5 md:my-10  py-10 px-5 md:py-14 grid place-items-center bg-[#f9fafc] md:bg-white">
           {response}
      </div> 
        </div> 
        : 
        <div className="w-[90%] mx-auto mt-5 mb-5 md:my-10  py-10 px-5 md:py-14 grid place-items-center bg-[#f9fafc] md:bg-white">
        <div className="w-[90%] h-[300px] md:w-[400px] md:h-[350px] relative border border-[#dfe3f9] bg-white rounded-md shadow-md">
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

        <div className="text-center">
          <p className="mt-8 text-base font-medium text-[#1F2B6C] text-center tracking-wide">
            Oops! No available photo yet
          </p>
          <p className="mt-1 text-sm font-extralight text-gray-400 text-center tracking-wide">
            Upload a Photo
          </p>
        </div>
      </div>
      }
      {/* <div className="w-[90%] mx-auto mt-5 mb-5 md:my-10  py-10 px-5 md:py-14 grid place-items-center bg-[#f9fafc] md:bg-white">
        <div className="w-[90%] h-[300px] md:w-[400px] md:h-[350px] relative border border-[#dfe3f9] bg-white rounded-md shadow-md">
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

        <div className="text-center">
          <p className="mt-8 text-base font-medium text-[#1F2B6C] text-center tracking-wide">
            Oops! No available photo yet
          </p>
          <p className="mt-1 text-sm font-extralight text-gray-400 text-center tracking-wide">
            Upload a Photo
          </p>
        </div>
      </div> */}

      <div className="mt-10 w-[90%] mx-auto grid place-content-center">
        <input
          id="ask"
          type="file"
          accept="image/*"
          onChange={(e) => response == null && setFile(e.target.files[0])}
          className="block mb-10 py-3 px-6 text-[#18AF0B] text-base font-medium border border-[#18AF0B] hover:border-[#dfe3f9] hover:bg-[#cef5ca] rounded-lg transition-all duration-150 ease-linear tracking-wide shadow-lg "
        />
           

        {/* <button
          id="ask"
          className="block mb-10 py-3 px-6 text-[#18AF0B] text-base font-medium border border-[#18AF0B] hover:border-[#dfe3f9] hover:bg-[#cef5ca] rounded-lg transition-all duration-150 ease-linear tracking-wide shadow-lg "
        >
          Upload Photo
        </button> */}

      </div>

      <div className="w-[90%] md:w-[60%] mx-auto py-10 mt-5 mb-10 md:p-20 shadow-md bg-[#f9fafc] rounded-b-3xl">
        <h1 className="p-3 mb-5 text-2xl font-medium text-[#1F2B6C] text-center">
          Your AI Assistant's Health Result
        </h1>
        <p className="px-5 text-sm md:text-lg tracking-wide leading-loose text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum,
          eum sit fugiat perferendis odio quae necessitatibus reiciendis
          ducimus, maiores in repellendus, aliquam ut qui explicabo animi!
          Minima, tenetur! Aut! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Asperiores fugit soluta officiis, saepe adipisci
          architecto? Libero voluptates nihil expedita delectus fugiat itaque
          eum quisquam praesentium quidem laboriosam quia ea modi provident ut
          vero eos dolor illum quos aliquam molestiae, vitae aperiam
          voluptatibus! Aspernatur laboriosam reprehenderit, odit ex accusantium
          maiores eligendi!
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5 pb-10">
        <div>
          <Link
            href="/hospital"
            className="w-fit mt-8 px-6 py-4 flex items-center gap-2 text-sm md:text-base border border-[#1F2B6C] text-[#1F2B6C] hover:bg-[#dde0f2] hover:border-[#a5aac5] font-medium md:font-semibold tracking-wide rounded-full shadow-lg transition-all ease-linear duration-200"
          >
            <span>Need a Specialist?</span>
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </div>
        <div>
          <Link
            href="/pharmacy"
            className="w-fit md:mt-8 px-6 py-4 flex items-center gap-2 text-sm md:text-base border border-[#1F2B6C] text-[#1F2B6C] hover:bg-[#dde0f2] hover:border-[#a5aac5] font-medium md:font-semibold tracking-wide rounded-full shadow-lg transition-all ease-linear duration-200"
          >
            <span>Visit a Pharmacy</span>
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
