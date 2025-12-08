import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const UserDetail = () => {
  const { userId } = useParams()

  const location = useLocation()
  const [selectedUser, setSelectedUser] = useState(location.state)
  

  const inputRef = useRef()
  const handleFocus = ()=>{
    inputRef.current.focus()
  }
  
  // const [user, setUser] = useState({})
  useEffect(()=>{
    // axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    // .then(res => setUser(res.data))
    // .catch(err => console.log(err)
    // )
    handleFocus()
  },[])

  const handleEditUser = (e)=>{
    e.preventDefault()
    axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, selectedUser)
    .then(res => console.log(res)
    )
  }

  return (
    <div className="w-full h-screen fixed left-0 top-0 flex justify-center items-center bg-gray-800/50">
      <div className="w-1/3 h-8/9 p-3 overflow-auto flex flex-col bg-blue-100 rounded-md">
        <form 
        onSubmit={handleEditUser}
        >
          <div>
            <h2>afshin ataei</h2>
          </div>
          <div className="flex flex-col border-y-2 border-gray-300 py-3 my-2">
            <h1 className="font-bold">اطلاعات شخصی</h1>
            <label>نام کاربری:</label>
            <input
              value={selectedUser.username}
              ref={inputRef}
              onChange={(e)=>setSelectedUser({... selectedUser, username: e.target.value})}
              type="text"
              className="bg-gray-50 rounded-sm p-1 mt-1"
            />
            <label>ایمیل:</label>
            <input
              value={selectedUser.email}
              onChange={(e)=>setSelectedUser({... selectedUser, email: e.target.value})}
              type="email"
              className="bg-gray-50 rounded-sm p-1 mt-1"
            />
            <label>تلفن:</label>
            <input
              value={selectedUser.phone}
              onChange={(e)=>setSelectedUser({... selectedUser, phone: e.target.value})}
              type="text"
              className="bg-gray-50 rounded-sm p-1 mt-1"
            />
            <label>وب سایت:</label>
            <input
              value={selectedUser.website}
              onChange={(e)=>setSelectedUser({... selectedUser, website: e.target.value})}
              type="text"
              className="bg-gray-50 rounded-sm p-1 mt-1"
            />
          </div>
            <div className="flex flex-col border-b-2 border-gray-300 py-3 my-2">
            <h1 className="font-bold">آدرس</h1>
            <label>خیابان:</label>
            <input
              value={selectedUser.address.street}
              onChange={(e)=>setSelectedUser({... selectedUser, address: {... selectedUser.address, street: e.target.value}})}
              type="text"
              className="bg-gray-50 rounded-sm p-1 mt-1"
            />
            <label>شهر:</label>
            <input
              value={selectedUser.address.city}
              onChange={(e)=>setSelectedUser({... selectedUser, address: {...selectedUser.address, city: e.target.value}})}
              type="text"
              className="bg-gray-50 rounded-sm p-1 mt-1"
            />
            <label>کد پستی:</label>
            <input
              value={selectedUser.address.zipcode}
              onChange={(e)=>setSelectedUser({... selectedUser, address: {...selectedUser.address, zipcode: e.target.value}})}
              type="text"
              className="bg-gray-50 rounded-sm p-1 mt-1"
            />
          </div>
          <div className="flex flex-col border-b-2 border-gray-300 py-3 my-2">
            <h1 className="font-bold">شرکت</h1>
            <label>نام:</label>
            <input
              value={selectedUser.company.name}
              onChange={(e)=>setSelectedUser({... selectedUser, company: {...selectedUser.company, name: e.target.value}})}
              type="text"
              className="bg-gray-50 rounded-sm p-1 mt-1"
            />
            <label>شعار:</label>
            <input
              value={selectedUser.company.bs}
              onChange={(e)=>setSelectedUser({... selectedUser, company: {...selectedUser.company, bs: e.target.value}})}
              type="text"
              className="bg-gray-50 rounded-sm p-1 mt-1"
            />
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
