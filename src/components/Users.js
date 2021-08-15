import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../store/actions";
import { useHistory } from "react-router";

export default function Users() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => ({
    users: state.users.users,
    loading: state.users.loading,
  }));

  const handlePostsClick = () => {
    history.push("/posts");
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  let list = <h2 className="mt-5 ml-5">List is empty</h2>;

  if (loading) list = <h2 className="mt-5 ml-5">Loading..</h2>;

  if (users?.length)
    list = (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">E-mail</th>
          </tr>
        </thead>
        <tbody>
          {users?.length &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );

  return (
    <div className="container">
      <h1>Users</h1>
      {list}
      <button className="btn btn-dark" onClick={handlePostsClick}>
        Posts
      </button>
    </div>
  );
}
