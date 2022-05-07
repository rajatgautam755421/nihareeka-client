import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import "./Dashboard1.css";

const Dashboard = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");
  const username = "admin";
  const pass = "admin";
  const { pathname } = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    if (userName === "") {
      toast.error("Username Is Empty");
    } else if (password === "") {
      toast.error("Password Is Empty");
    } else {
      if (userName !== username) {
        toast.error("Username Didnot Matched");
      } else if (password !== pass) {
        toast.error("Password Didnot Matched");
      } else {
        toast.success("Successfull Signup");
        localStorage.setItem("userInfo", JSON.stringify(username));

        navigate("/admin-panel");
      }
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/admin-panel");
    }
  }, [pathname === "/dashboard-login"]);
  return (
    <>
      <section className="overflow-hidden">
        <div
          className="flex min-h-screen overflow-hidden  section__login__main"
          style={{ margin: "0px auto" }}
        >
          <div className="w-full max-w-xl mx-auto lg:w-96 mt-6 register__main">
            <div>
              <h2 className="text-3xl font-extrabold text-neutral-600">
                {" "}
                Sign In To{" "}
                <span style={{ color: "#0D0D80" }}>
                  Nihareeka College Dashboard
                </span>{" "}
              </h2>
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      UserName{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        required=""
                        placeholder="Your Username"
                        className="
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
                          contact__input__main
                        "
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      for="password"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <div
                      className="mt-1"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autocomplete="current-password"
                        required=""
                        placeholder="Your Password"
                        className="
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
                          contact__input__main
                        "
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <button
                    className=" bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg contact__us__main__button"
                    onClick={handleClick}
                  >
                    Sign In
                  </button>
                </form>
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
