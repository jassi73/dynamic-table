import EditModal from "./Modals/EditModal";
import DeleteModal from "./Modals/DeleteModal";
import { useState } from "react";

interface UserDetail {
  name: string;
  age: number;
  city: string;
}

interface TableProps {
  users: UserDetail[];
}

export const Table: React.FC<TableProps> = ({ users }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<{
    index?: number;
    name?: string;
  }>({});
  const [usersData, setUsersData] = useState<UserDetail[]>(users);

  const handleCancel = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const handleOpenEditModal = (name: string, i: number) => {
    setSelectedItem({ index: i, name: name });
    setIsEditModalOpen(true);
  };

  const handleOpenDeleteModal = (name: string, i: number) => {
    setSelectedItem({ index: i, name: name });
    setIsDeleteModalOpen(true);
  };

  const editUserName = (editedName: string) => {
    if (selectedItem?.index !== undefined) {
      const updatedUsersData = [...usersData];
      updatedUsersData[selectedItem.index].name = editedName;
      setUsersData(updatedUsersData);
    }
  };

  const deleteUser = () => {
    const indexToDelete: number | undefined = selectedItem?.index;
  
    if (typeof indexToDelete === 'number' && indexToDelete >= 0 && indexToDelete < usersData.length) {
      const updatedUsersData = usersData.filter((_, i) => i !== indexToDelete);
      setUsersData(updatedUsersData);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr. NO</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            {/* Add other column headers here */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user: UserDetail, i: number) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{user?.name}</td>
              <td>{user?.age}</td>
              <td>{user?.city}</td>
              {/* Display other user details in respective columns */}
              <td>
                <button onClick={() => handleOpenEditModal(user?.name, i)}>
                  Edit
                </button>
                <button onClick={() => handleOpenDeleteModal(user?.name, i)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditModal
        isEditModal={isEditModalOpen}
        handleCancel={handleCancel}
        selectedName={selectedItem?.name}
        editUserName={editUserName}
      />
      <DeleteModal
        isDeleteModal={isDeleteModalOpen}
        handleCancel={handleCancel}
        deleteUser={deleteUser}
        selectedItem={selectedItem}
      />
    </div>
  );
};
