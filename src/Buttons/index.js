import React from "react";
import "./style.css";

const Buttons = ({ hideDoneTask, tasks }) => (
    <div className="section__buttons">
        {tasks.length > 0 && (
            <React.Fragment>
                <button className="section__buttons">
                    {hideDoneTask ? "Pokaż ukończone" : "Ukryj ukończone"}
                </button>
                <button
                    className="section__buttons"
                    disabled={tasks.every(task => task.done)}
                >
                    Ukończ wszystkie
                </button>
            </React.Fragment>
        )}
    </div>
);

export default Buttons;

