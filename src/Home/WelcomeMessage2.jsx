import React from "react";
import "./Home.css";
const WelcomeMessage2 = () => {
  return (
    <>
      <div className="container-fluid">
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
                    src="https://res.cloudinary.com/mechi-pharma123/image/upload/v1654265338/Staff/sipesh_dkoyo6.jpg"
                    alt=""
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-semibold ">Dipesh Bastola</h4>
                  <h5 className="text-sm  mb-4 welcome__principal">
                    The Vice Chairman
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
                    At the outset, Nihareeka College Family sincerely extends
                    its best wishes for your safety, good health and happiness.
                    In order to facilitate our students to realize their full
                    potentials over the period of 4 years, we have plenty of
                    support systems such as Labs, Library and so on and the
                    Value-added programs to augment the all round development of
                    their personalities. The success of our alumni being
                    involved in highly prestigious national and international
                    organizations/IT companies justify our vision and
                    educational strategies giving us the confidence that the
                    College is effectively moving in the right direction under
                    the TU.
                    <br /> Finally, I express my sincere thank-you to all the
                    Directors of the Board, dignitaries of the TU, all the
                    promoters and our beloved students for their positive
                    contributions to take the College to this height of success.
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

export default WelcomeMessage2;
