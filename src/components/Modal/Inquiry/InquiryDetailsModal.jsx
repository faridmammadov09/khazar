import Button from "../../Button/Button";
import List from "../../List/List";
import Modal from "../Modal";

const formatDate = (date) => new Date(date).toLocaleDateString();

const InquiryDetailsModal = ({ open, onClose, inquiryData }) => {
  const listData = [
    { title: "A.S.A", value: inquiryData.fullName },
    { title: "Korporativ nömrə", value: "Lorem ipsum" },
    { title: "Vəzifə", value: "Lorem ipsum" },
    { title: "Şöbə", value: "Lorem ipsum" },
    { title: "Yaradılma tarixi", value: formatDate(inquiryData.date) },
  ];

  return (
    <Modal
      title="Sorğunun detalları"
      open={open}
      onClose={onClose}
      actionButtons={
        <>
          <Button onClick={onClose}>Bağla</Button>
        </>
      }
    >
      <List data={listData} />
    </Modal>
  );
};

export default InquiryDetailsModal;
