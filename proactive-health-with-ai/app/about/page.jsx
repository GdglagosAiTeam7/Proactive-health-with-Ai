import React from "react";

const About = () => {
  return (
    <div className="py-8 px-5 md:p-20">
      <div className="w-[95%] md:w-[60%] mx-auto rounded-sm">
        {/* text-[#101532] */}
        {/* bg-[#d7e4fc] */}
        <div className="py-8 px-5 md:p-20 mt-7 border-l-4 border-l-[#1F2B6C] bg-[#f1f6ff] rounded-md">
          <h2 className="text-xl md:text-3xl leading-loose tracking-wide text-[#101532] font-extrabold text-center">
            Proactive Health With AI (PHAI)
          </h2>
          <h2 className="mt-2 md:mt-5 mb-10 text-lg md:text-2xl md:leading-loose tracking-wide text-[#101532] font-normal text-center">
            We are Professional AI Medical Assistant
          </h2>
          <div className="text-[.9rem] md:text-base leading-loose tracking-wide text-[#101532] font-normal text-center">
            <p>
              PHAI is a comprehensive mobile health app that combines AI-powered
              disease prediction, image-based diagnosis, and a tiered
              consultation system to empower users to proactively manage their
              health and improve overall population health outcomes.
            </p>

            <p className="mt-1">
              It is an AI-powered disease prediction Image-based symptom
              analysis E-health chatbot with symptom checker Tiered consultation
              system (chatbot & real doctor consultations) Empowering
              individuals to proactively manage their health and improve overall
              well-being.
            </p>
            <p className="mt-3">
              Leveraging Google Cloud Platform (GCP) for secure data storage,
              AI/ML services (e.g., Vertex AI) for disease prediction and image
              analysis. It offers a blend of readily available chatbot
              consultations for basic needs, and premium access to real doctors
              for more complex issues.
            </p>
            <p className="mt-3">
              It Provide a reliable preliminary diagnosis for skin conditions
              and other visual symptoms, empowering users with early insights
              before visiting a doctor. It goes beyond generic predictions by
              offering detailed reports on the likelihood of developing specific
              diseases based on user data.
            </p>
            <p className="mt-3">
              By providing personalized health plans and recommendations, PHAI
              encourages healthy habits and disease prevention. This can lead to
              a stronger immune system and a population less susceptible to
              illnesses, ultimately reducing mortality rates. Unique Features:
            </p>
            <p className="mt-3">
              PHAI's AI predictions guide users towards preventive actions like
              lifestyle changes or vaccinations based on their health risks.
              This empowers individuals to take control of their health and
              reduce the likelihood of developing chronic diseases
            </p>
            <p className="mt-3">
              The e-health chatbot provides 24/7 access to basic health
              information and symptom analysis. Premium features enable
              convenient consultations with real doctors, reducing wait times
              and improving patient-doctor communication. Boosting Immunity and
              Reducing Mortality:
            </p>
            <p>
              The image-based diagnosis feature utilizes AI algorithms to
              analyze pictures of skin conditions, rashes, or other visual
              symptoms. This can help users get a preliminary diagnosis before
              seeing a doctor, improving access to care and reducing
              misdiagnoses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
