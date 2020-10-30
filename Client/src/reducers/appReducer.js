const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { lesson: action.lessonValue, words: [] }];
    case "REMOVE":
      return state.filter((item) => item.lesson !== action.itemToDelete);
    case "ADD_WORD":
      state
        .filter((item) => item.lesson === action.lesson)[0]
        .words.push(action.wordToAdd);
      console.log(state);
      return state;
    case "IS_WORD_LEARNED":
      state
        .filter((item) => item.lesson === action.lesson)[0]
        .words.filter((item) => item.word === action.word)[0].isLearned =
        action.status;

      return state;
    case "REMOVE_WORD":
      return;
    case "FETCH":
      return action.data;
    default:
      return state;
  }
};

export default appReducer;
