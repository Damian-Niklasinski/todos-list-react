import "./style.css";

const Tasks = ({tasks, hideDoneTask}) => (
    <ul className="list">
        {tasks.map(task => (
            <li
            className={`list__item${task.done && hideDoneTask ? " list__item--hide" : ""}`}
            >
                <button className="list__button list__button--done">
                   <span className={`${task.done ? "list__button--spanVisible" : "list__button--span"}`}>✔</span>
                </button>  
                   <span className={`list__span${task.done ? " list__span--done" : "list__span--remove"}`}>{task.content}</span>
                <button className="list__button list__button--remove">🗑</button>
            </li>
        )
        )}
    </ul>
);

export default Tasks;