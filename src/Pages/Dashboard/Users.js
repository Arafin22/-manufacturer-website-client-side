import React, { useEffect, useState } from "react";
// import { useQuery } from "react-query";
// import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  // const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://secret-dusk-46242.herokuapp.com/user', {
  //     method: 'GET',
  //     headers:{
  //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
  //     }
  // }).then(res => res.json()));
  // if (isLoading) {
  //     return <Loading></Loading>
  // }

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://safe-inlet-43341.herokuapp.com/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  return (
    <div>
      <h2 className="text-2xl">All Users: {users.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>make admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user._id} user={user}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
