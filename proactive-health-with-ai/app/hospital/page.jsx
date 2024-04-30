import Image from "next/image";
import luthHospital from "@/public/luth.jpg";
import reddingtonHospital from "@/public/reddington.jpg";
import lagoonHospital from "@/public/lagoon.jpg";

const Hospital = () => {
  return (
    <div className="p-10">
      <div className="w-[80%] mx-auto p-10 flex gap-20 bg-white shadow-lg rounded-lg">
        <div className="w-[500px] h-[210px] relative rounded-sm shadow-sm">
          <div>
            <Image
              src={luthHospital}
              alt="hospital"
              fill
              //   style={{ objectFit: "contain" }}
              className="rounded-xl"
            />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold tracking-wide text-[#101532]">
            Lagos State University Hospital (LUTH)
          </h2>
          <p className="mt-1.5 mb-3 text-xs text-gray-500 font-normal tracking-wide">
            Idi-Araba, Lagos
          </p>
          <p className="w-[85%] pr-10 text-[11px] font-normal tracking-wide leading-loose">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nemo
            voluptas optio dolore voluptates sed cumque nobis, aut maiores
            nihil. Eos voluptate quis, corrupti, in, nihil quidem aliquam
            obcaecati reprehenderit veritatis expedita temporibus!
          </p>

          <div className="mt-10">
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

      <div className="w-[80%] mx-auto mt-10 p-10 flex gap-20 bg-white shadow-lg rounded-lg">
        <div className="w-[500px] h-[210px] relative rounded-sm shadow-sm">
          <div>
            <Image
              src={reddingtonHospital}
              alt="hospital"
              fill
              className="rounded-xl"
            />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold tracking-wide text-[#101532]">
            Reddington Multi-Specialist Hospital
          </h2>
          <p className="mt-1.5 mb-3 text-xs text-gray-500 font-normal tracking-wide">
            Victora Island, Lagos
          </p>
          <p className="w-[85%] pr-10 text-[11px]  font-normal tracking-wide leading-loose">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nemo
            voluptas optio dolore voluptates sed cumque nobis, aut maiores
            nihil. Eos voluptate quis, corrupti, in, nihil quidem aliquam
            obcaecati reprehenderit veritatis expedita temporibus!
          </p>

          <div className="mt-10">
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

      <div className="w-[80%] mx-auto mt-10 p-10 flex gap-20 bg-white shadow-lg rounded-lg">
        <div className="w-[500px] relative rounded-sm shadow-sm">
          <div>
            <Image
              src={lagoonHospital}
              alt="hospital"
              fill
              className="rounded-xl"
            />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold tracking-wide text-[#101532]">
            Lagoon Hospital
          </h2>
          <p className="mt-1.5 mb-3 text-xs text-gray-500 font-normal tracking-wide">
            Ikeja, Lagos
          </p>
          <p className="w-[85%] pr-10 text-[11px] font-normal tracking-wide leading-loose">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nemo
            voluptas optio dolore voluptates sed cumque nobis, aut maiores
            nihil. Eos voluptate quis, corrupti, in, nihil quidem aliquam
            obcaecati reprehenderit veritatis expedita temporibus!
          </p>

          <div className="mt-10">
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
