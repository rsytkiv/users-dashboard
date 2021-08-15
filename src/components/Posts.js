import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPostsList } from "../store/actions";

export default function Posts() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => ({
    posts: state.posts.posts,
    loading: state.posts.loading,
  }));

  useEffect(() => {
    dispatch(getPostsList());
  }, [dispatch]);

  const handleClickDetails = (userId) => {
    history.push(`/posts-by-user/${userId}`);
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
                    className="btn btn-dark"
                    onClick={() => handleClickDetails(post.userId)}
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
      <h1>Posts</h1>
      {list}
      {/* <button className="btn btn-dark">Posts</button> */}
    </div>
  );
}
