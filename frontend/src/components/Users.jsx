import React from "react";
import Button from "./Button";
import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    {
      firstName: "Jaskeerat",
      lastName: "Singh",
      _id: 1,
    },
  ]);

  return (
    <div>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search users...."
          className="w-full border border-gray-100"
        />
      </div>
      <div>
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </div>
  );
};
const User = ({ user }) => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-full">
        <Button label={"Send Money"} />
      </div>
    </div>
  );
};

export default Users;
