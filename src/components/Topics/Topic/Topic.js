import React from "react";
import { connect } from "react-redux";
import { likeTopic, dislikeTopic } from "../../../redux-store/Action/Action";
import Button from "../../Button/Button"
import "./Topic.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp,faThumbsDown } from '@fortawesome/free-solid-svg-icons'

const Topic =({topic, like, dislike })=>(
    <div className="Topic">
      <span className="buttons">
        <Button clicked={like}>
          <FontAwesomeIcon icon={faThumbsUp} />
          <span className="likeCount">{topic.likeCount}</span>
        </Button>
        <Button clicked={dislike}>
          <FontAwesomeIcon icon={faThumbsDown} />
          <span className="dislikeCount">{topic.dislikeCount}</span>
        </Button>
      </span>
      <span className="title">{topic.title}</span>
    </div>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  like: () => dispatch(likeTopic(ownProps.topicId)),
  dislike: () => dispatch(dislikeTopic(ownProps.topicId)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Topic);

