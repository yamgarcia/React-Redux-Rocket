import React from "react";

import { connect } from "react-redux";

import * as CourseActions from "../../store/actions/course";

import { bindActionCreators } from "redux";

/**
 * return an object that has a pattern
 * @param {*} module
 * @param {*} lesson
 */

/**
 * Every component using 'connect' has a function called dispatch that send actions to redux, and listened by all reducers
 * @param {*} param
 */

const Sidebar = ({ modules, toggleLesson }) => {
  return (
    <aside>
      {modules.map(module => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map(lesson => (
              <li key={lesson.id}>
                {lesson.LessonTitle}
                <button onClick={() => toggleLesson(module, lesson)}>
                  Select
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

const mapStateToProps = state => ({
  modules: state.course.modules
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
