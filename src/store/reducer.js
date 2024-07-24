import { ADD_TODO, TOGGLE_TODO } from "./actions";

const initialState = {
  today: [],
  tomorrow: [],
  thisWeek: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        [action.payload.category]: [
          ...state[action.payload.category],
          {
            id: Date.now(),
            title: action.payload.title,
            checked: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        [action.payload.category]: state[action.payload.category].map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, checked: !todo.checked }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
