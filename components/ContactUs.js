import React, { useState } from "react";

export default function ContactUs() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
  };
  return (
    <main className="clear-both md:pd-16">
      <div className="block">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto"
        >
        <div className="">
         <div className="flex mb-4 flex-wrap">
              <div className="sm:w-1/3 sm:text-right">
              <label
                htmlFor="fullname"
                className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Full name<span className="">*</span>
              </label>
              </div>
              <div className="sm:w-2/3 w-full">
              <input
                type="text"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                name="fullname"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
              {errors?.fullname && (
                <p className="">Fullname cannot be empty.</p>
              )}
              </div>
          </div>

         <div className="flex mb-4 flex-wrap">
              <div className="sm:w-1/3 sm:text-right">
              <label
                htmlFor="email"
                className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                E-mail<span className="">*</span>
              </label>
              </div>
              <div className="sm:w-2/3 w-full">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
              {errors?.email && (
                <p className="">Email cannot be empty.</p>
              )}
              </div>
          </div>

         <div className="flex mb-4 flex-wrap">
              <div className="sm:w-1/3 sm:text-right">
              <label
                htmlFor="message"
                className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Message<span className="">*</span>
              </label>
              </div>
              <div className="sm:w-2/3 w-full">
              <textarea
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              ></textarea>
              {errors?.message && (
                <p className="">Message body cannot be empty.</p>
              )}
              </div>
          </div>

          <div className="flex">
            <div className="sm:w-1/3"></div>
            <div className="sm:w-2/3">
            <button
              type="submit"
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              {buttonText}
            </button>
          </div>
      </div>
          <div className="">
            {showSuccessMessage && (
            <div className="p-4 my-4 text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <span className="font-medium">Thank you! Your Message has been delivered.</span>
            </div>
            )}
            {showFailureMessage && (
              <p className="">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </div>
        </form>
      </div>
      <section className="">
        <h1
          className={`text-4xl font-bold text-center md:mt-60 my-10 gradient-text text-gray-700 ${
            errors ? "" : "md:mt-60"
          }`}
        >
        </h1>
      </section>
    </main>
  );
}
