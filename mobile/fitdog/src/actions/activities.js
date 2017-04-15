import {
  OPEN_ACTIVITY_MODAL,
  CLOSE_ACTIVITY_MODAL,
  POST_ACTIVITY_REQUEST,
  POST_ACTIVITY_SUCCESS,
  UPDATE_ACTIVITY_REQUEST,
  UPDATE_ACTIVITY_SUCCESS,
  FETCH_HISTORY_ITEM_REQUEST,
  FETCH_HISTORY_ITEM_SUCCESS,
  DELETE_HISTORY_ITEM_REQUEST,
  DELETE_HISTORY_ITEM_SUCCESS,
  FETCH_HISTORY_REQUEST,
  FETCH_HISTORY_SUCCESS,
  FETCH_ACTIVITY_TYPES_REQUEST,
  FETCH_ACTIVITY_TYPES_SUCCESS
} from './types';

function deleteHistoryItemRequest() {
  return {
    type: DELETE_HISTORY_ITEM_REQUEST
  };
}

function deleteHistoryItemSuccess() {
  return {
    type: DELETE_HISTORY_ITEM_SUCCESS
  };
}

// export function deleteHistoryItem(itemId) {
//   return dispatch => {
//     dispatch(deleteHistoryItemRequest());
//     axios.delete(`${ROOT_URL}/api/activity/delete/${itemId}`).then(res => {
//       dispatch(deleteHistoryItemSuccess());
//       dispatch(closeActivityModal());
//       dispatch(fetchHistory());
//     });
//   };
// }

function fetchHistoryItemRequest() {
  return {
    type: FETCH_HISTORY_ITEM_REQUEST
  };
}

function fetchHistoryItemSuccess() {
  return {
    type: FETCH_HISTORY_ITEM_SUCCESS
  };
}

// export function fetchHistoryItem(itemId, formType) {
//   return dispatch => {
//     dispatch(fetchHistoryItemRequest());
//     return axios.get(`${ROOT_URL}/api/activity/findById/${itemId}`).then(res => {
//       dispatch(fetchHistoryItemSuccess());
//       dispatch(openActivityModal({
//         activityType: res.data[0].type,
//         formData: res.data[0],
//         formType: formType
//       }));
//     });
//   };
// }

function postActivityRequest() {
  return {
    type: POST_ACTIVITY_REQUEST
  };
}

function postActivitySuccess() {
  return {
    type: POST_ACTIVITY_SUCCESS
  };
}

// export function postActivity(formData) {
//   return dispatch => {
//     dispatch(postActivityRequest());
//     return axios.post(`${ROOT_URL}/api/activity/add`, formData).then(res => {
//       dispatch(postActivitySuccess());
//       dispatch(fetchHistory());
//     });
//   };
// }

function updateActivityRequest() {
  return {
    type: UPDATE_ACTIVITY_REQUEST
  };
}

function updateActivitySuccess() {
  return {
    type: UPDATE_ACTIVITY_SUCCESS
  };
}

// export function updateActivity(formData, itemId) {
//   return dispatch => {
//     dispatch(updateActivityRequest());
//     return axios.put(`${ROOT_URL}/api/activity/update/${itemId}`, formData).then(res => {
//       dispatch(updateActivitySuccess());
//       dispatch(fetchHistory());
//     });
//   };
// }

function fetchHistoryRequest() {
  return {
    type: FETCH_HISTORY_REQUEST
  };
}

function fetchHistorySuccess(history) {
  return {
    type: FETCH_HISTORY_SUCCESS,
    payload: history
  };
}

// export function fetchHistory() {
//   return dispatch => {
//     dispatch(fetchHistoryRequest());
//     return axios.get(`${ROOT_URL}/api/activity/findAll`).then(res => {
//       dispatch(fetchHistorySuccess(res.data));
//     });
//   };
// }

function fetchActivityTypesRequest() {
  return {
    type: FETCH_ACTIVITY_TYPES_REQUEST
  };
}

function fetchActivityTypesSuccess(activityTypes) {
  return {
    type: FETCH_ACTIVITY_TYPES_SUCCESS,
    payload: activityTypes
  };
}

// export function fetchActivityTypes() {
//   return dispatch => {
//     dispatch(fetchActivityTypesRequest());
//     return axios.get(`${ROOT_URL}/api/activityType/findAll`).then(res => {
//       dispatch(fetchActivityTypesSuccess(res.data));
//     });
//   };
// }
