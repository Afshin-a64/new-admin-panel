import { Link } from "react-router-dom"

const NotFound = ()=>{
    return(
        <div className="container mx-auto h-80 my-2 flex flex-col gap-5 items-center justify-center bg-gray-200 container w-10/12 mx-auto border shadow-md rounded-sm border-gray-300">
            <h4 className="font-bold text-2xl">404</h4>
            <div className="bg-blue-600 w-44 h-2 rounded-md"></div>
            <h1 className="font-bold">صفحه مورد نظر یافت نشد!</h1>
            <p className="text-sm text-gray-700">متاسفانه صفحه ای که به دنبال آن هستید وجود ندارد یا حذف گردیده است!</p>
            <div className="flex gap-x-5 items-center">
                <div className="bg-gray-300 w-48 h-1"></div>
                <p>یا</p>
                <div className="bg-gray-300 w-48 h-1"></div>
            </div>
            <div className="flex gap-5">
                <Link to={'/'} className="text-sm bg-gray-50 py-1 px-2 rounded-sm hover:bg-blue-600 hover:text-white">مشاهده کاربران</Link>
                <Link to={'/posts'} className="text-sm bg-gray-50 py-1 px-2 rounded-sm hover:bg-blue-600 hover:text-white">مشاهده پست ها</Link>
            </div>
        </div>
    )
}

export default NotFound