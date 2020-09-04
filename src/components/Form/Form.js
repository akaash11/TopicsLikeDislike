import React from "react";
import "./Form.css"
import { connect } from "react-redux";
import { setNewTopicTitle, createNewTopic } from "../../redux-store/Action/Action";
import { useForm } from 'react-hook-form'
const Form = ({ newTopicTitle, setNewTopicTitle, createNewTopic }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) =>{
    setNewTopicTitle(''); 
    createNewTopic(newTopicTitle);
  }

  return(
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="searchbox">
          <input type="text"
              name="searchbar"
              className="search"
              onChange={e => setNewTopicTitle(e.target.value)}
              value={newTopicTitle}
              placeholder="Enter a new topic title"
              ref={register({
                required: {
                  value: true,
                  message: "Topic name is required",
                },
                minLength: {
                  value: 10,
                  message: "Topic name should minimum length of 10",
                },
              })}
              />
          <span className="error">
            {errors.searchbar && errors.searchbar.message}
          </span>
        </div>
        <input 
            type="submit" 
            value="submit" 
            className="submit"
        />   
    </form>
  );
};

const mapStateToProps = state => ({
  newTopicTitle: state.newTopic,
});

export default connect(
  mapStateToProps,
  { setNewTopicTitle, createNewTopic },
)(Form);
