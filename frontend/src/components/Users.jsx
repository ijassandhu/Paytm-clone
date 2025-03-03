import Button from "./Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
        .then((response) => {
          setUsers(response.data.user);
        });
    } catch {
      console.error("Error fetching users:", error);
    }
  }, [filter]);
  return (
    <div>
      <div className="font-bold mt-6 text-lg mx-10">Users</div>
      <div className="my-2 mx-10">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users...."
          className="w-full border border-gray-100 p-2"
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
  const navigate = useNavigate();
  return (
    <div className="flex justify-between mx-10">
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
        <Button
          onClick={() => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
};

export default Users;
