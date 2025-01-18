import {useState} from 'react';
import OrgChart from '../components/orgchart';

const Employee = () => {
    const [activeTab, setActiveTab] = useState("Manage Employees");

    // Données fictives pour le tableau des employés
    const employees = [
        {
            name: "Brooklyn Simmons",
            email: "brok-simms@mail.com",
            phone: "(+62) 928 7273 7262",
            department: "Design",
            jobTitle: "Creative Director",
            contractType: "Onsite - Fulltime",
            attendance: "120h 32m",
        },
        {
            name: "Cody Fisher",
            email: "cody_fisher99@mail.com",
            phone: "(+62) 928 7273 7262",
            department: "Development",
            jobTitle: "Head of Development",
            contractType: "Onsite - Fulltime",
            attendance: "120h 32m",
        },
        {
            name: "Ralph Edwards",
            email: "ralph_edwards@mail.com",
            phone: "(+62) 928 7273 7262",
            department: "Design",
            jobTitle: "Sr. UI/UX Designer",
            contractType: "Onsite - Fulltime",
            attendance: "120h 32m",
        },
        {
            name: "Bessie Cooper",
            email: "bess_coo@mail.com",
            phone: "(+62) 928 7273 7262",
            department: "HR",
            jobTitle: "Sr. HR",
            contractType: "Onsite - Fulltime",
            attendance: "120h 32m",
        },
        {
            name: "Leslie Alexander",
            email: "alexander_le@mail.com",
            phone: "(+62) 928 7273 7262",
            department: "PM",
            jobTitle: "Head of PM",
            contractType: "Onsite - Fulltime",
            attendance: "120h 32m",
        },
    ];

    const Request = [
        {
            name: "Brooklyn Simmons",
            email: "brok-simms@mail.com",
            leave_type: "Annual Leave",
            leave_from: "Jan 23, 2024",
            leave_to: "Jan 27, 2024",
            days: "4",
            status: "Pending",
        },
        {
            name: "Cody Fisher",
            email: "brok-simms@mail.com",
            leave_type: "Sick Leave",
            leave_from: "Jan 23, 2024",
            leave_to: "Jan 27, 2024",
            days: "4",
            status: "Pending",
        },
        {
            name: "Ralph Edwards",
            email: "brok-simms@mail.com",
            leave_type: "Annual Leave",
            leave_from: "Jan 23, 2024",
            leave_to: "Jan 27, 2024",
            days: "4",
            status: "Approved",
        },
        {
            name: "Bessie Cooper",
            email: "brok-simms@mail.com",
            leave_type: "Sick Leave",
            leave_from: "Jan 23, 2024",
            leave_to: "Jan 27, 2024",
            days: "4",
            status: "Approved",
        },
        {
            name: "Leslie Alexander",
            email: "brok-simms@mail.com",
            leave_type: "Annual Leave",
            leave_from: "Jan 23, 2024",
            leave_to: "Jan 27, 2024",
            days: "4",
            status: "Approved",
        },
    ];
    return (
        <div className="w-full h-screen overflow-hidden">
            {/* Header Section */}
            <div className="w-full px-10 h-20 border-b border-gray-300 bg-white flex items-center justify-between">
                {/* Search Bar */}
                <div className="flex items-center h-11 w-[500px] border border-gray-300 rounded-lg">
                    <div className="flex items-center justify-center h-11 w-11">
                        <img src="./assets/search.svg" className="w-5 h-5" alt="Search" />
                    </div>
                    <input
                        type="text"
                        className="w-full h-full outline-none bg-inherit"
                        placeholder="Search keyword..."
                    />
                </div>
                {/* Inbox Button */}
                <button className="border border-gray-300 h-11 w-11 rounded-lg flex items-center justify-center">
                    <img src="./assets/inbox.svg" className="w-5 h-5" alt="Inbox" />
                </button>
            </div>

            {/* Content Section */}
            <div className="w-full h-[calc(100vh-5rem)] flex flex-col">
                {/* Title and Action Section */}
                <div className="w-full p-[30px] flex items-center justify-between">
                    <div className="flex flex-col text-left">
                        <b className="font-semibold text-2xl">Employee</b>
                        <p className="text-gray-500">Manage your employee</p>
                    </div>
                    <div className="flex space-x-2">
                        {/* Export Button */}
                        <div className="h-10 bg-white flex items-center px-5 border border-gray-300 rounded-lg text-gray-500 font-semibold cursor-pointer">
                            Export
                        </div>
                        {/* Add Employee Button */}
                        <div className="h-10 bg-indigo-600 flex items-center px-5 border border-indigo-600 rounded-lg text-white font-semibold cursor-pointer">
                            <b className="mr-2 text-xl">+</b> Add Employee
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="flex-1 bg-white border-t border-gray-300 overflow-auto">
                    {/* Placeholder for employee list */}
                    <div className="w-full px-10 border-b border-gray-300 bg-white flex space-x-6 text-gray-600">
                        {["Manage Employees", "Organization Chart", "Request Time Off"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-3 text-sm font-semibold ${
                                    activeTab === tab ? "border-b-2 border-indigo-600 text-indigo-600" : "border-b-2 border-white"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div>
                    {activeTab === "Manage Employees" && (
                        <div className='px-[2.5%] mt-5'>
                            {/* Tableau */}
                            <h2 className="font-semibold text-xl mb-4">Manage Employees</h2>
                                <table className="w-full border-none border-0 text-sm">
                                    <thead className="bg-gray-100 border-0 text-gray-500 font-light">
                                        <tr>
                                            <th className="border-0 border-gray-300 p-3 text-left rounded-l-xl font-medium">Employee Name</th>
                                            <th className="border-0 border-gray-300 p-3 text-left font-medium">Phone Number</th>
                                            <th className="border-0 border-gray-300 p-3 text-left font-medium">Department</th>
                                            <th className="border-0 border-gray-300 p-3 text-left font-medium">Job Title</th>
                                            <th className="border-0 border-gray-300 p-3 text-left font-medium">Contract Type</th>
                                            <th className="border-0 border-gray-300 p-3 text-left font-medium">Attendance</th>
                                            <th className="border-0 border-gray-300 p-3 text-center rounded-r-xl font-medium">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {employees.map((employee, index) => (
                                            <tr key={index} className="border-b">
                                                <td className="border-0 border-gray-300 p-3">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                                        <div>
                                                            <p className="font-semibold">{employee.name}</p>
                                                            <p className="text-gray-500 text-xs">{employee.email}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="border-0 border-gray-300 p-3">{employee.phone}</td>
                                                <td className="border-0 border-gray-300 p-3">{employee.department}</td>
                                                <td className="border-0 border-gray-300 p-3">{employee.jobTitle}</td>
                                                <td className="border-0 border-gray-300 p-3">{employee.contractType}</td>
                                                <td className="border-0 border-gray-300 p-3">{employee.attendance}</td>
                                                <td className="border-0 border-gray-300 p-3 text-center">
                                                    <button className=" rounded-lg border border-gray-300 px-3 py-2 text-gray-500 font-semibold">See Details</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        {activeTab === "Organization Chart" && (
                            <div className='px-[2.5%] mt-5'>
                                <h2 className="font-semibold text-xl">Organization Chart</h2>
                                <p className="text-gray-500">This section is under development.</p>
                                <OrgChart/>
                            </div>
                        )}
                        {activeTab === "Request Time Off" && (
                            <div className='px-[2.5%] mt-5'>
                                <h2 className="font-semibold text-xl mb-4">Request Time Off</h2>
                                <table className="w-full border-none border-0 text-sm">
                                    <thead className="bg-gray-100 border-0 text-gray-500 font-light">
                                        <tr>
                                            <th className="border-0 border-gray-300 p-3 text-left rounded-l-xl font-medium">Employee Name</th>
                                            <th className="border-0 border-gray-300 p-3 text-left font-medium">Leave Type</th>
                                            <th className="border-0 border-gray-300 p-3 text-left font-medium">Leave From</th>
                                            <th className="border-0 border-gray-300 p-3 text-left font-medium">Leave To</th>
                                            <th className="border-0 border-gray-300 p-3 text-left font-medium">Days</th>
                                            <th className="border-0 border-gray-300 p-3 text-left font-medium">Status</th>
                                            <th className="border-0 border-gray-300 p-3 text-center rounded-r-xl font-medium"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Request.map((employee, index) => (
                                            <tr key={index} className="border-b">
                                                <td className="border-0 border-gray-300 p-3">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                                        <div>
                                                            <p className="font-semibold">{employee.name}</p>
                                                            <p className="text-gray-500 text-xs">{employee.email}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="border-0 border-gray-300 p-3">{employee.leave_type}</td>
                                                <td className="border-0 border-gray-300 p-3">{employee.leave_from}</td>
                                                <td className="border-0 border-gray-300 p-3">{employee.leave_to}</td>
                                                <td className="border-0 border-gray-300 p-3">{employee.days}</td>
                                                <td className="border-0 border-gray-300 p-3">{employee.status === 'Pending' ? <p className='px-3 py-2 bg-red-300 w-20 flex justify-center items-center rounded-lg'>Pending</p> : <p className='px-3 py-2 bg-green-300 w-20 flex justify-center items-center rounded-lg'>Approved</p>}</td>
                                                <td className="border-0 border-gray-300 p-3 text-center">
                                                    {employee.status === 'Pending' ? 
                                                        <div className='space-x-2'>
                                                            <button className=" rounded-lg border border-green-500 px-3 py-2 text-green-500 font-semibold">Approve</button>  
                                                            <button className=" rounded-lg border border-red-500 px-3 py-2 text-red-500 font-semibold">Reject</button>  
                                                        </div>  
                                                    :
                                                        <button className=" rounded-lg border border-gray-300 px-3 py-2 text-gray-500 font-semibold">See Details</button>
                                                    }
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employee;
