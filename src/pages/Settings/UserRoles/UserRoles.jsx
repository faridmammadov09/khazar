import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../../../api";
import { setShowCreateRoleModal } from "../../../features/role/roleSlice";
import CreateNewRoleModal from "../../../components/Modal/Role/CreateNewRoleModal";
import EditRoleModal from "../../../components/Modal/Role/EditRoleModal";
import DeleteRoleModal from "../../../components/Modal/Role/DeleteRoleModal";
import UserRolesTable from "../../../components/Table/UserRoles/UserRolesTable";

const UserRoles = () => {
  const dispatch = useDispatch();
  const isShowCreateRoleModal = useSelector(
    (state) => state.role.isShowCreateRoleModal
  );
  const [userRoles, setUserRoles] = useState([]);
  const [isShowEditRoleModal, setIsShowEditRoleModal] = useState(false);
  const [isShowDeleteRoleModal, setIsShowDeleteRoleModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState({});

  const getUserRoles = async () => {
    const { data } = await API.get("userRoles");
    setUserRoles(data);
  };

  const handleCloseCreateRoleModal = () => {
    dispatch(setShowCreateRoleModal(false));
  };

  const handleOpenEditRoleModal = (role) => {
    setIsShowEditRoleModal(true);
    setSelectedRole(role);
  };

  const handleCloseEditRoleModal = () => {
    setIsShowEditRoleModal(false);
  };

  const handleOpenDeleteRoleModal = (role) => {
    setIsShowDeleteRoleModal(true);
    setSelectedRole(role);
  };

  const handleCloseDeleteRoleModal = () => {
    setIsShowDeleteRoleModal(false);
  };

  useEffect(() => {
    getUserRoles();
  }, []);

  return (
    <>
      <CreateNewRoleModal
        open={isShowCreateRoleModal}
        onClose={handleCloseCreateRoleModal}
        getUserRoles={getUserRoles}
      />

      <EditRoleModal
        open={isShowEditRoleModal}
        onClose={handleCloseEditRoleModal}
        getUserRoles={getUserRoles}
        role={selectedRole}
      />

      <DeleteRoleModal
        open={isShowDeleteRoleModal}
        onClose={handleCloseDeleteRoleModal}
        getUserRoles={getUserRoles}
        role={selectedRole}
      />

      <UserRolesTable
        headerData={["Adı", "Statikdir?", "Təsviri"]}
        bodyData={userRoles}
        onOpenEditModal={handleOpenEditRoleModal}
        onOpenDeleteModal={handleOpenDeleteRoleModal}
      />
    </>
  );
};

export default UserRoles;
