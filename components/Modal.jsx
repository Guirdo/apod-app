/* eslint-disable require-jsdoc */
import useUIStore from '../stores/ui';

/* eslint-disable react/react-in-jsx-scope */
function Modal() {
  const errorMessage = useUIStore((state)=> state.errorMessage);
  const setErrorMessage = useUIStore((state)=> state.setErrorMessage);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal__message">
          {errorMessage}
        </div>

        <button
          className="button button--info"
          onClick={()=> setErrorMessage('')}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default Modal;
