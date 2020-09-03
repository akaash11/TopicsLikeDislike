import { CREATE_NEW_TOPIC, LIKE_TOPIC, DISLIKE_TOPIC } from "../Action/Action";

const topics = (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_TOPIC:
      console.log("Create new topic")
      return {
        ...state,
        [Object.keys(state).length]: {
          title: action.title.trim(),
          likeCount: 0,
          dislikeCount: 0,
        },
      };
    case LIKE_TOPIC: {
      const topic = state[action.topicId];
      console.log("LIKE_TOPIC",topic)
      return {
        ...state,
        [action.topicId]: {
          ...topic,
          likeCount: topic.likeCount + 1,
        },
      };
    }
    case DISLIKE_TOPIC: {
      const topic = state[action.topicId];
      console.log("DISLIKE_TOPIC",topic)
      return {
        ...state,
        [action.topicId]: {
          ...topic,
          dislikeCount: topic.dislikeCount + 1,
        },
      };
    }
    default:
      return state;
  }
};

export default topics;
