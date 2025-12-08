import { Link, Outlet, useNavigate } from "react-router-dom";
import { useGetData } from "./getData.js";

const Users = () => {
  const { data, loading, error } = useGetData(
    "https://jsonplaceholder.typicode.com/users"
  );

  const navigate = useNavigate()


  if (loading) {
    return (
      <div className="container mx-auto my-5 pb-2 w-1/2 h-fit bg-gray-50 flex flex-col items-center">
        <h1 className="text-xl font-bold">در حال دریافت اطلاعات ...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto my-5 pb-2 w-1/2 h-fit bg-gray-50 flex flex-col items-center">
        <h1 className="text-xl text-red-500 font-bold">{error}</h1>
      </div>
    );
  }

  return (
    <>
      <h2 className="mt-10 mb-5">لیست کاربران</h2>
      <Link
        to={"/users/add-user"}
        className="mb-2 p-1 rounded-sm bg-blue-600 text-white"
      >
        افزودن کاربر
      </Link>
      <Outlet />
      <div
        className={`container w-10/12 mx-auto border shadow-md rounded-sm border-gray-300`}
      >
        <ul className="w-full px-5 divide-y divide-gray-200">
          {data.map((user) => (
            <li
              key={user.id}
              onClick={()=>navigate(`user-details/${user.id}`, {state: user})}
              className="flex justify-between items-center py-3 hover:bg-blue-50"
            >
              <p className="">
                <span className="font-bold size-8 inline-block text-center text-xl rounded-full bg-blue-500">
                  {user.name.slice(0, 1)}
                </span>
                {user.name}
              </p>
              <a href="#" className="text-blue-400 underline">
                {user.email}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Users;
