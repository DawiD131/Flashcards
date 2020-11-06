const initialState = [];

const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { lesson: action.lessonValue, words: [] }];
    case "REMOVE":
      return state.filter((item) => item.lesson !== action.itemToDelete);
    case "GET_LESSON":
      return state;
    case "ADD_WORD":
      const newState = state.map((item) => {
        if (item.lesson === action.lesson) {
          console.log(item);
          item.words.push(action.wordToAdd);
          return item;
        } else {
          return item;
        }
      });

      return newState;
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
