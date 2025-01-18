import { NavLink, useLocation } from "react-router-dom";

const SideBar = () => {

    const location = useLocation();

    const menuItems = [
        { name: "Dashboard", path: "/", icon: "./assets/dashboard.svg" , picon: "./assets/pressed/dashboard.svg" },
        { name: "Employee", path: "/employee", icon: "./assets/employee.svg" , picon: "./assets/pressed/employee.svg" },
        { name: "Recruitment", path: "/recruitment", icon: "./assets/recruitment.svg", picon: "./assets/pressed/recruitment.svg" },
        { name: "Payroll", path: "/payroll", icon: "./assets/payroll.svg", picon: "./assets/pressed/payroll.svg" },
        { name: "Schedule", path: "/schedule", icon: "./assets/schedule.svg" , picon: "./assets/pressed/schedule.svg" },
    ];

    return(

        <div className="w-[300px] bg-white h-full border-r border-gray-300 flex flex-col relative">
          <div className="flex flex-row justify-between w-[90%] h-11 items-center mx-[5%] mt-5">
              <div className="flex flex-row text-black font-semibold text-xl">
                  BordUp
              </div>
              <button>
                  <img src="./assets/sidebar.svg" alt="" className="w-5 h-5" />
              </button>
          </div>
          <div className="h-0.5 w-[90%] mx-[5%] bg-gray-200 rounded-full my-4"></div>
          <div className="flex flex-row justify-between w-[90%] items-center mx-[5%] bg-gray-200 px-3 py-4 rounded-lg border-gray-300 border">
              <div className="flex flex-row items-center">
                  <img src="https://marketplace.canva.com/EAFzYCjLzh4/1/0/1600w/canva-white-gold-black-modern-elegant-football-club-badge-logo-Z4-VQgT_JrU.jpg" className="w-11 h-11 rounded-lg" alt="" />
                  <div className="flex flex-col ml-2">
                      <b className="font-semibold">Company Name</b>
                      <p className="font-semibold text-gray-400 text-xs">Team - 20 member</p>
                  </div>
              </div>
              <button>
                  <img src="./assets/boxarowdown.svg" alt="" className="w-5 h-5" />
              </button>
          </div>
          <div className="flex flex-col w-[90%] my-4 mx-[5%]">
              <h1 className="font-semibold text-gray-400 ml-2 mb-2">Main Menu</h1>
                {menuItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={`flex flex-row my-1 py-3 px-3 rounded-xl border cursor-pointer ${
                        location.pathname === item.path
                            ? "bg-indigo-100 border-indigo-600"
                            : "bg-white border-white"
                        }`}
                    >
                        <img src={location.pathname === item.path ? item.picon : item.icon} alt={`${item.name} icon`} />
                        <b
                        className={`font-semibold text-lg ml-3 ${
                            location.pathname === item.path ? "text-indigo-600" : "text-gray-500"
                        }`}
                        >
                        {item.name}
                        </b>
                    </NavLink>
                ))}
          </div>
          <div className="absolute bottom-3 left-0 w-[90%] mx-[5%]">
              <h1 className="font-semibold text-gray-400 ml-2 mb-2">Other</h1>
              <div className="flex flex-row my-1 bg-white py-3 px-3 rounded-xl border border-white cursor-pointer">
                  <img src="./assets/settings.svg"/>
                  <b className="text-gray-500 font-semibold text-lg ml-3">Settings</b>
              </div>
              <div className="flex flex-row my-1 bg-white py-3 px-3 rounded-xl border border-white cursor-pointer">
                  <img src="./assets/support.svg"/>
                  <b className="text-gray-500 font-semibold text-lg ml-3">Support</b>
              </div>
          </div>
        </div>

    )
}

export default SideBar;