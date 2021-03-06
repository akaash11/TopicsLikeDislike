import { SET_NEW_TOPIC_TITLE } from "../Action/Action";

const newTopic = (state = '', action) => {
  switch (action.type) {
    case SET_NEW_TOPIC_TITLE:
      return action.title;
    default:
      return state;
  }
};

export default newTopic;
