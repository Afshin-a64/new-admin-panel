const Users = () => {
  return (
    <>
      <div className=" users container w-10/12 mx-auto border shadow-md rounded-sm border-gray-300">
        <ul className="w-full px-5 divide-y divide-gray-200">
          <li className="flex justify-between items-center py-3 hover:bg-blue-50">
            <p className="">
              <div className="font-bold size-8 inline-block text-center text-xl rounded-full bg-blue-500">
                L
              </div>
              eane graham
            </p>
            <a href="#" className="text-blue-400 underline">
              leane@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Users;
