import Posts from "./Posts";
import "./style.css";
import Users from "./Users";

function App() {
  return (
    <div className="container mx-auto my-5 w-1/2 h-fit bg-gray-50 flex flex-col items-center">
      <h1 className="my-5 font-bold text-xl">React App</h1>
      <div className="space-x-5">
        <button className="bg-gray-200 p-2 rounded-sm text-blue-600 font-bold hover:bg-blue-600 hover:text-white">
          کاربران
        </button>
        <button className="bg-gray-200 p-2 rounded-sm text-blue-600 font-bold hover:bg-blue-600 hover:text-white">
          پست ها
        </button>
      </div>
      <h2 className="mt-10 mb-5">لیست کاربران</h2>
      <Users />
      <Posts />
    </div>
  );
}

export default App;
