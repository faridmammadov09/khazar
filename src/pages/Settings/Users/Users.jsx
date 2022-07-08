import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../../../api";
import { setShowCreateUserModal } from "../../../features/user/userSlice";
import SearchPanelUser from "../../../components/SearchPanel/SearchPanelUser";
import CreateNewUserModal from "../../../components/Modal/User/CreateNewUserModal";
import EditUserModal from "../../../components/Modal/User/EditUserModal";
import UpdateUserPasswordModal from "../../../components/Modal/User/UpdateUserPasswordModal";
import UsersTable from "../../../components/Table/UsersTable/UsersTable";

const TABLE_HEADER_DATA = [
  "A.S.A.",
  "İstifadəçi adı",
  "Elektron poçt",
  "Vəzifə",
  "Əlaqə nömrəsi",
];

const Users = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowUpdateModal, setIsShowUpdateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const isShowCreateModal = useSelector(
    (state) => state.user.isShowCreateUserModal
  );
  const isShowSearchUserPanel = useSelector(
    (state) => state.user.isShowSearchUserPanel
  );

  const handleCloseCreateModal = () => {
    dispatch(setShowCreateUserModal(false));
  };

  const getUsers = async () => {
    const { data } = await API.get("users");
    setUsers(data);
  };

  const handleSearchUser = () => {
    console.log("Search user");
  };

  const handleOpenEditModal = (user) => {
    setIsShowEditModal(true);
    setSelectedUser(user);
  };

  const handleCloseEditModal = () => {
    setIsShowEditModal(false);
  };

  const handleOpenUpdateModal = (user) => {
    setIsShowUpdateModal(true);
    setSelectedUser(user);
  };

  const handleCloseUpdateModal = () => {
    setIsShowUpdateModal(false);
  };

  const handleDeactivateUser = (item) => {
    API.patch(`users/${item.id}`, {
      isActive: !item.isActive,
    }).then(() => {
      getUsers();
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <CreateNewUserModal
        open={isShowCreateModal}
        onClose={handleCloseCreateModal}
        getUsers={getUsers}
      />

      <EditUserModal
        open={isShowEditModal}
        onClose={handleCloseEditModal}
        getUsers={getUsers}
        user={selectedUser}
      />

      <UpdateUserPasswordModal
        open={isShowUpdateModal}
        onClose={handleCloseUpdateModal}
        user={selectedUser}
      />

      {isShowSearchUserPanel && (
        <SearchPanelUser onSearchUser={handleSearchUser} />
      )}

      <UsersTable
        headerData={TABLE_HEADER_DATA}
        bodyData={users}
        onOpenEditModal={handleOpenEditModal}
        onOpenUpdateModal={handleOpenUpdateModal}
        onDeactivateUser={handleDeactivateUser}
      />
    </>
  );
};

export default Users;
