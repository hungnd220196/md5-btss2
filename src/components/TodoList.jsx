import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([
    { text: 'Cras justo odio', completed: true },
    { text: 'Cras justo odio', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <h3 style={{ textAlign: 'center', marginBottom: '40px' }}>
                  Quản lý công việc
                </h3>
                <form
                  className="d-flex justify-content-center align-items-center mb-4"
                  onSubmit={handleAddTask}
                >
                  <div className="form-outline flex-fill">
                    <input
                      type="text"
                      id="form2"
                      className="form-control"
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form2">
                      Thêm công việc
                    </label>
                  </div>
                  <button type="submit" className="btn btn-info ms-2">
                    Thêm
                  </button>
                </form>

                <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active">Tất cả công việc</a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div className="tab-pane fade show active">
                    <ul className="list-group mb-0">
                      {tasks.map((task, index) => (
                        <li
                          key={index}
                          className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
                          style={{ backgroundColor: '#f4f6f7' }}
                        >
                          <div>
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              checked={task.completed}
                              onChange={() => handleToggleTask(index)}
                            />
                            {task.completed ? <s>{task.text}</s> : task.text}
                          </div>
                          <div>
                            <a
                              href="#!"
                              className="text-info"
                              title="Sửa công việc"
                            >
                              <i className="fas fa-pencil-alt me-3"></i>
                            </a>
                            <a
                              href="#!"
                              className="text-danger"
                              title="Xóa công việc"
                              onClick={() => handleDeleteTask(index)}
                            >
                              <i className="fas fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodoList;
