// Home.js
import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleGoToTasks = () => {
    navigate("/about");
  };

  return (
    <div className="home">
      <h2>Welcome to ToDoPy</h2>
      <p>
        A to-do app is a simple, user-friendly digital tool designed to help
        individuals and teams organize tasks and manage their daily activities
        efficiently. Users can create, edit, and prioritize tasks, set deadlines
        or reminders, categorize items, and track their progress, all within an
        intuitive and accessible interface. These apps are essential for
        improving productivity, reducing stress, and ensuring that important
        responsibilities are not forgotten.
      </p>
      <button onClick={handleGoToTasks}>Go to tasks</button>
    </div>
  );
}
