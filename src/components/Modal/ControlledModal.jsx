/* eslint-disable react/prop-types */
import Popup from 'reactjs-popup';

const ControlledModal = ({
  children,
  open,
  closeModal,
  contentStyle,
  closeOnDocumentClick,
  overlayStyle,
  ...rest
}) => {
  return (
    <Popup
      onClose={closeModal}
      open={open}
      modal
      overlayStyle={
        overlayStyle ? overlayStyle : { background: 'rgba(0, 25, 53, 0.20)' }
      }
      lockScroll
      closeOnDocumentClick={
        closeOnDocumentClick !== undefined ? closeOnDocumentClick : true
      }
      contentStyle={contentStyle}
    >
      {children}
    </Popup>
  );
};

export default ControlledModal;
