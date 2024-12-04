import { studyExperiences } from "../constants";

const StudyExperience = () => {
  return (
    <section className="c-space my-20" id="study">
      <div className="w-full text-white-600">
        <p className="head-text mb-8">My Education</p>

        <div className="edu-container flex flex-col space-y-8">
          {studyExperiences.map(
            ({ icon, institution, degree, duration, details }, index) => (
              <div
                key={index}
                className="flex items-start space-x-4"
              >
                {/* Icon Section */}
                <div className="relative">
                  <img
                    src={icon}
                    alt={`${institution} logo`}
                    className="w-14 h-14 rounded-full bg-gray-800 p-2"
                  />
                  {index !== studyExperiences.length - 1 && (
                    <div className="absolute top-14 left-5 w-0.5 h-full bg-gray-700" />
                  )}
                </div>

                {/* Text Section */}
                <div>
                  <p className="font-bold text-white-800">{institution}</p>
                  <p className="text-sm text-gray-400">
                    {degree} -- {duration}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">{details}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default StudyExperience;
