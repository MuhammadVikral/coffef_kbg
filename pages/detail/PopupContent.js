import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const MetaContactForm = ({ title, type, name, id, value, onChange }) => {
  return (
    <div className="mt-2 flex flex-col">
      <label for="email" className="hidden">
        {title}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        placeholder={title}
        className="mt-2 w-[78] rounded-lg border border-gray-400 bg-white py-3 px-3 font-semibold text-gray-800 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800"
      />
    </div>
  );
};
export const PopUpContent = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const subject = "?subject=Hello KBG im interested with ";
  const body =
    " Hello my name is " +
    name +
    " and my email is " +
    email +
    " and my phone number is " +
    phoneNumber;
  const mailto =
    "https://api.whatsapp.com/send?phone=6281214004800&text=" + body;
  return (
    <div className="grid  grid-cols-1 md:grid-cols-1 ">
      <form
        className="flex flex-col justify-center p-6"
        action={mailto}
        method="post"
      >
        <MetaContactForm
          title="Full Name"
          type="name"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <MetaContactForm
          title="Email"
          type="email"
          name="email"
          required
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MetaContactForm
          title="Telephone Number"
          type="tel"
          name="tel"
          id="tel"
          pattern="[a-z0-9]{1,15}"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <div className="flex w-full justify-center md:justify-end">
          <button
            type="submit"
            className="hover:bg-blue-dark mt-4 w-full justify-center rounded-lg bg-indigo-600 py-3 px-6 font-bold text-white transition duration-300 ease-in-out hover:bg-indigo-500 md:w-32"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
