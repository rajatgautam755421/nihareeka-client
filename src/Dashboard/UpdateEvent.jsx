import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../Loader";
import "./Dashboard.css";
const UpdateEvent = ({ fetch4, setFetch4 }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pic, setPic] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const postDetails = (pics) => {
    if (pics === undefined) {
      toast.error("Invalid Image");
      return;
    }
    const data = new FormData();
    data.append("file", pics);

    data.append("upload_preset", "zfwzbdlg");

    data.append("cloud_name", "dpwgvr1b7");

    fetch("https://api.cloudinary.com/v1_1/dpwgvr1b7/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPic(data.url.toString());
        console.log(pic);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (title === "" || description === "" || category === "") {
      toast.error("Fields Are Empty");
      setLoading(false);
    } else {
      setLoading(true);
      const { data } = await axios.post(
        "https://nihareeka-college.herokuapp.com/api/v1/events",
        {
          pic,
          title,
          category,
          description,
        }
      );
      try {
        setLoading(true);
        toast.success("Event Is Successfully Posted");
        setCategory("");
        setDescription("");
        setTitle("");
        setFetch4(!fetch4);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    }
  };

  return (
    <>
      {loading && <Loader />}
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
                    {/* Input File */}
                    <div class="mb-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Choose Image{" "}
                      </label>
                      <input
                        class="form-control"
                        type="file"
                        id="formFile"
                        accept="image/*"
                        onChange={(e) => postDetails(e.target.files[0])}
                        style={{ marginTop: "6px" }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        Event Title
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          autocomplete="email"
                          required=""
                          placeholder="Image Title"
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
                        Event Description{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          autocomplete="email"
                          required=""
                          placeholder="Image Description"
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
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Event Catagory{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          autocomplete="email"
                          required=""
                          placeholder="Image Description"
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
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        className=" bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg contact__us__main__button mt-4"
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
  );
};

export default UpdateEvent;
