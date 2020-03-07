const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Getting started with React",
      lessons: [
        { id: 1, title: "First class" },
        { id: 2, title: "Second class" }
      ]
    },
    {
      id: 2,
      title: "Redux concepts",
      lessons: [
        { id: 3, title: "Third class" },
        { id: 4, title: "Forth class" }
      ]
    }
  ]
};

/**
 * The reducer receives 2 parameters everytime an action is sent or when the store is built, these are 'state' and 'action'.
 * it's common to have all the initial state in a separate function
 * @param {*} state
 */
export default function course(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module
    }; //returns the modified state | easiest method is copy the present state and replace the states needed
  }

  return state;
}
