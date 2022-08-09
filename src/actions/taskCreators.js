import ACTION_TYPES from './actionTypes';

export const createTask = (values) => ({
  values,
  type: ACTION_TYPES.CREATE_TASK,
});

export const updateTask = (id, values) => ({
  id,
  values,
  type: ACTION_TYPES.UPDATE_TASK,
});

export const delelteTask = (id) => ({
  id,
  type: ACTION_TYPES.DELETE_TASK,
});
