import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddUser = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newUser)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full h-screen fixed left-0 top-0 flex justify-center items-center bg-gray-800/50">
      <div className="w-1/3">
        <form
          onSubmit={handleAddUser}
          className="my-4 p-3 w-full bg-blue-100 flex flex-col"
        >
          <label>نام کاربری</label>
          <input
            value={newUser.username}
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
            type="text"
            placeholder="نام کاربری"
            className="bg-gray-50 rounded-sm p-1 mt-1"
          />
          <label>ایمیل</label>
          <input
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            type="email"
            placeholder="ایمیل"
            className="bg-gray-50 rounded-sm p-1 mt-1"
          />
          <div className="mx-auto space-x-2">
            <button
              type="submit"
              className="mt-4 p-1 w-18 rounded-sm bg-blue-600 text-white cursor-pointer"
            >
              افزودن
            </button>
            <Link to={'/users'} className="mt-4 p-1 w-18 rounded-sm bg-blue-600 text-white cursor-pointer">
              بازگشت
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
