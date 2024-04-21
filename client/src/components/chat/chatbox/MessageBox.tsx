import React from "react";

type MessageBoxProps = {
  sent: boolean;
  message: string;
};

const MessageBox: React.FC<MessageBoxProps> = ({ sent, message }) => {
  return (
    <div
      className={`${
        sent
          ? " bg-[#ff4b0a] rounded-s-xl rounded-t-xl left-0 text-white"
          : " bg-[#e6e6e6] rounded-e-xl rounded-t-xl text-black"
      }  p-5 items-center max-w-[50%]`}
    >
      <p className=" text-end font-semibold">{message ?? message}</p>
    </div>
  );
};

export default MessageBox;
