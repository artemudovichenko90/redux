import React from 'react';
import { connect } from 'react-redux';
import { updateTask, delelteTask } from '../../../actions/taskCreators';

const TasksList = (props) => {
  const { tasks, updateTaskDispatch, deleteTaskDispatch } = props;
  return (
    <section>
      <ul>
        {
          tasks.map(task => (
            <li key={task.id}>
              <div style={{ border: '2px solid teal' }}>
                <p>
                  id:{task.id}
                  <input
                    type='checkbox'
                    checked={task.idDone}
                    onChange={({ target: { checked } }) => updateTaskDispatch(task.id, { isDone: checked })} />
                  <button onClick={() => deleteTaskDispatch(task.id)}>Delete</button>
                </p>
                <h3>{task.body}</h3>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
const mapStateToProps = ({ todo }) => todo;
const mapDispatchToProps = (dispatch) => ({
  updateTaskDispatch: (id, values) => dispatch(updateTask(id, values)),
  deleteTaskDispatch: (id) => dispatch(delelteTask(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
