import { Link, NavLink, Route, Routes } from "react-router-dom";
import Posts from "./Posts";
import "./style.css";
import Users from "./Users";
import AddUser from "./AddUser.jsx";

function App() {
  return (
    <div className="container mx-auto my-5 pb-2 w-1/2 h-fit bg-gray-50 flex flex-col items-center">
      <h1 className="my-5 font-bold text-xl">React App</h1>
      <div className="flex gap-4">
        <NavLink to={"/users"} className={({isActive})=>`${isActive ? "bg-blue-600 text-white p-2 rounded-sm font-bold" : "bg-gray-200 text-blue-600"} p-2 rounded-sm font-bold`}>
            کاربران
        </NavLink>
        <NavLink to={"/posts"} className={({isActive})=>`${isActive ? "bg-blue-600 text-white p-2 rounded-sm font-bold" : "bg-gray-200 text-blue-600"} p-2 rounded-sm font-bold`}>
            پست ها
        </NavLink>
      </div>
        <Routes>
          <Route path="/users" element={<Users />}>
            <Route path="add-user" element={<AddUser/>}/>
          </Route>
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
  );
}

export default App;
