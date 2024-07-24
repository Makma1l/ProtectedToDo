import { useState } from "react";
import styles from "./About.module.scss";

const init = {
  today: [],
  tomorrow: [],
  thisWeek: [],
};

export default function About() {
  const [todos, setTodos] = useState(init);
  const [text, setText] = useState("");
  const [currentSection, setCurrentSection] = useState("today");

  const deleteTodo = (id, section) => {
    const newTodos = {
      ...todos,
      [section]: todos[section].filter((t) => t.id !== id),
    };
    setTodos(newTodos);
  };

  const toggleDone = (id, section) => {
    const newTodos = {
      ...todos,
      [section]: todos[section].map((t) => {
        if (t.id === id) {
          return { ...t, done: !t.done };
        }
        return t;
      }),
    };
    setTodos(newTodos);
  };

  const addNewTodo = (section) => {
    const newTodo = {
      id: Date.now(),
      title: text,
      done: false,
    };

    setTodos({
      ...todos,
      [section]: [...todos[section], newTodo],
    });
    setText("");
  };

  return (
    <div>
      <h1 className={styles.dashboardTitle}>Todo List</h1>
      <div className={styles.dashboard}>
        <div className={styles.sectionContainer}>
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
              onClick={() => addNewTodo("today")}
              className={styles.buttonAdd}
            >
              +
            </button>
          </div>
          <div className={styles.tasksContainer}>
            <p className={styles.tasksInfo}>
              Tasks to do - {todos.today.filter((t) => !t.done).length}
            </p>
            <ul className={styles.taskList}>
              {todos.today
                .filter((t) => !t.done)
                .map((t) => (
                  <li key={t.id} className={styles.taskItem}>
                    <span className={styles.taskTitle}>{t.title}</span>
                    <button
                      id="doneBtn"
                      onClick={() => toggleDone(t.id, "today")}
                      className={styles.buttonDone}
                    >
                      ✓
                    </button>
                    <button
                      id="delBtn"
                      onClick={() => deleteTodo(t.id, "today")}
                      className={styles.buttonDelete}
                    >
                      🗑️
                    </button>
                  </li>
                ))}
            </ul>

            <p className={styles.tasksInfo}>
              Done - {todos.today.filter((t) => t.done).length}
            </p>
            <ul className={styles.taskList}>
              {todos.today
                .filter((t) => t.done)
                .map((t) => (
                  <li key={t.id} className={styles.taskItem}>
                    <span className={styles.taskTitleDone}>{t.title}</span>
                    <button
                      id="doneBtn"
                      onClick={() => toggleDone(t.id, "today")}
                      className={styles.buttonDone}
                    >
                      ↩
                    </button>
                    <button
                      id="delBtn"
                      onClick={() => deleteTodo(t.id, "today")}
                      className={styles.buttonDelete}
                    >
                      🗑️
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className={styles.sectionContainer2}>
          <div className={styles.inputContainer}>
            <h2>Tomorrow</h2>
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
              onClick={() => addNewTodo("tomorrow")}
              className={styles.buttonAdd}
            >
              +
            </button>
          </div>
          <div className={styles.tasksContainer}>
            <p className={styles.tasksInfo}>
              Tasks to do - {todos.tomorrow.filter((t) => !t.done).length}
            </p>
            <ul className={styles.taskList}>
              {todos.tomorrow
                .filter((t) => !t.done)
                .map((t) => (
                  <li key={t.id} className={styles.taskItem}>
                    <span className={styles.taskTitle}>{t.title}</span>
                    <button
                      id="doneBtn"
                      onClick={() => toggleDone(t.id, "tomorrow")}
                      className={styles.buttonDone}
                    >
                      ✓
                    </button>
                    <button
                      id="delBtn"
                      onClick={() => deleteTodo(t.id, "tomorrow")}
                      className={styles.buttonDelete}
                    >
                      🗑️
                    </button>
                  </li>
                ))}
            </ul>

            <p className={styles.tasksInfo}>
              Done - {todos.tomorrow.filter((t) => t.done).length}
            </p>
            <ul className={styles.taskList}>
              {todos.tomorrow
                .filter((t) => t.done)
                .map((t) => (
                  <li key={t.id} className={styles.taskItem}>
                    <span className={styles.taskTitleDone}>{t.title}</span>
                    <button
                      id="doneBtn"
                      onClick={() => toggleDone(t.id, "tomorrow")}
                      className={styles.buttonDone}
                    >
                      ↩
                    </button>
                    <button
                      id="delBtn"
                      onClick={() => deleteTodo(t.id, "tomorrow")}
                      className={styles.buttonDelete}
                    >
                      🗑️
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className={styles.sectionContainer3}>
          <div className={styles.inputContainer}>
            <h2>This Week</h2>
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
              onClick={() => addNewTodo("thisWeek")}
              className={styles.buttonAdd}
            >
              +
            </button>
          </div>
          <div className={styles.tasksContainer}>
            <p className={styles.tasksInfo}>
              Tasks to do - {todos.thisWeek.filter((t) => !t.done).length}
            </p>
            <ul className={styles.taskList}>
              {todos.thisWeek
                .filter((t) => !t.done)
                .map((t) => (
                  <li key={t.id} className={styles.taskItem}>
                    <span className={styles.taskTitle}>{t.title}</span>
                    <button
                      id="doneBtn"
                      onClick={() => toggleDone(t.id, "thisWeek")}
                      className={styles.buttonDone}
                    >
                      ✓
                    </button>
                    <button
                      id="delBtn"
                      onClick={() => deleteTodo(t.id, "thisWeek")}
                      className={styles.buttonDelete}
                    >
                      🗑️
                    </button>
                  </li>
                ))}
            </ul>

            <p className={styles.tasksInfo}>
              Done - {todos.thisWeek.filter((t) => t.done).length}
            </p>
            <ul className={styles.taskList}>
              {todos.thisWeek
                .filter((t) => t.done)
                .map((t) => (
                  <li key={t.id} className={styles.taskItem}>
                    <span className={styles.taskTitleDone}>{t.title}</span>
                    <button
                      id="doneBtn"
                      onClick={() => toggleDone(t.id, "thisWeek")}
                      className={styles.buttonDone}
                    >
                      ↩
                    </button>
                    <button
                      id="delBtn"
                      onClick={() => deleteTodo(t.id, "thisWeek")}
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
    </div>
  );
}
