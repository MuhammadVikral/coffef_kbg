export const ItemValue = ({ item }) => {
  const map = Object.entries(item.items_value[0]).map(
    ([key, value]) => key + "*" + value
  );
  return (
    <div className="mr-2  h-full  w-full bg-white px-12 pt-1 sm:rounded-lg">
      <h1 className="mb-3 mt-12 text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white sm:text-5xl">
        {item.title}
      </h1>
      <h1 className="mb-12">{item.description}</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full  sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <tbody>
                  {map.map((value) => {
                    return (
                      <tr
                        key={value}
                        className="border-b dark:border-neutral-500"
                      >
                        <td className="whitespace-nowrap border-r pr-4   font-medium">
                          {value.split("*")[0]}
                        </td>
                        <td className="w-full whitespace-nowrap px-6 py-4">
                          {value.split("*")[1]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
