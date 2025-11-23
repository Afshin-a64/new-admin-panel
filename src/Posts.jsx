const Posts = (props) => {
  return (
    <div className="h-[350px] overflow-auto border shadow-md rounded-sm border-gray-300 relative">
      <div className="h-5 rounded-t-sm bg-linear-to-r from-20% from-orange-500 to-red-500"></div>
      <div className="p-8">
        <h4 className="font-bold text-xl">{props.post.title}</h4>
        <p className="py-3 text-sm break-all text-gray-500">
          {props.post.body.slice(0, 100)}
        </p>
        <div className="absolute bottom-10">
          <ul className="flex justify-between gap-16">
          <li className="text-sm bg-red-100 px-2 rounded-sm flex items-center">
            <a href="#">#{props.post.id} پست</a>
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
