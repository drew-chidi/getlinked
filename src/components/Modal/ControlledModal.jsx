/* eslint-disable react/prop-types */
import Popup from 'reactjs-popup';

const ControlledModal = ({ children, open, closeModal, ...rest }) => {
  return (
    <Popup
      onClose={closeModal}
      open={open}
      modal
      overlayStyle={{ background: 'rgba(21, 14, 40, 0.93) ' }}
      closeOnDocumentClick={false}
    >
      {children}
    </Popup>
  );
};

export default ControlledModal;
