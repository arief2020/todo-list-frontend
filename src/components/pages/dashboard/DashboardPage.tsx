import React from 'react'
import Link from "next/link";

export default function DashboardPage() {
  return (
    // <div className='flex'>
    //   {/* sidebar */}
    //   <div>
    // 	side
    //   </div>
    //   {/* end sidebar */}
    //   {/* content */}
    //   <div>
    // 	ini content
    //   </div>
    //   {/* end content */}
    // </div>
    <>
      <nav className="md:hidden w-full sticky top-4 bg-gradient-to-l from-orange-600 to-orange-500 text-white rounded-lg shadow-lg p-2 mx-auto z-50">
        <div className="flex items-end justify-between px-6 pb-2 border-b border-orange-400">
          <h1 className="font-bold">Dashboard Menu</h1>
          <p className="text-sm">Admin</p>
        </div>
        <div className="flex flex-row justify-around pt-2">
          <Link
            href={"/dashboard"}
            title="Dashboard"
            className="flex p-3 gap-3 items-center hover:font-semibold cursor-pointer hover:bg-white hover:text-slate-800 rounded-full hover:shadow-md duration-300"
          >
            <span>{/* <AiFillHome /> */}aaaaaa</span>
          </Link>
          <Link
            href={"/dashboard/product"}
            title="Product"
            className="flex p-3 gap-3 items-center hover:font-semibold cursor-pointer hover:bg-white hover:text-slate-800 rounded-full hover:shadow-md duration-300"
          >
            <span>
              {/* <FaCartShopping /> */}
              aaaaaa
            </span>
          </Link>
          <Link
            href={"/dashboard/promo"}
            title="Promo"
            className="flex p-3 gap-3 items-center hover:font-semibold cursor-pointer hover:bg-white hover:text-slate-800 rounded-full hover:shadow-md duration-300"
          >
            <span>
              {/* <RiDiscountPercentFill /> */}
              aaaa
            </span>
          </Link>
          <Link
            href={"/dashboard/warehouse"}
            title="Warehouse"
            className="flex p-3 gap-3 items-center hover:font-semibold cursor-pointer hover:bg-white hover:text-slate-800 rounded-full hover:shadow-md duration-300"
          >
            <span>
              {/* <FaWarehouse /> */}
              aaaaa
            </span>
          </Link>
          <Link
            href={"/dashboard/order"}
            title="Order"
            className="flex p-3 gap-3 items-center hover:font-semibold cursor-pointer hover:bg-white hover:text-slate-800 rounded-full hover:shadow-md duration-300"
          >
            <span>
              {/* <GiCardboardBoxClosed /> */}
              aaaaaa
            </span>
          </Link>
          <Link
            href={"/dashboard/user"}
            title="User"
            className="flex p-3 gap-3 items-center hover:font-semibold cursor-pointer hover:bg-white hover:text-slate-800 rounded-full hover:shadow-md duration-300"
          >
            <span>
              {/* <FaUser /> */}
              aaaaaa
            </span>
          </Link>
        </div>
      </nav>

      <div className="hidden h-[95vh] sticky top-4 w-1/4 md:flex flex-col p-4 gap-8 shadow-xl rounded-lg bg-gradient-to-t from-orange-600 to-orange-500 text-white">
        <div className="admin mx-auto py-3">
          {/* <AvatarAdmin /> */}aaaaaa
          <h1 className="text-center text-lg font-semibold mt-4">Admin</h1>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href={"/dashboard"}
            className="flex py-2 px-3 gap-3 items-center hover:font-semibold cursor-pointer hover:bg-white hover:text-slate-800 rounded-full hover:shadow-md duration-300"
          >
            <span>
              {/* <AiFillHome /> */}aaaa
            </span>
            <p className="cursor-pointer">Dashboard</p>
          </Link>
          <Link
            href={"/dashboard/product"}
            className="flex py-2 px-3 gap-3 items-center hover:font-semibold cursor-pointer hover:bg-white hover:text-slate-800 rounded-full hover:shadow-md duration-300"
          >
            <span>
              {/* <FaCartShopping /> */} aaaa
            </span>
            <p className="cursor-pointer">Product</p>
          </Link>
          <Link
            href={"/dashboard/promo"}
            className="flex py-2 px-3 gap-3 items-center hover:font-semibold cursor-pointer hover:bg-white hover:text-slate-800 rounded-full hover:shadow-md duration-300"
          >
            <span>
              {/* <RiDiscountPercentFill /> */} aaaa
            </span>
            <p className="cursor-pointer">Promo</p>
          </Link>
          <Link
            href={"/dashboard/warehouse"}
            className="flex py-2 px-3 gap-3 items-center hover:font-semibold cursor-pointer hover:bg-white hover:text-slate-800 rounded-full hover:shadow-md duration-300"
          >
            <span>
              {/* <FaWarehouse /> */} aaaaa
            </span>
            <p className="cursor-pointer">Warehouse</p>
          </Link>
          <Link
            href={"/dashboard/order"}
            className="flex py-2 px-3 gap-3 items-center hover:font-semibold cursor-pointer hover:bg-white hover:text-slate-800 rounded-full hover:shadow-md duration-300"
          >
            <span>
              {/* <GiCardboardBoxClosed /> */} aaaaa
            </span>
            <p className="cursor-pointer">Order</p>
          </Link>
          <Link
            href={"/dashboard/user"}
            className="flex py-2 px-3 gap-3 items-center hover:font-semibold cursor-pointer hover:bg-white hover:text-slate-800 rounded-full hover:shadow-md duration-300"
          >
            <span>
              {/* <FaUser /> */} aaaaa
            </span>
            <p className="cursor-pointer">User</p>
          </Link>
        </div>
        <button
          //   onClick={handleLogout}
          className="flex flex-1 items-end justify-center"
        >
          <p className="py-2 px-3 gap-3 items-center hover:font-semibold cursor-pointer hover:bg-white hover:text-slate-800 rounded-full hover:shadow-md duration-300 w-full mx-auto flex justify-center">
            Logout
          </p>
        </button>
      </div>
    </>
  );
}
