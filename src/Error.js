import React from "react";

const Error = () => {
  return (
    <div className="bg-green-400 h-screen flex  justify-center items-center text-white">
       
      <div class="text-center text-white">
        
        <h1 className=" text-center texl-3xl ">Error Page</h1>

        <h1 class="mb-4 text-6xl font-semibold text-red-500">404</h1>
        <p class="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>
        <div class="animate-bounce">
          <svg
            class="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p class="mt-4 text-gray-600">
          Let's get you back{" "}
          <a href="/" class="text-blue-500">
            home
          </a>
          .
        </p>
      </div>



    </div>


//  second

 


 
  );
};

export default Error;
