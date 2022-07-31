import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api";
import EmployeeTable from "../../components/Table/EmployeeTable/EmployeeTable";
import CreateNewDocumentModal from "../../components/Modal/Employee/Documents/CreateNewDocumentModal";
import EditDocumentModal from "../../components/Modal/Employee/Documents/EditDocumentModal";
import DeleteDocumentModal from "../../components/Modal/Employee/Documents/DeleteDocumentModal";

const EmployeeDocuments = () => {
  const { employeeId } = useParams();
  const [documents, setDocuments] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState({});

  const getDocuments = async () => {
    const { data } = await API.get(`documents?employeeId=${employeeId}`);
    setDocuments(data);
  };

  useEffect(() => {
    getDocuments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
  };

  const handleOpenEditModal = (document) => {
    setOpenEditModal(true);
    setSelectedDocument(document);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const handleOpenDeleteModal = (document) => {
    setOpenDeleteModal(true);
    setSelectedDocument(document);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  return (
    <>
      <CreateNewDocumentModal
        open={openCreateModal}
        onClose={handleCloseCreateModal}
        getDocuments={getDocuments}
      />

      <EditDocumentModal
        open={openEditModal}
        onClose={handleCloseEditModal}
        getDocuments={getDocuments}
        document={selectedDocument}
      />

      <DeleteDocumentModal
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        getDocuments={getDocuments}
        document={selectedDocument}
      />

      <EmployeeTable
        title="Sənədlər"
        headerData={["Tipi", "Adı", "Təsviri"]}
        bodyData={documents}
        onClickAdd={handleOpenCreateModal}
        onOpenEditModal={handleOpenEditModal}
        onDeleteModal={handleOpenDeleteModal}
      />
    </>
  );
};

export default EmployeeDocuments;
