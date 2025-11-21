import "./style.css";

function App() {
  return (
    <div className="container mx-auto my-5 w-1/2 h-full bg-gray-50 flex flex-col items-center">
      <h1 className="my-5 font-bold text-xl">React App</h1>
      <div className="space-x-5">
        <button className="bg-gray-200 p-2 rounded-sm text-blue-600 font-bold hover:bg-blue-600 hover:text-white">
          کاربران
        </button>
        <button className="bg-gray-200 p-2 rounded-sm text-blue-600 font-bold hover:bg-blue-600 hover:text-white">
          پست ها
        </button>
      </div>
      <h2 className="mt-10">لیست کاربران</h2>
      <div className="hidden users container w-10/12 mx-auto border shadow-md rounded-sm border-gray-300 mt-5">
        <ul className="w-full px-5 divide-y divide-gray-200">
          <li className="flex justify-between items-center py-3 hover:bg-blue-50">
            <p className=""><div className="font-bold size-8 inline-block text-center text-xl rounded-full bg-blue-500">L</div>eane graham</p>
            <a href="#" className="text-blue-400 underline">leane@gmail.com</a>
          </li>
        </ul>
      </div>
      <div className="posts container w-10/12 mx-auto grid grid-cols-2 gap-2 mt-5">
        <div className="h-fit border shadow-md rounded-sm border-gray-300">
          <div className="h-5 rounded-t-sm bg-linear-to-r from-20% from-orange-500 to-red-500"></div>
          <div className="p-8">
            <h4 className="font-bold text-xl">title title</h4>
            <p className="py-3 text-sm text-gray-500">lorem10 dslk ;lskfdlskf ;dlkfld ;dlfkdlk ;dlkf fdfdssdfdf fdsfdfkds ddl;kfdlds dfkdskfdsjfkdjfksdfd lkdjfkldjkd kdsjfkdsjfd</p>
            <ul className="flex justify-between">
              <li>#1 پست</li>
              <li>ادامه مطلب</li>
            </ul>
          </div>
        </div>
        <div className="h-52 border shadow-md rounded-sm border-gray-300"></div>
      </div>
    </div>
  );
}

export default App;
