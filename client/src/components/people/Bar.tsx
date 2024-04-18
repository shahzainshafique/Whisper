import React from "react";

type BarProps = {
  name?: string;
  message?: string;
  time?: string;
  notifications?: number | null;
};

const Bar: React.FC<BarProps> = ({ name, message, time, notifications }) => {
  return (
    <div className="py-8 max-w[100%] bg-white space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 border-b-2">
      <img
        className="w-12 h-12 rounded-full object-cover"
        src="/av.jpg"
        alt="avatar"
      />
      <div className="flex flex-row text-center space-y-1 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-bold">{name ?? ""}</p>
          <p className="text-slate-500 font-medium">{message ?? ""}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-slate-500 font-medium">{time ?? ""}</p>
          {notifications ? (
            <span className="rounded-full bg-orange-500 text-white text-center h-6 w-6">
              {notifications}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Bar;
