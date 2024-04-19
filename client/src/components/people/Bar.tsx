import React from "react";

type BarProps = {
  name?: string;
  message?: string;
  time?: string;
  notifications?: number | null;
};

const Bar: React.FC<BarProps> = ({ name, message, time, notifications }) => {
  return (
    <div className="w-full flex flex-row justify-between bg-white p-2 border-b-2">
      <div className="flex flex-row space-x-3 items-center">
        <img
          src="/av.jpg"
          className="h-10 w-10 rounded-full object-cover"
          alt="av"
        />
        <div className="flex flex-col space-y-1">
          <p className="font-bold">{name ?? name}</p>
          <p className="text-slate-500 truncate max-w-[14rem]">
            {message ?? name}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center space-y-2">
        <p className="text-slate-500 font-medium text-sm">{time ?? ""}</p>
        {notifications ? (
          <span className="rounded-full bg-orange-500 text-white text-center h-6 w-6 flex items-center justify-center">
            <span
              className={`${
                notifications > 99 ? "text-xs" : "text-sm"
              } font-semibold`}
            >
              {notifications}
            </span>
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Bar;
