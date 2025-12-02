const UserDetail = () => {
  return (
    <div className="w-full h-screen fixed left-0 top-0 flex justify-center items-center bg-gray-800/50">
      <div className="w-1/3 p-3 flex flex-col bg-blue-100 rounded-md">
        <form>
          <div>
            <h2>afshin ataei</h2>
          </div>
          <div className="flex flex-col border-y-2 border-gray-300 py-3 my-2">
            <h1 className="font-bold">اطلاعات شخصی</h1>
            <label>نام:</label>
            <input type="text" className="bg-gray-50 rounded-sm p-1 mt-1" />
            <label>نام خانوادگی:</label>
            <input type="text" className="bg-gray-50 rounded-sm p-1 mt-1" />
            <label>ایمیل:</label>
            <input type="email" className="bg-gray-50 rounded-sm p-1 mt-1" />
            <label>تلفن:</label>
            <input type="text" className="bg-gray-50 rounded-sm p-1 mt-1" />
          </div>
          <div>
            <h2 className="my-2 font-bold">مهارت ها</h2>
            <ul className="flex justify-between text-sm">
              <li className="bg-gray-400 px-2 rounded-2xl">HTML</li>
              <li className="bg-gray-400 px-2 rounded-2xl">CSS</li>
              <li className="bg-gray-400 px-2 rounded-2xl">Bootstrap</li>
              <li className="bg-gray-400 px-2 rounded-2xl">Tailwind</li>
              <li className="bg-gray-400 px-2 rounded-2xl">React</li>
            </ul>
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <button className="text-sm bg-blue-400 px-2 py-1 rounded-md text-white">
              بازگشت
            </button>
            <button type="submit" className="text-sm bg-blue-400 px-2 py-1 rounded-md text-white">
              ویرایش
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetail;
