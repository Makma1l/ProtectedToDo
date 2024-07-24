export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = (category, title) => ({
  type: ADD_TODO,
  payload: { category, title },
});

export const toggleTodo = (category, id) => ({
  type: TOGGLE_TODO,
  payload: { category, id },
});
