const Posts = () => {
  return (
    <div className="posts container w-10/12 mx-auto py-2 grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
      <div className="h-fit border shadow-md rounded-sm border-gray-300">
        <div className="h-5 rounded-t-sm bg-linear-to-r from-20% from-orange-500 to-red-500"></div>
        <div className="p-8">
          <h4 className="font-bold text-xl">title title</h4>
          <p className="py-3 text-sm break-all text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quibusdam excepturi enim culpa voluptate vero ex perferendis
            architecto reiciendis facere.
          </p>
          <ul className="flex justify-between">
            <li className="text-sm bg-red-100 px-2 rounded-sm flex items-center">
              <a href="#">#1 پست</a>
            </li>
            <li className="text-sm bg-red-100 px-2 py-1 rounded-sm bg-linear-to-r from-10% from-orange-400 to-red-500">
              <a href="#">ادامه مطلب</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Posts;
