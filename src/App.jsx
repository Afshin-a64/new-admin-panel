import { useEffect, useState } from "react";
import Posts from "./Posts";
import "./style.css";
import Users from "./Users";
import axios from "axios";

function App() {
  const [isUser, setIsUser] = useState(true);

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data.slice(0, 10)))
      .catch((err) => console.log(err));
  }, []);

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
    <div className="container mx-auto my-5 pb-2 w-1/2 h-fit bg-gray-50 flex flex-col items-center">
      <h1 className="my-5 font-bold text-xl">React App</h1>
      <div className="space-x-5">
        <button
          onClick={() => setIsUser(true)}
          className="bg-gray-200 p-2 rounded-sm text-blue-600 font-bold hover:bg-blue-600 hover:text-white"
        >
          کاربران
        </button>
        <button
          onClick={() => setIsUser(false)}
          className="bg-gray-200 p-2 rounded-sm text-blue-600 font-bold hover:bg-blue-600 hover:text-white"
        >
          پست ها
        </button>
      </div>
      <h2 className="mt-10 mb-5">لیست کاربران</h2>
      <div
        className={`container w-10/12 mx-auto ${
          !isUser ? "grid grid-cols-1 md:grid-cols-2 gap-2" : ""
        } border shadow-md rounded-sm border-gray-300`}
      >
        {isUser
          ? users.map((user) => <Users user={user} />)
          : posts.map((post) => <Posts post={post} />)}
        {/* {!isUser && <Posts />} */}
      </div>
    </div>
  );
}

export default App;
