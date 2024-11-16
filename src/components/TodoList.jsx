import React, { useState } from 'react';
import '../styles/todo-list.scss';

function EditableTable() {
  const [rows, setRows] = useState([
    { id: 1, task: '', status: 'Working on it', priority: 'Low', date: '' },
    { id: 2, task: '', status: 'Working on it', priority: 'Low', date: '' },
    { id: 3, task: '', status: 'Working on it', priority: 'Low', date: '' }
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const isDeadlinePassed = (date) => {
    if (!date) return false; 
    const deadlineDate = new Date(date);
    const today = new Date();
    return deadlineDate < today; 
  };

  const getDeadlineStyle = (date) => {
    if (isDeadlinePassed(date)) {
      return { backgroundColor: 'white', color: '#721c24' };
    }
    return {};
  };

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      task: '',
      status: 'Working on it',
      priority: 'Low',
      date: new Date().toISOString().split('T')[0] 
    };
    setRows([...rows, newRow]);
  };

  const statusStyles = {
    'Working on it': { backgroundColor: '#fcac3e', color: 'black' },
    Done: { backgroundColor: '#00c975', color: 'white' },
    Stuck: { backgroundColor: '#e02d49', color: 'white' },
  };

  const priorityStyles = {
    'Low': { backgroundColor: '#579bfc', color: 'black' },
    High: { backgroundColor: '#3d1992', color: 'white' },
    Medium: { backgroundColor: '#5559e0', color: 'white' },
  };

  const getStyle = (type, value) => {
    return type === 'status' ? statusStyles[value] || {} : priorityStyles[value] || {};
  };

  return (
    <div className='table-container'>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th className='check'></th>
            <th>Task</th>
            <th>Status</th>
            <th>Priority</th>
            <th className='th-due-date'>Due Date</th>
            <th className='th-notes'>Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id}>
              <td>
                <input type="checkbox" value={row.id} />
              </td>
              <td className='td-task'>
                <input
                  className='task'
                  type="text"
                  value={row.task}
                  onChange={(e) => handleInputChange(index, 'task', e.target.value)}
                  placeholder='Your task'
                />
              </td>
              <td className='status' style={getStyle('status', row.status)}>
                <select
                  className='td-status'
                  value={row.status}
                  onChange={(e) => handleInputChange(index, 'status', e.target.value)}
                >
                  <option value="Working on it">Working on it</option>
                  <option value="Done">Done</option>
                  <option value="Stuck">Stuck</option>
                </select>
              </td>

              <td className='priority' style={getStyle('priority', row.priority)}>
                <select
                  className='td-priority'
                  value={row.priority}
                  onChange={(e) => handleInputChange(index, 'priority', e.target.value)}
                >
                  <option value="Low">Low</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                </select>
              </td>

              <td className='td-date' style={getDeadlineStyle(row.date)}>
                <div className='icon-duedate'>
                  {row.status === "Done" ? (
                    <span
                      className="fa fa-check-circle"
                      style={{ color: '#00c975', fontSize: '20px' }}
                    ></span>
                  ) : row.date && isDeadlinePassed(row.date) ? (
                    <span
                      className="fa fa-exclamation-circle"
                      style={{ color: '#e02d49', fontSize: '20px' }}
                    ></span>
                  ) : row.date ? (
                    <span
                      className="fa fa-clock"
                      style={{ color: '#fcac3e', fontSize: '20px' }}
                    ></span>
                  ) : null}
                </div>
                <input
                  className='input-date'
                  type="date"
                  value={row.date}
                  onChange={(e) => handleInputChange(index, 'date', e.target.value)}
                />
              </td>
              <td className='notes'>
                <textarea className='text-area' name="" id="" cols="50" rows="3"></textarea>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={addRow} style={{ marginTop: '10px' }}>
        Add task
      </button>
    </div>
  );
}

export default EditableTable;
