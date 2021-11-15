import { useState } from "react"
import TaskForm from "../task-form/task-form";
import TaskList from "../task-list/task-list";

const Todo = () => {
    const[tasks, setTasks] = useState([]);

    const handleNewTask = (task) => {
        setTasks(t => [task, ...t]);
    }

    const handleFinish = (id) => {
        setTasks(t => t.map(task => task.id !== id ? task : {...task, isDone : true}))
    }

    const handleDelete = (id) => {
        setTasks(t => t.filter(task => task.id !== id));
    }

    return (
        <>

            <h1>Todo</h1>
            <TaskForm onNewTask = {handleNewTask} />
            <TaskList tasks = {tasks} onTaskFinish = {handleFinish} onTaskDelete = {handleDelete} />

        </>
    );

}

export default Todo;