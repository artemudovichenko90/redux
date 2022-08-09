import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { createTask } from '../../../actions/taskCreators';
const TaskForm = (props) => {
  const { createTaskDispatch } = props;
  const handlerSubmit = (values, formikBag) => {
    createTaskDispatch(values);
    formikBag.resetForm();
  }
  return (
    <div>
      <Formik initialValues={{ body: '', isDone: false }} onSubmit={handlerSubmit}>
        <Form>
          <Field name='body' />
          <input type='submit' value='Add task' />
        </Form>
      </Formik>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createTaskDispatch: (values) => dispatch(createTask(values))
})

export default connect(null, mapDispatchToProps)(TaskForm);
