import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { getPostById} from "../store/actions";

export default function Post(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { post, loading, user } = useSelector((state) => ({
    post: state.posts.post,
    loading: state.posts.loading,
    user: state.users.user,
    comments: state.comments.comments,
  }));

  useEffect(() => {
    // dispatch(getPostById(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const handleClickDetails = (id) => {
    console.log("post id ", id);
  };

  let list = <h2 className="mt-5 ml-5">List is empty</h2>;

  if (loading) list = <h2 className="mt-5 ml-5">Loading..</h2>;

  // if (posts?.length)

  // list = (
  //   <table className="table">
  //     <thead>
  //       <tr>
  //         <th scope="col">#</th>
  //         <th scope="col">Title</th>
  //         <th scope="col">Body</th>
  //         <th scope="col" />
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {posts?.length &&
  //         posts.map((post) => (
  //           <tr key={post.id}>
  //             <td>{post.id}</td>
  //             <td>{post.title}</td>
  //             <td>{post.body}</td>
  //             <td>
  //               <button
  //                 className="btn btn-dark"
  //                 onClick={() => handleClickDetails(post.id)}
  //               >
  //                 Details
  //               </button>
  //             </td>
  //           </tr>
  //         ))}
  //     </tbody>
  //   </table>
  // );

  return (
    <div className="container">
      <h1>
        Post <strong> # {props.match.params.id}</strong> comments
      </h1>
      {list}
    </div>
  );
}
