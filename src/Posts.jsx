import { useGetData } from "./getData";

const Posts = () => {
  const { data, loading, error } = useGetData(
    "https://jsonplaceholder.typicode.com/posts"
  );

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
      <h2 className="mt-10 mb-5">پست ها</h2>
      <div
        className={`container w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 border shadow-md rounded-sm border-gray-300`}
      >
        {data.map((post) => (
          <div
            key={post.id}
            className="h-[350px] overflow-auto border shadow-md rounded-sm border-gray-300 relative"
          >
            <div className="h-5 rounded-t-sm bg-linear-to-r from-20% from-orange-500 to-red-500"></div>
            <div className="p-8">
              <h4 className="font-bold text-xl">{post.title}</h4>
              <p className="py-3 text-sm break-all text-gray-500">
                {post.body.slice(0, 100)}
              </p>
              <div className="absolute bottom-10">
                <ul className="flex justify-between gap-16">
                  <li className="text-sm bg-red-100 px-2 py-1 rounded-sm bg-linear-to-r from-10% from-orange-400 to-red-500">
                    <a href="#">ادامه مطلب</a>
                  </li>
                  <li className="text-sm bg-red-100 px-2 rounded-sm flex items-center">
                    <a href="#">{post.id} پست</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
