import {useState} from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const modifyValues = (values) => {
    setValues(values);
  };

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({target}) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setValues({
      ...values,
      [target.name]: value,
    });
  };

  return [values, handleInputChange, modifyValues, reset];
};
