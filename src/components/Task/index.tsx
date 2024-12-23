import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
    setTodo,
    completeTodo,
    deleteTodo,
} from '../../store/slices/taskSlice';
import { useState } from 'react';
// import { TaskState } from '../../store/slices/taskSlice';

// todo : : TaskState | {}

const Task = () => {
    //Fetch todo
    const todo = useSelector((state: RootState) => state.task.todo);
    const dispatch = useDispatch();

    // States to handle inputing a task
    const [taskName, setTaskName] = useState(''); // State for form input
    const [inputError, setInputError] = useState('');
    const [notification, setNotification] = useState(''); // State for notifications
    const [addTask, setAddTask] = useState(false);

    const handleEditingTask = () => {
        if ('completed' in todo && todo.completed) {
            setNotification('Cannot edit a completed task');
            return;
        }
        setAddTask(true);
        if ('taskName' in todo) setTaskName(todo.taskName);
    };

    const handleSaveClick = () => {
        if (taskName.trim() === '') {
            setInputError('Task name cannot be empty.');
            return;
        }
        dispatch(
            setTodo({
                taskName: taskName,
                completed: false,
            })
        );
        setTaskName(''); // Clear input field
        setInputError(''); // Clear notification
        setAddTask(false);
    };

    const handleDeleteClick = () => {
        dispatch(deleteTodo());
        setNotification(''); // Clear notification
    };

    // console.log(taskModification);

    return (
        <>
            <div className="hero-task">
                {/* Task Heading */}
                <div className="hero-task-heading">
                    <p>Task</p>
                    <div></div>
                </div>

                {/* Task Card */}
                {!addTask && Object.keys(todo).length > 0 && (
                    <div className="hero-task-singletask">
                        <p
                            style={{
                                textDecorationLine:
                                    'completed' in todo && todo.completed
                                        ? 'line-through'
                                        : '',
                            }}
                        >
                            {'taskName' in todo && todo.taskName}
                        </p>
                        <div className="hero-task-icons">
                            <i
                                onClick={handleEditingTask}
                                className="fa fa-pencil"
                                aria-hidden="true"
                            ></i>
                            <i
                                onClick={() => {
                                    if ('completed' in todo)
                                        dispatch(completeTodo(!todo.completed));
                                    setNotification('');
                                }}
                                className="fa fa-check-circle"
                                aria-hidden="true"
                            ></i>
                            <i
                                onClick={handleDeleteClick}
                                className="fa fa-trash"
                                aria-hidden="true"
                            ></i>
                        </div>
                    </div>
                )}

                {/* Form Input */}
                {addTask && (
                    <div className="hero-task-inputtask">
                        <input
                            name="taskName"
                            type="text"
                            placeholder="Enter task"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                        />
                        {/* Input Error */}
                        {inputError && (
                            <p style={{ color: 'red', fontSize: '10px' }}>
                                {inputError}
                            </p>
                        )}
                        <div>
                            <button onClick={handleSaveClick}>Save</button>
                        </div>
                    </div>
                )}

                {/* Notification */}
                {notification && (
                    <p
                        style={{
                            color: 'red',
                            background: 'white',
                            padding: '5px',
                            border: '1px solid white',
                            borderRadius: '8px',
                        }}
                    >
                        {notification}
                    </p>
                )}

                {/* Add Task Button */}
                <div
                    onClick={() => {
                        if (Object.keys(todo).length > 0) {
                            setNotification(
                                'Delete the current task before adding a new one.'
                            );
                        } else {
                            setAddTask(true);
                            setNotification(''); // Clear notification
                        }
                    }}
                    className="hero-task-inputheading"
                >
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    <p>Add Task</p>
                </div>
            </div>
        </>
    );
};

export default Task;
