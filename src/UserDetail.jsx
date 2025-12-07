import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const UserDetail = () => {
  const { userId } = useParams();

  const inpurRef = useRef()
  const handlefocus = ()=>{
    inpurRef.current.focus()
  }
  
  const [user, setUser] = useState({})
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => setUser(res.data))
    .catch(err => console.log(err)
    )
    handlefocus()
  },[])

  const handleEditUser = (e)=>{
    e.preventDefault()
    axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, user)
    .then(res => console.log(res)
    )
  }

  return (
    <div className="w-full h-screen fixed left-0 top-0 flex justify-center items-center bg-gray-800/50">
      <div className="w-1/3 h-8/9 p-3 overflow-auto flex flex-col bg-blue-100 rounded-md">
        <form onSubmit={handleEditUser}>
          <div>
            <h2>afshin ataei</h2>
          </div>
          <div className="flex flex-col border-y-2 border-gray-300 py-3 my-2">
            <h1 className="font-bold">اطلاعات شخصی</h1>
            <label>نام کاربری:</label>
            <input
              value={user.username}
              ref={inpurRef}
              onChange={(e)=>setUser({... user, username: e.target.value})}
              type="text"
              className="bg-gray-50 rounded-sm p-1 mt-1"
            />
            <label>ایمیل:</label>
            <input
              value={user.email}
              onChange={(e)=>setUser({... user, email: e.target.value})}
              type="email"
              className="bg-gray-50 rounded-sm p-1 mt-1"
            />
            <label>تلفن:</label>
            <input
              value={user.phone}
              onChange={(e)=>setUser({... user, phone: e.target.value})}
              type="text"
              className="bg-gray-50 rounded-sm p-1 mt-1"
            />
            <label>وب سایت:</label>
            <input
              value={user.website}
              onChange={(e)=>setUser({... user, website: e.target.value})}
              type="text"
              className="bg-gray-50 rounded-sm p-1 mt-1"
            />
          </div>
          {/* <div className="flex flex-col border-b-2 border-gray-300 py-3 my-2">
            <h1 className="font-bold">آدرس</h1>
            <label>خیابان:</label>
            <input
              value={data.address.street}
              type="text"
              className="bg-gray-50 rounded-sm p-1 mt-1"
            />
            <label>شهر:</label>
            <input
              value={data.address.city}
              type="text"
              className="bg-gray-50 rounded-sm p-1 mt-1"
            />
            <label>کد پستی:</label>
            <input
              value={data.address.zipcode}
              type="text"
              className="bg-gray-50 rounded-sm p-1 mt-1"
            />
          </div>
          <div className="flex flex-col border-b-2 border-gray-300 py-3 my-2">
            <h1 className="font-bold">شرکت</h1>
            <label>نام:</label>
            <input
              value={data.company.name}
              type="text"
              className="bg-gray-50 rounded-sm p-1 mt-1"
            />
            <label>شعار:</label>
            <input
              value={data.company.bs}
              type="text"
              className="bg-gray-50 rounded-sm p-1 mt-1"
            />
          </div> */}
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
            <Link to={'/users'}>
              <button className="text-sm bg-blue-400 px-2 py-1 rounded-md text-white">
                بازگشت
              </button>
            </Link>
            <button
              type="submit"
              className="text-sm bg-blue-400 px-2 py-1 rounded-md text-white"
            >
              ویرایش
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetail;
