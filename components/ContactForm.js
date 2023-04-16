import React, { useState, useEffect } from "react";

export const ContactForm = ({ products }) => {
  return (
    <div className="items-top relative flex min-h-screen justify-center bg-transparent pt-12 dark:bg-gray-900 sm:items-center sm:pt-0">
      <div className="mx-auto grid max-w-6xl grid-cols-1 py-12 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
        <ContactHeader />
        <FormList products={products} />
      </div>
    </div>
  );
};

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
        className="w-100 mt-2 rounded-lg border border-gray-400 bg-white py-3 px-3 font-semibold text-gray-800 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800"
      />
    </div>
  );
};

const FormList = ({ products }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [interested, setInterested] = useState();
  const [productState, setProduct] = useState();
  function prod(title, id) {
    this.title = title;
    this.id = id;
  }
  var my = new Array();
  for (var i = 0; i < 10; i++) {
    my.push(new prod((i + " test").toString(), (i + 1).toString()));
  }
  const subject = "?subject=Hello KBG im interested with " + productState;
  const body =
    " &body=Hello my name is " +
    name +
    " and my email is " +
    email +
    " and my phone number is " +
    phoneNumber +
    " and i am interested with " +
    interested;
  const textWa =
    "Hello my name is " +
    name +
    " and my email is " +
    email +
    " and my phone number is " +
    phoneNumber +
    " i want to buy " +
    productState +
    " and i am interested with " +
    interested;
  const mailto =
    "https://api.whatsapp.com/send?phone=6281214004800&text=" + textWa;
  return (
    <div>
      <form className="flex flex-col justify-center p-6">
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
        <div className="mt-2 flex flex-col">
          <label for="email" className="hidden">
            "Interest
          </label>
          <input
            type="Interest"
            name="Interest"
            id="Interest"
            placeholder="Interest"
            value={interested}
            onChange={(e) => setInterested(e.target.value)}
            className="w-100 mt-2 h-48 rounded-lg border border-gray-400 bg-white py-3 px-3 font-semibold text-gray-800 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800"
          />
        </div>
        <div className="w-100 my-4  rounded-lg border border-gray-400  py-3 px-3 font-semibold text-gray-400 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800">
          Which of Our Products are you interested in?
          <div className="gap-1/2 mt-2 grid grid-cols-2">
            {products.map((product) => (
              <RadioButtons
                title={product.data.title}
                id={product.data.uid}
                value={product.data.title}
                onChange={(e) => setProduct(e.target.value)}
              />
            ))}
          </div>
          <div className="gap-1/2 mt-2 grid grid-cols-2">
            {my.map((prod) => (
              <RadioButtons
                title={prod.title}
                id={prod.id}
                value={prod.title}
                onChange={(e) => setProduct(e.target.value)}
              />
            ))}
          </div>
        </div>
      </form>
      <a href={mailto} target="_blank" className="p-6 text-white">
        <button
          type="submit"
          className="hover:bg-blue-dark mt-3 rounded-lg bg-indigo-600 py-3 px-6 font-bold text-white transition duration-300 ease-in-out hover:bg-indigo-500 md:w-32"
        >
          Submit
        </button>
      </a>
    </div>
  );
};
const RadioButtons = ({ title, id, onChange, value }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        id={id}
        value={value}
        name="options"
        onChange={onChange}
        className="form-radio h-4 w-4 text-gray-400 transition duration-150 ease-in-out"
      />
      <label
        htmlFor={id}
        className="mt-px inline-block pl-[0.15rem]  hover:cursor-pointer"
      >
        {title}
      </label>
    </div>
  );
};
const ContactHeader = () => {
  return (
    <div className="mx-2 bg-gray-100 p-6 dark:bg-gray-800 sm:rounded-lg">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white sm:text-5xl">
        Get in touch
      </h1>
      <p className="text-normal mt-2 text-lg font-medium text-gray-600 dark:text-gray-400 sm:text-2xl">
        Fill in the form to start a conversation
      </p>

      <div className="mt-8 flex items-center text-gray-600 dark:text-gray-400">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          className="h-8 w-8 text-gray-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <div className="text-md ml-4 w-full font-semibold tracking-wide">
          Jln. Raya Pos Pengumben, Srengseng, Kec Kembangan, Jakarta Barat,
          11630
        </div>
      </div>

      <div className="mt-4 flex items-center text-gray-600 dark:text-gray-400">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          className="h-8 w-8 text-gray-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <div className="text-md ml-4 w-40 font-semibold tracking-wide">
          081908217438
        </div>
      </div>

      <div className="mt-2 flex items-center text-gray-600 dark:text-gray-400">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          className="h-8 w-8 text-gray-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <div className="text-md ml-4 w-40 font-semibold tracking-wide">
          www.karuniabenihglobal.com
        </div>
      </div>
    </div>
  );
};
