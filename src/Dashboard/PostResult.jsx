import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { ENDPOINT } from "../GlobalVariables";

const PostResult = ({ fetch3, setFetch3 }) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [faculty, setFaculty] = useState("bsccsit");

  const handleCLick = async (e) => {
    e.preventDefault();
    if (title === "" || link === "" || faculty === "") {
      toast.error("Fields Are Empty");
    } else {
      const { data } = await axios.post(`${ENDPOINT}/api/v1/result`, {
        title,
        faculty,
        link,
      });
      try {
        console.log(data);
        toast.success("Result Posted Successfully");
        setFetch3(!fetch3);
        setTitle("");
        setLink("");
        setFaculty("");
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    <>
      <section className="main__secction1">
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
                        Result Title
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          autocomplete="email"
                          required=""
                          placeholder="Result Title"
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
                    <div className="inline-block relative w-64">
                      <label className="block text-sm font-medium text-neutral-600">
                        Choose Faculty{" "}
                      </label>
                      <select
                        onChange={(e) => setFaculty(e.target.value)}
                        className="contact__input1__main  w-full   px-4 py-3 pr-8 mt-1 mb-1 "
                      >
                        <option value="bsccsit">CSIT</option>
                        <option value="bca">BCA</option>
                        <option value="bim">BIM</option>

                        <option value="bbs">BBS</option>
                        <option value="bhm">BHM</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Result Link{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          autocomplete="email"
                          required=""
                          placeholder="Result Link"
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
                          value={link}
                          onChange={(e) => setLink(e.target.value)}
                        />
                      </div>
                    </div>

                    <div style={{ marginTop: "22px" }}>
                      <button
                        className=" bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg contact__us__main__button"
                        onClick={handleCLick}
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
  );
};

export default PostResult;
