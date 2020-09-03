import React,{Component} from 'react';
import Topic from "./Topic/Topic";
import './Topics.css';
import { connect } from 'react-redux';

class Topics extends Component {
  static defaultProps = {
    topics: [],
  };

  // compute the properties for componentWillMount and render
  getTopics() {
    const { topics } = this.props;
    const topicsArr = Object.entries(topics);
    return { topicsArr };
  }

  render() {
    const { topicsArr } = this.getTopics();
    console.log("Hello",topicsArr)
    return (
      <div className="TopicList">
        {topicsArr
          .map(([topicId, topic]) => (
            <div className="topic" key={topicId}>
              <Topic
                topicId={topicId}
                topic={topic}
              />
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topics: state.topics
  };
};
export default connect(mapStateToProps)(Topics);