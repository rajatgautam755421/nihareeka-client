import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { ENDPOINT } from "../GlobalVariables";
import "./Dashboard.css";

const Notice = ({ setRender, render }) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    if (title === "" || startDate === "" || endDate === "") {
      toast.error("Fields Are Empty");
    } else {
      const { data } = await axios.post(`${ENDPOINT}/api/v1/notice`, {
        title,
        startDate,
        endDate,
      });
      try {
        console.log(data);
        setRender(!render);
        toast.success("Successfully Posted");
        setTitle("");
        setStartDate("");
        setEndDate("");
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <>
        <section className=" main__secction1">
          <div className="w-1/1 flex  overflow-hidden ">
            <div
              className="
        flex flex-col
        w-2/4
      
        flex-1
        px-4
        
        overflow-hidden
        sm:px-6
        lg:flex-none lg:px-20
        xl:px-24
        main__secction
      "
              style={{ width: "100%" }}
            >
              <div className="w-1/1 max-w-xl mx-auto lg:w-1/1 ">
                <div></div>
                <div>
                  <div>
                    <form>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-neutral-600"
                        >
                          {" "}
                          Notice Title{" "}
                        </label>
                        <div className="mt-1">
                          <input
                            id="Notice"
                            name="Notice"
                            type="text"
                            autocomplete="Notice"
                            required=""
                            placeholder="notice Title"
                            className="
                      contact__input__main
                      block
                      w-full
                      px-5
                      py-3
                      text-base text-neutral-600
                      placeholder-gray-300
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border border-transparent
                      rounded-lg
                      bg-gray-50
                      focus:outline-none
                      focus:border-transparent
                      focus:ring-2
                      focus:ring-white
                      focus:ring-offset-2
                      focus:ring-offset-gray-300
                    "
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-neutral-600"
                        >
                          {" "}
                          Start Date{" "}
                        </label>
                        <div className="mt-1">
                          <input
                            id="Notice"
                            name="Notice"
                            type="date"
                            autocomplete="Notice"
                            required=""
                            placeholder="End Date"
                            className="
                      contact__input__main
                      block
                      w-full
                      px-5
                      py-3
                      text-base text-neutral-600
                      placeholder-gray-300
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border border-transparent
                      rounded-lg
                      bg-gray-50
                      focus:outline-none
                      focus:border-transparent
                      focus:ring-2
                      focus:ring-white
                      focus:ring-offset-2
                      focus:ring-offset-gray-300
                    "
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-neutral-600"
                        >
                          {" "}
                          End Date{" "}
                        </label>
                        <div className="mt-1">
                          <input
                            id="Notice"
                            name="Notice"
                            type="date"
                            autocomplete="Notice"
                            required=""
                            placeholder="End Date"
                            className="
                      contact__input__main
                      block
                      w-full
                      px-5
                      py-3
                      text-base text-neutral-600
                      placeholder-gray-300
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border border-transparent
                      rounded-lg
                      bg-gray-50
                      focus:outline-none
                      focus:border-transparent
                      focus:ring-2
                      focus:ring-white
                      focus:ring-offset-2
                      focus:ring-offset-gray-300
                    "
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          className=" bg-indigo-500 border-0 py-2 mt-4 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg contact__us__main__button"
                          onClick={handleClick}
                        >
                          Upload
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Notice;
