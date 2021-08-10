import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../store/actions";

export default function Users() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => ({
    users: state.users.users,
    loading: state.users.loading,
  }));

  let list = <h2 className="mt-5 ml-5">List is empty</h2>;

  if (loading) list = <h2 className="mt-5 ml-5">Loading..</h2>;

  if (users?.length)
    list = (
      <table>
        {users?.length &&
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
      </table>
    );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="container">
      {list}
      <button>Posts</button>
    </div>
  );
}
