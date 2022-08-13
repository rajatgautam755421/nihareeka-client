import React, { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import { ENDPOINT } from "../GlobalVariables";
const Form = ({ value }) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [faculty, setfaculty] = useState("csit");
  const [loading, setLoading] = useState(false);
  const [lastname, setlastname] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [motherName, setmotherName] = useState("");
  const [nationality, setnationality] = useState("nepal");
  const [permanentAddress, setpermanentAddress] = useState("");
  const [temporaryAddress, settemporaryAddress] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [email, setemail] = useState("");
  const [marksObtained, setmarksObtained] = useState("");
  const [tuMarks, settuMarks] = useState("");
  const [sc, setsc] = useState("");
  const [tuRoll, setTuroll] = useState("");
  const [typeOfForm, setTypeOfForm] = useState();
  console.log(typeOfForm);
  console.log(value);
  const handleClick = async (e) => {
    e.preventDefault();

    if (value === false) {
      if (
        firstName === "" ||
        lastname === "" ||
        faculty === "" ||
        dateOfBirth === "" ||
        fatherName === "" ||
        motherName === "" ||
        nationality === "" ||
        permanentAddress === "" ||
        temporaryAddress === "" ||
        contactNumber === "" ||
        email === "" ||
        tuRoll === "" ||
        marksObtained === "" ||
        tuMarks === "" ||
        sc === ""
      ) {
        toast.error("Fields Are Empty");
      } else {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          toast.error("Email must be a valid Email");
        } else {
          setLoading(true);
          try {
            setLoading(true);

            const { data } = await axios.post(`${ENDPOINT}/api/v1/form`, {
              firstName,
              middleName,
              lastname,
              faculty,
              dateOfBirth,
              fatherName,
              motherName,
              nationality,
              permanentAddress,
              temporaryAddress,
              contactNumber,
              email,
              marksObtained,
              tuMarks,
              tuRoll,
              sc,
              value,
            });
            console.log(data);
            toast.success(
              "Congratulation Your Admission Request Is Recieved By Admin And Will Be Reviewed Soon"
            );
            setLoading(false);
            setFirstName("");
            setmiddleName("");
            setlastname("");
            setdateOfBirth("");
            setfatherName("");
            setmotherName("");
            setpermanentAddress("");
            settemporaryAddress("");
            setcontactNumber("");
            setemail("");
            setmarksObtained("");
            settuMarks("");
            setsc("");
            setTuroll("");
          } catch (error) {
            console.log(error.message);
            setLoading(false);
          }
        }
      }
    } else {
      if (
        firstName === "" ||
        lastname === "" ||
        faculty === "" ||
        dateOfBirth === "" ||
        fatherName === "" ||
        motherName === "" ||
        nationality === "" ||
        permanentAddress === "" ||
        temporaryAddress === "" ||
        contactNumber === "" ||
        email === "" ||
        sc === ""
      ) {
        toast.error("Fields Are Empty");
      } else {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          toast.error("Email must be a valid Email");
        } else {
          setLoading(true);
          try {
            setLoading(true);

            const { data } = await axios.post(`${ENDPOINT}/api/v1/form`, {
              firstName,
              middleName,
              lastname,
              faculty,
              dateOfBirth,
              fatherName,
              motherName,
              nationality,
              permanentAddress,
              temporaryAddress,
              contactNumber,
              email,
              marksObtained: marksObtained === "" ? "0" : marksObtained,
              sc,
              value,
            });
            console.log(data);
            toast.success(
              "Congratulation Your Admission Request Is Recieved By Admin And Will Be Reviewed Soon"
            );
            setLoading(false);
            setFirstName("");
            setmiddleName("");
            setlastname("");
            setdateOfBirth("");
            setfatherName("");
            setmotherName("");
            setpermanentAddress("");
            settemporaryAddress("");
            setcontactNumber("");
            setemail("");
            setmarksObtained("");
            settuMarks("");
            setsc("");
            setTuroll("");
          } catch (error) {
            console.log(error.message);
            setLoading(false);
          }
        }
      }
    }
  };

  console.log(faculty);
  console.log(nationality);
  return (
    <>
      <div className="row">
        <div className="col-md-2"></div>
        <div
          style={{ border: "1px solid #000000", borderRadius: "5px" }}
          className="col mt-3 p-2"
        >
          <img
            style={{
              margin: "10px auto",
            }}
            src="https://res.cloudinary.com/mechi-pharma123/image/upload/v1654325163/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12.30.35_PM_g90xs4.jpg"
            alt=""
          />
          <h1
            style={{ textAlign: "center", color: "#0C4282", padding: "10px" }}
          >
            <b>NIHAREEKA COLLEGE</b>
            <br />
            <p style={{ color: "#074791", fontSize: "28px" }}>
              {" "}
              College of Management and Information Technology
            </p>
            <p style={{ color: "#000000", fontSize: "32px" }}>
              {" "}
              {value === true ? "Registration Form" : "Admission Form"}
            </p>
          </h1>
          <section className=" main__secction1">
            <div className="w-1/1 flex  overflow-hidden ">
              <div
                className="
        flex flex-col
        w-1 
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
                        {/* Student Name */}
                        <div className="row">
                          <div className="col-md-4 col-12">
                            <div>
                              <label
                                htmlFor="name"
                                className="block text-sm m-2 m-2 text-gray-600 text-xs font-medium text-neutral-600"
                              >
                                First name:
                              </label>
                              <div className="mt-1">
                                <input
                                  id="name"
                                  name="name"
                                  type="text"
                                  autocomplete="name"
                                  required=""
                                  placeholder="Enter first name"
                                  className="
                      contact__input__main
                      block
                      w-full
                      px-6
                      py-1
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
                                  value={firstName}
                                  onChange={(e) => setFirstName(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            {" "}
                            <div>
                              <label
                                htmlFor="name"
                                className="block text-sm m-2 m-2 text-gray-600 text-xs font-medium text-neutral-600"
                              >
                                Middle name:
                              </label>
                              <div className="mt-1">
                                <input
                                  id="name"
                                  name="name"
                                  type="text"
                                  autocomplete="name"
                                  required=""
                                  placeholder="Enter middle name"
                                  className="
                      contact__input__main
                      block
                      w-full
 px-6                      py-1
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
                                  value={middleName}
                                  onChange={(e) =>
                                    setmiddleName(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            {" "}
                            <div>
                              <label
                                htmlFor="name"
                                className="block text-sm m-2 text-gray-600 text-xs font-medium text-neutral-600"
                              >
                                Last name:
                              </label>
                              <div className="mt-1">
                                <input
                                  id="name"
                                  name="name"
                                  type="text"
                                  autocomplete="name"
                                  required=""
                                  placeholder="Enter last name"
                                  className="
                      contact__input__main
                      block
                      w-full
                      px-6
                      py-1
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
                                  value={lastname}
                                  onChange={(e) => setlastname(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          {/* Student Date of birth */}
                          <label
                            htmlFor="name"
                            className="block text-gray-600 m-2 text-xs text-sm font-medium text-neutral-600"
                          >
                            {" "}
                            Date of Birth:{" "}
                          </label>
                          <div>
                            <div className="mt-1">
                              <input
                                id="Notice"
                                name="Notice"
                                type="date"
                                autocomplete="Notice"
                                required=""
                                placeholder=" Date"
                                className="
                      contact__input__main
                      block
                      w-full
                      px-5
                      py-2
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
                                value={dateOfBirth}
                                onChange={(e) => setdateOfBirth(e.target.value)}
                                v
                              />
                            </div>
                          </div>
                          {/* Gender */}

                          {/* Father Name */}
                          <label
                            htmlFor="name"
                            className="block text-gray-600 m-2 text-xs text-sm font-medium text-neutral-600"
                          >
                            {" "}
                            Father Name:{" "}
                          </label>
                          <div className="mt-1">
                            <input
                              id="name"
                              name="name"
                              type="text"
                              autocomplete="name"
                              required=""
                              placeholder="Enter father name"
                              className="
                      contact__input__main
                      block
                      w-full
                      px-5
                      py-1
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
                              value={fatherName}
                              onChange={(e) => setfatherName(e.target.value)}
                            />
                          </div>
                          {/* Mother name */}
                          <label
                            htmlFor="name"
                            className="block text-gray-600 m-2 text-xs text-sm font-medium text-neutral-600"
                          >
                            {" "}
                            Mother Name:{" "}
                          </label>
                          <div className="mt-1">
                            <input
                              id="name"
                              name="name"
                              type="text"
                              autocomplete="name"
                              required=""
                              placeholder="Enter mother name"
                              className="
                      contact__input__main
                      block
                      w-full
                      px-5
                      py-1
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
                              value={motherName}
                              onChange={(e) => setmotherName(e.target.value)}
                            />
                          </div>
                          <label
                            htmlFor="address"
                            className="block text-gray-600 m-2 text-xs text-sm font-medium text-neutral-600"
                          >
                            {" "}
                            Permatnent Address[FORMAT:'Province,Distric,Tole']:{" "}
                          </label>
                          <div className="mt-1">
                            <input
                              id="address"
                              name="address"
                              type="text"
                              autocomplete="address"
                              required=""
                              placeholder="Enter address in (Province,District,tole)"
                              className="
                      contact__input__main
                      block
                      w-full
                      px-5
                      py-1
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
                              value={permanentAddress}
                              onChange={(e) =>
                                setpermanentAddress(e.target.value)
                              }
                            />
                          </div>
                          <label
                            htmlFor="address"
                            className="block text-gray-600 m-2 text-xs text-sm font-medium text-neutral-600"
                          >
                            {" "}
                            Temporary Address[FORMAT:'Province,Distric,Tole']:{" "}
                          </label>
                          <div className="mt-1">
                            <input
                              id="address"
                              name="address"
                              type="text"
                              autocomplete="address"
                              required=""
                              placeholder="Enter address in (Province,District,tole)"
                              className="
                      contact__input__main
                      block
                      w-full
                      px-5
                      py-1
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
                              value={temporaryAddress}
                              onChange={(e) =>
                                settemporaryAddress(e.target.value)
                              }
                            />
                          </div>
                          <label
                            htmlFor="email"
                            className="block text-gray-600 m-2 text-xs text-sm font-medium text-neutral-600"
                          >
                            {" "}
                            EMAIL ID:{" "}
                          </label>
                          <div className="mt-1">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autocomplete="email"
                              required=""
                              placeholder="Please Enter A Genuine Email Address."
                              className="
                      contact__input__main
                      block
                      w-full
                      px-5
                      py-1
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
                              value={email}
                              onChange={(e) => setemail(e.target.value)}
                            />
                          </div>
                          <label
                            htmlFor="email"
                            className="block text-gray-600 m-2 text-xs text-sm font-medium text-neutral-600"
                          >
                            {" "}
                            Contact Number:{" "}
                          </label>
                          <div className="mt-1">
                            <input
                              id="number"
                              name="number"
                              type="number"
                              autocomplete="number"
                              required=""
                              placeholder="Enter contact number"
                              className="
                      contact__input__main
                      block
                      w-full
                      px-5
                      py-1
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
                              value={contactNumber}
                              onChange={(e) => setcontactNumber(e.target.value)}
                            />
                          </div>
                          <div className="inline-block relative w-64">
                            <label className="block text-gray-600 m-2 text-xs text-sm font-medium text-neutral-600">
                              Nationality
                            </label>
                            <select
                              className="contact__input1__main  block w-full    px-4 py-2 pr-8 mt-1 mb-1 "
                              onChange={(e) => setnationality(e.target.value)}
                            >
                              <option value="nepal">Nepal</option>
                              <option value="india">India</option>
                            </select>
                          </div>
                          <div></div>
                          <div className="inline-block relative w-64">
                            <label className="block text-gray-600 m-2 text-xs text-sm font-medium text-neutral-600">
                              Choose Faculty{" "}
                            </label>
                            <select
                              className="contact__input1__main  block w-full   px-4 py-2 pr-8 mt-1 mb-1 "
                              onChange={(e) => setfaculty(e.target.value)}
                            >
                              <option value="csit">CSIT</option>
                              <option value="bca">BCA</option>
                              <option value="bim">BIM</option>

                              <option value="bbs">BBS</option>
                              <option value="bhm">BHM</option>
                            </select>
                          </div>
                          <label
                            htmlFor="email"
                            className="block text-gray-600 m-2 text-xs text-sm font-medium text-neutral-600"
                          >
                            {" "}
                            School/College name:{" "}
                          </label>
                          <div className="mt-1">
                            <input
                              id="sname"
                              name="sname"
                              type="text"
                              autocomplete="sname"
                              required=""
                              placeholder="Enter school/college name"
                              className="
                      contact__input__main
                      block
                      w-full
                      px-5
                      py-1
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
                              value={sc}
                              onChange={(e) => setsc(e.target.value)}
                            />
                          </div>

                          <label
                            htmlFor="email"
                            className="block text-gray-600 m-2 text-xs text-sm font-medium text-neutral-600"
                          >
                            {" "}
                            Marks obtained +2 or Equivalent(Optional):{" "}
                          </label>

                          <div className="mt-1">
                            <input
                              id="marks"
                              name="marks"
                              type="text"
                              autocomplete="marks"
                              required=""
                              placeholder="Enter marks obtained"
                              className="
                      contact__input__main
                      block
                      w-full
                      px-5
                      py-1
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
                              value={marksObtained}
                              onChange={(e) => setmarksObtained(e.target.value)}
                            />
                          </div>
                        </div>
                        {value === false && (
                          <>
                            <label
                              htmlFor="email"
                              className="block text-gray-600 m-2 text-xs text-sm font-medium text-neutral-600"
                            >
                              {" "}
                              TU Entrance Marks:
                            </label>
                            <div className="mt-1">
                              <input
                                id="email"
                                name="email"
                                type="text"
                                autocomplete="email"
                                required=""
                                placeholder="Enter TU marks"
                                className="
                      contact__input__main
                      block
                      w-full
                      px-5
                      py-1
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
                                value={tuMarks}
                                onChange={(e) => settuMarks(e.target.value)}
                              />
                            </div>
                            <label
                              htmlFor="email"
                              className="block text-gray-600 m-2 text-xs text-sm font-medium text-neutral-600"
                            >
                              {" "}
                              TU Entrance Roll Number:{" "}
                            </label>
                            <div className="mt-1">
                              <input
                                id="email"
                                name="email"
                                type="text"
                                autocomplete="email"
                                required=""
                                placeholder="Eter TU roll number"
                                className="
                      contact__input__main
                      block
                      w-full
                      px-5
                      py-1
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
                                value={tuRoll}
                                onChange={(e) => setTuroll(e.target.value)}
                              />
                            </div>
                          </>
                        )}
                        <p
                          style={{ fontSize: "18px" }}
                          class=" mt-2 text-red-500 text-xs "
                        >
                          Before Clicking{" "}
                          <b> Submit Check Your Application!!</b>
                        </p>
                        <div>
                          <button
                            className=" bg-indigo-500 mt-2 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg contact__us__main__button"
                            onClick={handleClick}
                            style={{ width: "100px", height: "45px" }}
                          >
                            {loading ? (
                              <TailSpin
                                color="#000"
                                height={30}
                                width={30}
                                timeout={2500}
                              />
                            ) : (
                              "Submit"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-md-2"></div>
      </div>
    </>
  );
};

export default Form;
