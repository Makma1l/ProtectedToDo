import { useState } from "react";
import styles from "./Dashboard.module.scss";

const init = [];

export default function Dashboard() {
  const [todos, setTodos] = useState(init);
  const [text, setText] = useState("");

  const deleteTodo = (id) => {
    const newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
  };

  const toggleDone = (id) => {
    const newTodos = todos.map((t) => {
      if (t.id === id) {
        return { ...t, done: !t.done };
      }
      return t;
    });
    setTodos(newTodos);
  };

  const addNewTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: text,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setText("");
  };

  return (
    <div>
      <h1 className={styles.dashboardTitle}>
        Today <span >{todos.length}</span>{" "}
      </h1>
      <div className={styles.dashboard}>
        <div className={styles.inputContainer}>
          <h2>Today</h2>
          <input
            type="text"
            placeholder="Add a new task"
            value={text}
            onChange={(event) => setText(event.target.value)}
            className={styles.inputTask}
          />
          <button
            id="insBtn"
            disabled={text === ""}
            onClick={addNewTodo}
            className={styles.buttonAdd}
          >
            +
          </button>
        </div>

        <div className={styles.tasksContainer}>
          <p className={styles.tasksInfo}>
            Tasks to do - {todos.filter((t) => !t.done).length}
          </p>
          <ul className={styles.taskList}>
            {todos
              .filter((t) => !t.done)
              .map((t) => (
                <li key={t.id} className={styles.taskItem}>
                  <span className={styles.taskTitle}>{t.title}</span>
                  <button
                    id="doneBtn"
                    onClick={() => toggleDone(t.id)}
                    className={styles.buttonDone}
                  >
                    ✓
                  </button>
                  <button
                    id="delBtn"
                    onClick={() => deleteTodo(t.id)}
                    className={styles.buttonDelete}
                  >
                    🗑️
                  </button>
                </li>
              ))}
          </ul>

          <p className={styles.tasksInfo}>
            Done - {todos.filter((t) => t.done).length}
          </p>
          <ul className={styles.taskList}>
            {todos
              .filter((t) => t.done)
              .map((t) => (
                <li key={t.id} className={styles.taskItem}>
                  <span className={styles.taskTitleDone}>{t.title}</span>
                  <button
                    id="doneBtn"
                    onClick={() => toggleDone(t.id)}
                    className={styles.buttonDone}
                  >
                    ↩
                  </button>
                  <button
                    id="delBtn"
                    onClick={() => deleteTodo(t.id)}
                    className={styles.buttonDelete}
                  >
                    🗑️
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
