import React, { useState } from "react";
import Form from "./Form";
import "./FormHome.css";

const FormHome = () => {
  const [form, setFrom] = useState(true);
  return (
    <>
      <div
        className="mt-4"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          onClick={() => {
            setFrom(true);
          }}
          className={
            form
              ? "m-3 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg contact__us__main__button form__true"
              : "m-3 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg contact__us__main__button "
          }
        >
          Online Registration
        </button>
        <button
          onClick={() => {
            setFrom(!form);
          }}
          className={
            form === false
              ? "m-3 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg contact__us__main__button form__true"
              : "m-3 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg contact__us__main__button "
          }
        >
          Online Admission
        </button>
      </div>

      {form === true && <Form value={true} />}
      {form === false && <Form value={false} />}
    </>
  );
};

export default FormHome;
