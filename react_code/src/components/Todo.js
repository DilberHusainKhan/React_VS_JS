import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  const [showModal, setShowModal] = useState(false);

  function showModalHandler() {
    setShowModal(!showModal);
  }


  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={showModalHandler}>
          Delete
        </button>
      </div>
      {showModal && <Backdrop onClick={showModalHandler} />}
      {showModal && <Modal text='Are you sure?' onClose={showModalHandler} />}
    </div>
  );
}

export default Todo;