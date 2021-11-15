import style from './task-list.module.css';
import PropTypes from 'prop-types';
import TaskListItem from './task-list-item'


const TaskList = (props) => {
    const {tasks, onTaskDelete, onTaskFinish} = props;

    const tasksJSX = tasks.map(
        t => <TaskListItem key = {t.id} {...t} onFinish = {onTaskFinish} onDelete = {onTaskDelete} />
    );

        return(
            <>

                <article class = {style.listeApp}>
                    <h2>La liste de tâches</h2>
                    <div class = {style.listContent}>
                        {tasksJSX}
                    </div>
                </article>

            </>
        );

}

TaskList.defaultProps = {
    task : [],
    onTaskDelete : () => {},
    onTaskFinish : () => {}
}

TaskList.propTypes = {
    tasks : PropTypes.arrayOf(PropTypes.shape({id : PropTypes.string.isRequired})),
    onTaskDelete : PropTypes.func,
    onTaskFinish : PropTypes.func
}

export default TaskList;