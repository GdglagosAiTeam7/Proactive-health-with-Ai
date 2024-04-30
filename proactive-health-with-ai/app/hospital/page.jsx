import Image from "next/image";
import luthHospital from "@/public/luth.jpg";
import reddingtonHospital from "@/public/reddington.jpg";
import lagoonHospital from "@/public/lagoon.jpg";

const Hospital = () => {
  return (
    <div className="mt-0 mb-10 md:my-20 px-5  md:p-10">
      <div className="w-[95%] md:w-[80%] mx-auto mt-20 md:mt-10 pb-14 md:p-3 md:px-10 md:py-14 md:flex md:gap-20 bg-white shadow-md border border-gray-300 rounded-lg">
        <div className="w-full md:w-[600px] h-[210px] relative rounded-sm shadow-sm">
          <div>
            <Image
              src={luthHospital}
              alt="hospital"
              fill
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:block">
          <h2 className="mt-5 md:mt-0 text-lg font-semibold tracking-wide text-[#101532] text-center md:text-left">
            Lagos State University Hospital (LUTH)
          </h2>
          <p className="mt-1.5 mb-3 text-sm text-gray-500 font-normal tracking-wide text-center md:text-left">
            Idi-Araba, Lagos
          </p>
          <p className="md:w-[85%] p-2 md:pr-10 text-sm md:text-base font-normal tracking-wide leading-loose text-center md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nemo
            voluptas optio dolore voluptates sed cumque nobis, aut maiores
            nihil. Eos voluptate quis, corrupti, in, nihil quidem aliquam
            obcaecati reprehenderit veritatis expedita temporibus!
          </p>

          <div className="mt-10 mb-5 md:mb-0">
            <a
              href="https://luth.gov.ng/"
              target="_blank"
              className="px-6 py-4 text-sm border-[1.2px] border-[#1F2B6C] text-[#1F2B6C] font-medium rounded-xl hover:bg-[#1F2B6C] hover:text-white cursor-pointer transition-all ease-in-out duration-200"
            >
              Consult a Dermatologist
            </a>
          </div>
        </div>
      </div>

      <div className="w-[95%] md:w-[80%] mx-auto mt-14 pb-8 md:p-3 md:px-10 md:py-14 md:flex md:gap-20 bg-white shadow-md border border-gray-300 rounded-lg">
        <div className="w-full md:w-[600px] h-[210px] relative rounded-sm shadow-sm">
          <div>
            <Image
              src={reddingtonHospital}
              alt="hospital"
              fill
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:block">
          <h2 className="mt-5 md:mt-0 text-lg font-semibold tracking-wide text-[#101532] text-center md:text-left">
            Reddington Multi-Specialist Hospital
          </h2>
          <p className="mt-1.5 mb-3 text-sm text-gray-500 font-normal tracking-wide text-center md:text-left">
            Victora Island, Lagos
          </p>
          <p className="md:w-[85%] p-2 md:pr-10 text-sm md:text-base font-normal tracking-wide leading-loose text-center md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nemo
            voluptas optio dolore voluptates sed cumque nobis, aut maiores
            nihil. Eos voluptate quis, corrupti, in, nihil quidem aliquam
            obcaecati reprehenderit veritatis expedita temporibus!
          </p>

          <div className="mt-10 mb-5 md:mb-0">
            <a
              href="https://reddingtonhospital.com/"
              target="_blank"
              className="px-6 py-4 text-sm border-[1.2px] border-[#1F2B6C] text-[#1F2B6C] font-medium rounded-xl hover:bg-[#1F2B6C] hover:text-white cursor-pointer transition-all ease-in-out duration-200"
            >
              Consult a Dermatologist
            </a>
          </div>
        </div>
      </div>

      <div className="w-[95%] md:w-[80%] mx-auto mt-14 pb-8 md:p-3 md:px-10 md:py-14 md:flex md:gap-20 bg-white shadow-md border border-gray-300 rounded-lg">
        <div className="w-full md:w-[600px] h-[210px] relative rounded-sm shadow-sm">
          <div>
            <Image
              src={lagoonHospital}
              alt="hospital"
              fill
              // style={{ objectFit: "contain" }}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:block">
          <h2 className="mt-5 md:mt-0 text-lg font-semibold tracking-wide text-[#101532] text-center md:text-left">
            Lagoon Hospital
          </h2>
          <p className="mt-1.5 mb-3 text-sm text-gray-500 font-normal tracking-wide text-center md:text-left">
            Ikeja, Lagos
          </p>
          <p className="md:w-[85%] p-2 md:pr-10 text-sm md:text-base font-normal tracking-wide leading-loose text-center md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nemo
            voluptas optio dolore voluptates sed cumque nobis, aut maiores
            nihil. Eos voluptate quis, corrupti, in, nihil quidem aliquam
            obcaecati reprehenderit veritatis expedita temporibus!
          </p>

          <div className="mt-10 mb-5 md:mb-0">
            <a
              href="https://www.lagoonhospitals.com/"
              target="_blank"
              className="px-6 py-4 text-sm border-[1.2px] border-[#1F2B6C] text-[#1F2B6C] font-medium rounded-xl hover:bg-[#1F2B6C] hover:text-white cursor-pointer transition-all ease-in-out duration-200"
            >
              Consult a Dermatologist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
