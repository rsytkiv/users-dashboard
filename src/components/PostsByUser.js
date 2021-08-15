import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPostsByUser, getUserById } from "../store/actions";

export default function PostsByUser(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { posts, loading, user } = useSelector((state) => ({
    posts: state.posts.userPosts,
    loading: state.posts.loading,
    user: state.users.user,
  }));

  useEffect(() => {
    dispatch(getPostsByUser(props.match.params.id));
    dispatch(getUserById(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const handleClickDetails = (id) => {
    console.log("post id ", id);
  };

  const handleAddNewClick = () => {
    console.log("add new");
  };

  let list = <h2 className="mt-5 ml-5">List is empty</h2>;

  if (loading) list = <h2 className="mt-5 ml-5">Loading..</h2>;

  if (posts?.length)
    list = (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {posts?.length &&
            posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button
                    disabled
                    className="btn btn-dark"
                    onClick={() => handleClickDetails(post.id)}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );

  return (
    <div className="container">
      <h1>
        Posts by <strong>{user?.email}</strong>
      </h1>
      {list}
      {user && posts && (
        <button
          className="btn btn-success mb-2"
          disabled
          onClick={handleAddNewClick}
        >
          Add new
        </button>
      )}
    </div>
  );
}
