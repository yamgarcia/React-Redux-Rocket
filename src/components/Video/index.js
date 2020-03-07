import React from "react";
import { connect } from "react-redux";
const Video = ({ activeLesson, activeModule }) => {
  return (
    <div>
      <strong>Module {activeModule.title}</strong>
      <br />
      <span>Class {activeLesson.title}</span>
    </div>
  );
};

export default connect(state => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule
}))(Video);
