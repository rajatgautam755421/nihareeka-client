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
                    src="https://scontent.fbir1-1.fna.fbcdn.net/v/t1.6435-9/126276158_373438483947501_2355138242512398331_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=dZfPHsg5R1QAX9-bhOg&_nc_ht=scontent.fbir1-1.fna&oh=00_AT9hLTvMOqAZzuV_dYyDBQ1NKgLRZauLJ3ylkNnLwZSBsA&oe=62807206"
                    alt=""
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-semibold ">Amit Dhakal</h4>
                  <h5 className="text-sm  mb-4 welcome__principal">
                    CEO / Principal
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
                    We are delighted to have you among us. On behalf of all the
                    members and the management, we would like to extend our
                    warmest welcome and good wishes!The entire team of Nihareeka
                    is thrilled to welcome you . We hope youll do some amazing
                    works here! The entire team of Nihareeka is thrilled to
                    welcome you . We hope youll do some amazing works here!. We
                    hope youll do some amazing works here! The entire team of
                    Nihareeka is thrilled to welcome you . We hope youll do some
                    amazing works here
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
