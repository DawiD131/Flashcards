const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LESSON":
      return {
        userId: state.userId,
        data: action.data,
        lessonsSubjects: [...state.lessonsSubjects, action.lessonInputValue],
        words: state.words,
        currentLesson: state.currentLesson,
      };

    case "DELETE_LESSON":
      return {
        userId: state.userId,
        data: action.data,
        words: state.data.filter(
          (item) => item.lesson !== action.lessonToDelete
        )[0].words,
        currentLesson: state.currentLesson,
        lessonsSubjects: state.lessonsSubjects.filter(
          (item) => item !== action.lessonToDelete
        ),
      };

    case "GET_LESSON":
      return {
        userId: state.userId,
        words: action.words,
        currentLesson: action.currentLesson,
        lessonsSubjects: state.lessonsSubjects,
        data: state.data,
      };

    case "ADD_WORD":
      return {
        words: [...state.words, action.wordToAdd],
        data: action.data,
        lessonsSubjects: state.lessonsSubjects,
        currentLesson: state.currentLesson,
      };

    case "DELETE_WORD":
      state.data.map((item) => {
        if (item.lesson === action.lesson) {
          item.words.map((el, index) => {
            if (el.word === action.wordToDelete) {
              item.words.splice(index, 1);
            }
            return el;
          });
          return item;
        } else {
          return item;
        }
      });

      return {
        data: state.data,
        words: state.words.filter((item) => item.word !== action.wordToDelete),
        currentLesson: state.currentLesson,
        lessonsSubjects: state.lessonsSubjects,
      };

    case "IS_WORD_LEARNED":
      console.log(action.status);
      state.data.map((item) => {
        if (item.lesson === action.lesson) {
          item.words.map((el) => {
            if (el.word === action.word) {
              el.isLearned = action.status;
            }
            return el;
          });
          return item;
        } else {
          return item;
        }
      });
      return state;

    case "FETCH":
      return {
        data: action.data,
        userId: action.userId,
        words: action.data.length ? action.data[0].words : [],
        lessonsSubjects: action.data.map((item) => item.lesson),
        currentLesson: action.data.length ? action.data[0].lesson : "",
      };

    default:
      return state;
  }
};

export default appReducer;
