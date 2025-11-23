const Users = (props) => {
  return (
    <>
      <ul className="w-full px-5 divide-y divide-gray-200">
        <li className="flex justify-between items-center py-3 hover:bg-blue-50">
          <p className="">
            <div className="font-bold size-8 inline-block text-center text-xl rounded-full bg-blue-500">
              {props.user.name.slice(0,1)}
            </div>
            {props.user.name.slice(1)}
          </p>
          <a href="#" className="text-blue-400 underline">
            {props.user.email}
          </a>
        </li>
      </ul>
    </>
  );
};

export default Users;
