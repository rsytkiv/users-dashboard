export const updateObject = (oldObject, updatedProperties) => {
    return {
      ...oldObject,
      ...updatedProperties
    };
  };
  
  export const getErrors = (err) => {
    let error = 'Something went wrong. Please try later';
  
    if (err.response) {
      if (err.response.data.errors) {
        error = err.response.data.errors;
      } else {
        error = err.response.data.message ? err.response.data.message  : err.response.data.error;
      }
    }
  
    return error;
  }