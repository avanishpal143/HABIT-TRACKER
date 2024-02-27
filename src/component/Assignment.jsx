import { useState } from 'react';
import './Assignment.css';

const Assignment = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ what: '', where: '', why: '', when: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.what && newTask.where && newTask.why && newTask.when) {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask({ what: '', where: '', why: '', when: '' });
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <form className="row g-3" onSubmit={handleSubmit}>
      <div>
        <h1 className='habit'>HABIT TRACKER</h1>
      </div>
        <div className="col-6">
          <label htmlFor="whatToDo" className="visually-hidden"> What to do </label>
          <input type="text" className="form-control"  id="whatToDo1" name="what" value={newTask.what} onChange={handleInputChange} placeholder="What to do" required/>
        </div>

        <div className="col-6">
          <label htmlFor="whereToDo" className="visually-hidden"> Where to do </label>
          <input type="text" className="form-control" id="whereToDo" name="where" value={newTask.where} onChange={handleInputChange} placeholder="Where to do" required/>
        </div>

        <div className="col-6">
          <label htmlFor="whyToDo" className="visually-hidden"> Why to do </label>
          <input type="text" className="form-control" id="whyToDo" name="why" value={newTask.why} onChange={handleInputChange} placeholder="Why to do" required/>
        </div>

        <div className="col-6">
          <label htmlFor="whenToDo" className="visually-hidden"> When to do </label>
          <input type="date" className="form-control" id="whenToDo" name="when" value={newTask.when} onChange={handleInputChange} placeholder="When to do" required/>
        </div>

        <div className="col-auto">
          <button type="submit" className="but"> CONFIRM </button>
        </div>
      </form>

      <div className="heading">
        <h1 className='tas'>{tasks.length > 0 ? 'Your Task :' : 'You have No Task :'}</h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>What:  </strong> {task.what}, <strong>Where:  </strong> {task.where},{' '}
              <strong>Why:  </strong> {task.why}, <strong>When:  </strong> {task.when}
              <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Assignment;