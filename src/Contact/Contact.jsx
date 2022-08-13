import React, { useState, useEffect } from "react";
import "./Contact.css";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import axios from "axios";
import Loader from "../Loader";
import { ENDPOINT } from "../GlobalVariables";

const Contact = ({ badge, setBadge }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const request = true;
  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      toast.error("Fields Cannot Be Empty");
    } else {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setLoading(true);
        try {
          const { data } = await axios.post(`${ENDPOINT}/api/v1/contact`, {
            name,
            email,
            message,
          });
          setLoading(true);

          console.log(data);
          toast.success(`${name} Your Feedback Is Successfully Recieved`);
          setName("");
          setEmail("");
          setMessage("");
          setLoading(false);
          const response = await axios.put(
            `${ENDPOINT}/api/v1/notification/${request}`
          );
        } catch (error) {
          toast.error("Network Error");
          setLoading(false);
        }
      } else {
        toast.error("Email must be a valid Email");
      }
    }
  };
  return (
    <>
      {loading && <Loader />}
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="row mt-4">
          <div className="col-md-8 mt-4">
            {show ? (
              <div
                className="container-fluid"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <ThreeDots color="#EC008D" height={200} width={200} />
              </div>
            ) : (
              <div
                className=" rounded-lg overflow-hidden sm:mr-10flex items-end justify-start relative"
                style={{ height: "63vh" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.4641959112287!2d87.27234781454744!3d26.472994885254963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef746ef82fe577%3A0x4bec2c5316a5a058!2sNihareeka%20College!5e0!3m2!1sen!2snp!4v1650338215344!5m2!1sen!2snp"
                  width="600"
                  height="450"
                  // style="border:0;"
                  allowFullScreen={true}
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            )}
          </div>
          <div className="col-md-4 container mt-1">
            <h3
              style={{
                textAlign: "center",
                color: "#406A9D",
              }}
            >
              Contact Us
            </h3>
            <div
              className="bg-white flex flex-col md:ml-auto"
              style={{ width: "90%", margin: "0px auto" }}
            >
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-500 focus:border-#d90081-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out contact__input__main"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-#d90081-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out contact__input__main"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-#d90081-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out contact__input__main"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                className=" bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg contact__us__main__button"
                onClick={handleClick}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container details__contact__us">
        <div className="row">
          <div className="col-md-4">
            <h4
              style={{
                marginTop: "20px",
                textAlign: "center",
                color: "#406A9D",
              }}
            >
              Address
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="details__address__main">
                <div>
                  <BusinessOutlinedIcon className="details__address__main__icon" />
                  <span className="address__text">
                    Chandani Marg, Biratnagar
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h4
              style={{
                marginTop: "20px",
                textAlign: "center",
                color: "#406A9D",
              }}
            >
              Phone Numbers
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="details__address__main">
                <LocalPhoneOutlinedIcon className="details__address__main__icon" />
                <span>021-512863</span>
              </div>
              <div className="details__address__main mt-2">
                <LocalPhoneOutlinedIcon className="details__address__main__icon" />
                <span>021-512864</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h4
              style={{
                marginTop: "20px",
                textAlign: "center",
                color: "#406A9D",
              }}
            >
              Email
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="details__address__main">
                <div>
                  <EmailOutlinedIcon className="details__address__main__icon" />
                  <span>nihareekacollegebrt@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
