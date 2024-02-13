import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { addPost } from "../../Store/postsSlice";

import "./createPost.scss";

const CreatePost = () => {
  const { register, handleSubmit, reset } = useForm({});
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addPost(data));

    reset();
  };

  return (
    <div className="create-post">
      <div className="container">
        <div className="create-post-wrap">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="create-post-wrap__form"
          >
            <input
              {...register("title")}
              placeholder="Название поста"
              type="text"
              className="create-post-wrap__form_title"
            />
            <textarea
              {...register("body")}
              placeholder="Описание"
              type="text"
              className="create-post-wrap__form_desc"
            />
            <input
              {...register("userId")}
              placeholder="Author Id"
              type="number"
              className="create-post-wrap__form_author"
            />
            <button type="submit" className="create-post-wrap__form_btn">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
