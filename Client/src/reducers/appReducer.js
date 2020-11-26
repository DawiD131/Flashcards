const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LESSON":
      return {
        data: [...state.data, { lesson: action.lessonInputValue, words: [] }],
        lessonsSubjects: [...state.lessonsSubjects, action.lessonInputValue],
        words: state.words,
        currentLesson: state.currentLesson,
      };

    case "DELETE_LESSON":
      return {
        data: state.data.filter(
          (item) => item.lesson !== action.lessonToDelete
        ),
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
        words: action.words,
        currentLesson: action.currentLesson,
        lessonsSubjects: state.lessonsSubjects,
        data: state.data,
      };

    case "ADD_WORD":
      state.data.map((item) => {
        if (item.lesson === action.lesson) {
          item.words.push(action.wordToAdd);
          return item;
        } else {
          return item;
        }
      });

      return {
        words: [...state.words, action.wordToAdd],
        data: state.data,
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
        words: action.data.length ? action.data[0].words : [],
        lessonsSubjects: action.data.map((item) => item.lesson),
        currentLesson: action.data.length ? action.data[0].lesson : "",
      };

    default:
      return state;
  }
};

export default appReducer;
