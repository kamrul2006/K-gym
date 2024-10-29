import { useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import Banner from "./Banner";
import Carts from "./Carts";

const Header = () => {
    const [open, setOpen] = useState(true)
    const [open2, setOpen2] = useState(true)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/pricing", name: "Pricing" },
        { id: 5, path: "/membership/silver", name: "Silver " },
        { id: 6, path: "/membership/gold", name: "Gold " },
        { id: 7, path: "/membership/platinum", name: "Platinum " },
    ];

    return (
        <div className="p-0 ">
            {/* ------------ nav bar ----------------- */}
            <div className="py-2 px-5 bg-red-300 flex items-center justify-between sticky top-0 ">
                <div className="flex items-center">
                    <img src="https://i.ibb.co.com/bKmHpRh/Screenshot-2024-10-29-003035.png" className="md:w-20  w-10" />
                    <h1 className="md:text-5xl font-bold" >-gym</h1>

                </div>

                <div className=" px-3 w-fit">
                    <div onClick={() => { setOpen(!open) }}
                        className=" md:hidden">
                        {open === true ?
                            <ImMenu3 className="text-3xl" />
                            : <ImMenu4 className="text-3xl" />}
                    </div>
                    <ol className={`${open ? 'hidden' : 'block'} md:flex items-center gap-3 md:font-semibold   md:text-lg absolute md:ml-0 md:relative mt-3 rounded-lg bg-slate-200 md:bg-transparent px-5 py-1 text-center`}>
                        {routes.map(route => <li key={route.id} className="p-2 hover:bg-slate-700 md:hover:bg-transparent  md:hover:text-xl hover:text-white rounded-md  md:hover:text-sky-800 ">
                            {/* <a href={`route.path`}> */}
                            {route.name}
                            {/* </a> */}
                        </li>)}
                    </ol>
                </div>

                <img onClick={() => { setOpen2(!open2) }} src="https://i.ibb.co.com/vkycbfs/1675254905006.jpg" className="w-10 md:w-16 rounded-full ring-2 ring-black border-2 border-red-300 " />
                <ol className={`${open2 ? 'hidden' : 'block'}  ml-[60%] md:ml-[80%] mt-48 md:mt-52 rounded-lg bg-slate-300 p-2 text-center absolute text-sm`}>
                    <h2 className="font-bold md:text-xl">Kmarul Islam Apurba</h2>
                    <li>Age: 20 y.</li>
                    <li>Hight: 68 inc.</li>
                    <li>Wight: 52 kg.</li>
                </ol>

            </div>

            <div className="px-0 ">
                <Banner></Banner>
            </div>
            <h1 className="text-3xl pb-3 mt-32 text-center font-bold">Available Memberships:</h1><hr className="mx-12" />
            <div className="mx-12 mt-4">
                <Carts></Carts>
            </div>

        </div>
    );
};

export default Header;