import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPosts, removePost } from "../../Store/postsSlice";

import "./posts.scss";

const Posts = () => {
  const { postsData, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleRemovePost = (postId) => {
    dispatch(removePost(postId));
  };

  return (
    <div className="posts">
      <div className="container">
        <div className="posts-wrap">
          {loading && (
            <div
              style={{
                color: "#fff",
                fontSize: "24px",
              }}
            >
              Loading...
            </div>
          )}

          {error && (
            <div
              style={{
                color: "#fff",
                fontSize: "24px",
              }}
            >
              Error: {error}
            </div>
          )}

          {postsData.map((post) => (
            <Post
              key={post.id}
              postData={post}
              handleRemovePost={() => handleRemovePost(post.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Post = ({ postData, handleRemovePost }) => {
  return (
    <div className="posts-wrap-post">
      <div className="posts-wrap-post__title">{postData.title}</div>
      <div className="posts-wrap-post__author">Author {postData.id}</div>
      <div className="posts-wrap-post__desc">{postData.body}</div>
      <button onClick={handleRemovePost} className="posts-wrap-post__delete">
        Delete
      </button>
    </div>
  );
};

export default Posts;
