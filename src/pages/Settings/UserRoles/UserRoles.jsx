import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserRoles } from "../../../api";
import { setShowCreateRoleModal } from "../../../features/role/roleSlice";
import CreateNewRoleModal from "../../../components/Modal/Role/CreateNewRoleModal";
import EditRoleModal from "../../../components/Modal/Role/EditRoleModal";
import DeleteRoleModal from "../../../components/Modal/Role/DeleteRoleModal";
import UserRolesTable from "../../../components/Table/UserRoles/UserRolesTable";

const UserRoles = () => {
  const dispatch = useDispatch();
  const { isShowCreateRoleModal } = useSelector((state) => state.role);
  const [userRoles, setUserRoles] = useState([]);
  const [isShowEditRoleModal, setIsShowEditRoleModal] = useState(false);
  const [isShowDeleteRoleModal, setIsShowDeleteRoleModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState({});

  const getUserRolesData = async () => {
    const data = await getUserRoles();
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
    getUserRolesData();
  }, []);

  return (
    <>
      <CreateNewRoleModal
        open={isShowCreateRoleModal}
        onClose={handleCloseCreateRoleModal}
        getUserRoles={getUserRolesData}
      />

      <EditRoleModal
        open={isShowEditRoleModal}
        onClose={handleCloseEditRoleModal}
        getUserRoles={getUserRolesData}
        role={selectedRole}
      />

      <DeleteRoleModal
        open={isShowDeleteRoleModal}
        onClose={handleCloseDeleteRoleModal}
        getUserRoles={getUserRolesData}
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
