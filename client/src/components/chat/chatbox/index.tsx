import MessageBox from "./MessageBox";

const ChatBox = () => {
  //dummy data before backend integration
  const dummyData = [...Array(5)].map((_) => ({
    message: Math.random().toString(36).substring(7),
    sent: Math.random() > 0.5,
  }));

  console.log(dummyData);
  return (
    <section className="hidden h-full lg:flex flex-col bg-white p-5 rounded-xl space-y-5">
      {dummyData.map((message, index) => (
        <div
          className={`flex ${message.sent ? "justify-end" : "justify-start"}`}
        >
          <MessageBox
            key={index}
            sent={message.sent}
            message={message.message}
          />
        </div>
      ))}
    </section>
  );
};

export default ChatBox;
