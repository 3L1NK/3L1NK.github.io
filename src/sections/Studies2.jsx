import { studyExperiences } from "../constants";


const StudyExperience = () => {
  return (
    <section className="c-space my-20" id="study">
      <div className="w-full text-white-600">
        <p className="head-text">My Education</p>

        <div className="edu-container">
        <div className="work-canvas">
        </div>
          <div className="study-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {studyExperiences.map(
                ({ icon, institution, degree, duration, details }, index) => (
                  <div
                    key={index}
                    className="study-content_container group"
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="study-content_logo">
                        <img
                          className="w-9 h-9"
                          src={icon}
                          alt={`${institution} logo`}
                        />
                      </div>
                      <div className="study-content_bar" />
                    </div>

                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">
                        {institution}
                      </p>
                      <p className="text-sm mb-5">
                        {degree} -- <span>{duration}</span>
                      </p>
                      <p className="group-hover:text-white transition-all ease-in-out duration-500">
                        {details}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyExperience;
