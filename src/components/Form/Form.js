import React from "react";
import "./Form.css"
import { connect } from "react-redux";
import { setNewTopicTitle, createNewTopic } from "../../redux-store/Action/Action";
const Form = ({ newTopicTitle, setNewTopicTitle, createNewTopic }) => (
    <div className="form">
        <input type="text"
            className="search"
            onChange={e => setNewTopicTitle(e.target.value)}
            value={newTopicTitle}
            placeholder="Enter a new topic title"
            pattern="[A-Za-z]{10}"
            />
        <input 
            type="submit" 
            value="submit" 
            className="submit"
            onClick={() => {
                setNewTopicTitle(''); 
                createNewTopic(newTopicTitle);
              }}
        />   
    </div>
);

const mapStateToProps = state => ({
  newTopicTitle: state.newTopic,
});

export default connect(
  mapStateToProps,
  { setNewTopicTitle, createNewTopic },
)(Form);
