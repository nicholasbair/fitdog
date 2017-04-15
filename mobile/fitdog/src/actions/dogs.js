import {
  FETCH_DOGS_REQUEST,
  FETCH_DOGS_SUCCESS,
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS,
  ADD_DOG_REQUEST,
  ADD_DOG_SUCCESS,
  UPDATE_DOG_REQUEST,
  UPDATE_DOG_SUCCESS,
  DELETE_DOG_REQUEST,
  DELETE_DOG_SUCCESS
} from './types';

// Find a specific dog

function fetchDogRequest() {
  return {
    type: FETCH_DOG_REQUEST
  };
}

function fetchDogSuccess() {
  return {
    type: FETCH_DOG_SUCCESS
  };
}

// export function fetchDog(dogId, formType) {
//   return dispatch => {
//     dispatch(fetchDogRequest());
//     return axios.get(`${ROOT_URL}/api/dog/findById/${dogId}`).then(res => {
//       dispatch(fetchDogSuccess());
//       dispatch(openDogModal({
//         formData: res.data[0],
//         formType: formType
//       }));
//     });
//   };
// }

// Add a dog

function postDogRequest() {
  return {
    type: POST_DOG_REQUEST
  };
}

function postDogSuccess() {
  return {
    type: POST_DOG_SUCCESS
  };
}

// export function postDog(formData) {
//   return dispatch => {
//     dispatch(postDogRequest());
//     return axios.post(`${ROOT_URL}/api/dog/add`, formData).then(res => {
//       dispatch(postDogSuccess());
//       dispatch(fetchDogs());
//     });
//   };
// }

// Update a dog

function updateDogRequest() {
  return {
    type: UPDATE_DOG_REQUEST
  };
}

function updateDogSuccess() {
  return {
    type: UPDATE_DOG_SUCCESS
  };
}

// export function updateDog(formData, dogId) {
//   return dispatch => {
//     dispatch(updateDogRequest());
//     return axios.put(`${ROOT_URL}/api/dog/update/${dogId}`, formData).then(res => {
//       dispatch(updateDogSuccess());
//       dispatch(fetchDogs());
//     });
//   }
// }

// Delete a dog

function deleteDogRequest() {
  return {
    type: DELETE_DOG_REQUEST
  };
}

function deleteDogSuccess() {
  return {
    type: DELETE_DOG_SUCCESS
  };
}

// export function deleteDog(dogId) {
//   return dispatch => {
//     dispatch(deleteDogRequest());
//     return axios.delete(`${ROOT_URL}/api/dog/delete/${dogId}`).then(res => {
//       dispatch(deleteDogSuccess());
//       dispatch(closeDogModal());
//       dispatch(fetchDogs());
//     });
//   };
// }

// Find all dogs

function fetchDogsRequest() {
  return {
    type: FETCH_DOGS_REQUEST
  };
}

function fetchDogsSuccess(dogs) {
  return {
    type: FETCH_DOGS_SUCCESS,
    payload: dogs
  };
}

// export function fetchDogs() {
//   return dispatch => {
//     dispatch(fetchDogsRequest());
//     return axios.get(`${ROOT_URL}/api/dog/findAll`).then(res => {
//       dispatch(fetchDogsSuccess(res.data));
//     });
//   };
// }
