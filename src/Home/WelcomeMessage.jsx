import React from "react";
import "./Home.css";
const WelcomeMessage = () => {
  return (
    <>
      <div className="container-fluid">
        <h1
          style={{ textAlign: "center", color: "#D90081", marginTop: "25px" }}
        >
          <b>Welcome Message</b>
        </h1>
        <section className="mb-2 text-pink-1000">
          <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
            <p className="mb-6 pb-3 md:mb-12 md:pb-0"></p>
          </div>
          <div className="grid md:grid-cols-1 gap-1 text-center">
            <div>
              <div className="block rounded-lg shadow-lg bg-white">
                <div
                  className="overflow-hidden rounded-t-lg h-28"
                  style={{ backgroundColor: "#9d789b" }}
                />
                <div className="w-24 -mt-22 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                  <img
                    src="https://scontent.fktm12-1.fna.fbcdn.net/v/t1.6435-1/102409472_3021721871229902_2953006342756319143_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-6&_nc_sid=7206a8&_nc_ohc=23iqUnz2BUIAX8Q8DRI&_nc_ht=scontent.fktm12-1.fna&oh=00_AT8s_nAW1BK4WdvWtu1oiHcEjUTVU4Z0ECH4PvWCL95pZQ&oe=62AC5DEB"
                    alt=""
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-semibold ">
                    Amit Dhakal(Msc.TU)
                  </h4>
                  <h5 className="text-sm  mb-4 welcome__principal">
                    The Campus Chief
                  </h5>

                  <hr />
                  <p className="mt-4">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="quote-left"
                      className="w-6 pr-2 inline-block"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                      />
                    </svg>
                    It's my pleasure to let you know about Nihareeka College, a
                    college of management and information technology. To achieve
                    its goal of high quality education, the college focuses much
                    on management and information technology in its academic
                    voyage along with experimental and experiential learning.
                    Our resource persons are highly qualified and dedicated and
                    are willing to go an extra mile in developing and enhancing
                    student's capabilities of achieving their goals. Apart from
                    academic activities and on-campus programmes, Nihareeka
                    College is also associated with software companies, system
                    administration, network management and off campus
                    programmes. Finally, I recommend all interested and
                    deserving students to join BBS or B.Sc. CSIT programmes run
                    by Nihareeka College; affiliated to Tribhuvan University.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WelcomeMessage;
