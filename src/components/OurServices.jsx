import React from "react";

const OurServices = (props) => {
  return (
    <li className="p-6 shadow-xl rounded-xl ring-1 ring-black/5 shadow-black/10 bg-blue-950">
      <h3 className="font-bold tracking-tight text-violet-600 text-3xl">
        {props.tittle}
      </h3>
      <p className="mt-6 text-4xl font-bold tracking-tighter">{props.price}</p>
      <p className="mt-3 text-white font-bold">{props.description}</p>

      <ul className="mt-6 space-y-1.5 text-white">
        <li className="flex items-center gap-1.5 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 w-5 h-5 text-violet-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span>{props.benefit1}</span>
        </li>
        <li className="flex items-center gap-1.5 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 w-5 h-5 text-violet-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span>{props.benefit2}</span>
        </li>
        <li className="flex items-center gap-1.5 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 w-5 h-5 text-violet-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span>{props.benefit3}</span>
        </li>
        <li className="flex items-center gap-1.5 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 w-5 h-5 text-violet-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span>{props.benefit4}</span>
        </li>
      </ul>
      <a
        className="flex mt-3 justify-center bg-gray-100 rounded-md py-1 hover:bg-gray-500"
        href="https://previewify.app/app/register" 
      >
        {props.trialDay}
      </a>
    </li>
  );
};

export default OurServices;
