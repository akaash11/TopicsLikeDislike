export const SET_NEW_TOPIC_TITLE = 'SET_NEW_TOPIC_TITLE';
export const CREATE_NEW_TOPIC = 'CREATE_NEW_TOPIC';
export const LIKE_TOPIC = 'LIKE_TOPIC';
export const DISLIKE_TOPIC = 'DISLIKE_TOPIC';

export const setNewTopicTitle = title => ({
    type: SET_NEW_TOPIC_TITLE,
    title,
});
  
export const createNewTopic = title => ({
    type: CREATE_NEW_TOPIC,
    title,
});
  
export const likeTopic = topicId => ({
    type: LIKE_TOPIC,
    topicId,
});
  
export const dislikeTopic = topicId => ({
    type: DISLIKE_TOPIC,
    topicId,
});
