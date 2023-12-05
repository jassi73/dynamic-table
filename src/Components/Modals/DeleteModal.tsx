
import { Modal } from 'antd';

interface DeleteModalProps {
  isDeleteModal: boolean;
  selectedItem: any;
  handleCancel: () => void;
  deleteUser: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isDeleteModal, handleCancel, deleteUser , selectedItem}) => {

  const handleDeleteUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    deleteUser();
    handleCancel();
  };

  return (
    <Modal
      title=""
      visible={isDeleteModal}
      onCancel={handleCancel}
      footer={null}
      className="addPinModal offerModalShow deletemodal"
    >
      <div className="headingWrn h-auto w-100 p-0 mt-3 text-center deleteSec">
        <h5>Are you sure you want to delete the User {selectedItem?.index+1} ?</h5>
        <div className='btnGroup1'>
          <button onClick={handleCancel} className='mainBtn popupBtn'>Cancel</button>
          <button type='submit' onClick={(e) => handleDeleteUser(e)} className='mainBtn popupBtn deleteBtnn'>Delete</button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
