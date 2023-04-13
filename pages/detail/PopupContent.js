export const PopUpContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1">
      <form className="flex flex-col justify-center p-6">
        <div className="flex flex-col">
          <label for="name" className="hidden">
            Full Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-100 mt-2 rounded-lg border border-gray-400 bg-white py-3 px-3 font-semibold text-gray-800 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800"
          />
        </div>

        <div className="mt-2 flex flex-col">
          <label for="email" className="hidden">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-100 mt-2 rounded-lg border border-gray-400 bg-white py-3 px-3 font-semibold text-gray-800 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800"
          />
        </div>

        <div className="mt-2 flex flex-col">
          <label for="tel" className="hidden">
            Number
          </label>
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="Telephone Number"
            className="w-100 mt-2 rounded-lg border border-gray-400 bg-white py-3 px-3 font-semibold text-gray-800 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800"
          />
        </div>
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
