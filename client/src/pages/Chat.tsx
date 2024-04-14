import { useState } from "react";
export const Chat = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      imageUrl: "https://www.gravatar.com/avatar/000?d=mp",
      lastMessage: "Hey, how are you?",
      lastSeen: "1 hour ago",
    },
    {
      id: 2,
      name: "Jane Doe",
      imageUrl: "https://www.gravatar.com/avatar/111?d=mp",
      lastMessage: "Goodbye",
      lastSeen: "2 hours ago",
    },
  ];

  const [selectedUser, setSelectedUser] = useState(users[0]);

  const messages = [
    {
      id: 1,
      sender: "John Doe",
      content: "Hello",
      timestamp: "Just now",
    },
    {
      id: 2,
      sender: "Jane Doe",
      content: "Hi",
      timestamp: "1 min ago",
    },
  ];

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-100 p-4">
        {users.map((user) => (
          <div
            key={user.id}
            className={`flex items-center p-2 hover:bg-gray-200 ${
              user === selectedUser ? "bg-gray-200" : ""
            }`}
            onClick={() => setSelectedUser(user)}
          >
            <img
              src={user.imageUrl}
              className="h-12 w-12 rounded-full object-cover"
              alt="avatar"
            />
            <div className="ml-4">
              <p className="font-medium">{user.name}</p>
              <p className="text-gray-500 text-sm">{user.lastMessage}</p>
              <p className="text-gray-500 text-xs">{user.lastSeen}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1 bg-white p-4 overflow-y-scroll">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-center p-2 ${
              message.sender === selectedUser.name
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`rounded-lg p-2 ${
                message.sender === selectedUser.name
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              <p>{message.content}</p>
              <p className="text-gray-500 text-xs">{message.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
