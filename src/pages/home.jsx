import React, { useEffect } from "react";
import Chart from "chart.js/auto";


const Home = () => {
  useEffect(() => {
    const ctx = document.getElementById("chart").getContext("2d");

    // Data for the chart
    const data = {
      labels: ["Jan 24", "Jan 25", "Jan 26", "Jan 27", "Jan 28", "Jan 29", "Jan 30"],
      datasets: [
        {
          label: "Work Time",
          data: [4, 5, 6, 5, 6, 1, 0],
          backgroundColor: "#3949AB", // Blue
        },
        {
          label: "Over Time",
          data: [2, 2, 3, 0, 2, 0, 0],
          backgroundColor: "rgba(255, 99, 132, 0.8)", // Pink/Red
        },
      ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false, // Désactive l'affichage des descriptions
          },
        },
        scales: {
          x: {
            stacked: true, // Enable stacking for x-axis
          },
          y: {
            stacked: true, // Enable stacking for y-axis
            beginAtZero: true,
            ticks: {
              stepSize: 2, // Customize steps on the y-axis
            },
          },
        },
    };

    // Create the chart
    const myChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });

    // Cleanup the chart on component unmount
    return () => {
      myChart.destroy();
    };
  }, []);
  
  return (
    <div className="w-full h-full overflow-y-scroll custom-scrollbar">
      <div className="w-[100%] px-[40px] h-20 border-b border-gray-300 bg-white flex flex-row items-center justify-between">
        <div className="flex flex-row h-11 items-center w-[500px] border border-gray-300 rounded-lg">
          <div className="flex items-center justify-center h-11 w-11 ">
            <img src="./assets/search.svg" className="w-5 h-5" alt="" />
          </div>
          <input
            type="text"
            className="w-full h-full outline-none bg-inherit"
            placeholder="Search keyword..."
          />
        </div>
        <button className="border border-gray-300 h-11 w-11 rounded-lg items-center flex justify-center">
          <img src="./assets/inbox.svg" className="w-5 h-5" alt="" />
        </button>
      </div>
      <div className="w-[calc(100%-60px)] m-[30px]">
        <div className="w-full h-16 flex flex-row items-center justify-between">
          <div className="flex-col items-center justify-left text-left">
            <b className="font-semibold text-2xl">Dashboard</b>
            <p className="text-gray-500">Welcome back to BordUp</p>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <div className="h-10 bg-white flex items-center px-5 border border-gray-300 rounded-lg text-gray-500 font-semibold cursor-pointer">
              1 Jan 2025 - 15 Jan 2025
            </div>
            <div className="h-10 bg-indigo-600 flex items-center px-5 border border-indigo-600 rounded-lg text-white font-semibold cursor-pointer">
              Export
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          <div className="border border-gray-300 bg-white text-black rounded-lg p-4">
            <h2 className="text-sm font-medium uppercase flex flex-row items-center">
              <button className="w-7 h-7 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
                <img className="w-5 h-5" src="./assets/employee.svg" />
              </button>
              Total Employees
            </h2>
            <p className="text-2xl font-bold mt-2 flex items-center">104</p>
          </div>

          <div className="border border-gray-300 bg-white text-black rounded-lg p-4">
            <h2 className="text-sm font-medium uppercase flex flex-row items-center">
              <button className="w-7 h-7 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
                <img className="w-5 h-5" src="./assets/job-a.svg" />
              </button>
              Job Applicants
            </h2>
            <p className="text-2xl font-bold mt-2 flex items-center">
              1,839{" "}
              <p className="text-green-600 text-xs bg-green-100 ml-3 py-1 px-3 rounded-lg flex items-center translate-y-0.5 border border-green-500">
                +5%
              </p>
            </p>
          </div>

          <div className="border border-gray-300 bg-white text-black rounded-lg p-4">
            <h2 className="text-sm font-medium uppercase flex flex-row items-center">
              <button className="w-7 h-7 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
                <img className="w-5 h-5" src="./assets/coins.svg" />
              </button>
              Total Payroll
            </h2>
            <p className="text-2xl font-bold mt-2 flex items-center">
              $324,920.83{" "}
              <p className="text-red-600 text-xs bg-red-100 ml-3 py-1 px-3 rounded-lg flex items-center translate-y-0.5 border border-red-500">
                -3.5%
              </p>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-100">
          <div className="col-span-1 md:col-span-2 bg-white rounded-lg border border-gray-300 py-3">
            <div className="flex flex-row items-center justify-between outline-none">
                <h1 className="ml-[2.5%] mb-3 font-semibold text-xl">Member Work Hours</h1>
                <select name="" id="" defaultValue='1' className="mr-[2.5%] px-4 py-1 border border-gray-300 rounded-lg text-gray-500">
                  <option value="1">View by Day</option>
                  <option value="1">View by Week</option>
                  <option value="1">View by Mounth</option>
                  <option value="1">View by Year</option>
                </select>
            </div>
            <div className="w-[95%] mx-[2.5%] flex-row flex justify-end my-2">
              <div className="flex flex-row items-center mr-4">
                <div className="bg-indigo-600 w-4 h-4 rounded-sm mr-1"></div>
                <p>Work time</p>
              </div>
              <div className="flex flex-row items-center">
                <div className="bg-pink-400 w-4 h-4 rounded-sm mr-1"></div>
                <p>Over time</p>
              </div>
            </div>
            <canvas id="chart" className="p-6"></canvas>
          </div>

          <div className="col-span-1 md:col-span-1 bg-white rounded-lg border border-gray-300 py-3">
            <h1 className="ml-[5%] mb-3 font-semibold text-xl">
              What's on in Junuary?
            </h1>
            <div className="flex flex-row items-center justify-between w-[90%] mx-[5%] bg-gray-200 border border-gray-400 px-2 py-2 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg">
              <button className="bg-white rounded-lg py-2 text-indigo-600 font-semibold">
                Time Off
              </button>
              <button className="font-semibold">Birthday</button>
            </div>
            <div className="w-[90%] h-16 mx-[5%] mt-4">
              <div className="flex flex-row items-center border-b border-gray-300 py-4">
                <img className="w-14 h-14 rounded-full object-cover	" src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <div className="flex flex-col ml-3">
                  <p className="font-semibold">Elanoir Maggie</p>
                  <b className="font-semibold text-sm text-gray-500">UX UI Designer ● Sick Leave</b>
                </div>
              </div>
              <div className="flex flex-row items-center border-b border-gray-300 py-4">
                <img className="w-14 h-14 rounded-full object-cover	" src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D" alt="" />
                <div className="flex flex-col ml-3">
                  <p className="font-semibold">James Carter</p>
                  <b className="font-semibold text-sm text-gray-500">UX UI Designer ● Annual Leave</b>
                </div>
              </div>
              <div className="flex flex-row items-center border-b border-gray-300 py-4">
                <img className="w-14 h-14 rounded-full object-cover	" src="https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D" alt="" />
                <div className="flex flex-col ml-3">
                  <p className="font-semibold">Emily Johnson</p>
                  <b className="font-semibold text-sm text-gray-500">FullStack dev ● Work From Home</b>
                </div>
              </div>
              <div className="flex flex-row items-center border-b border-gray-300 py-4">
                <img className="w-14 h-14 rounded-full object-cover	" src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <div className="flex flex-col ml-3">
                  <p className="font-semibold">Benjamin Moore</p>
                  <b className="font-semibold text-sm text-gray-500">Database Manager ● Work From Home</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
