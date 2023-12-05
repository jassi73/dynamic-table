import { Modal } from "antd";
import { useState, useEffect } from "react";

interface EditModalProps {
  isEditModal: boolean;
  handleCancel: () => void;
  selectedName: string | undefined;
  editUserName: (editedName: string) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  isEditModal,
  handleCancel,
  selectedName,
  editUserName,
}) => {
  const [editName, setEditName] = useState<string | undefined>(selectedName);

  useEffect(() => {
    setEditName(selectedName);
    return () => {};
  }, [selectedName]);

  const handleEditName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editName) {
      editUserName(editName);
      handleCancel();
    }
  };

  return (
    <Modal
      title="Edit Name"
      visible={isEditModal}
      onCancel={handleCancel}
      footer={null}
      className="addPinModal offerModalShow"
    >
      <div className="modalEdit h-auto w-100 p-0 mt-3">
        <form onSubmit={(e) => handleEditName(e)}>
          <input
            type="text"
            className="form-control"
            id="editName"
            placeholder="Edit Name"
            name="editName"
            value={editName || ""}
            onChange={(e) => setEditName(e.target.value)}
          />
          <div className="btnGroup">
            <button type="button" className="dangerBtn" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="mainBtn popupBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditModal;
