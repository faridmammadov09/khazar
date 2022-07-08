import Button from "../../Button/Button";
import List from "../../List/List";
import Modal from "../Modal";

const InquiryDetailsModal = ({ open, onClose, inquiryData }) => {
  const listData = [
    { title: "A.S.A", value: inquiryData.fullName },
    { title: "Korporativ nömrə", value: "A" },
    { title: "Vəzifə", value: "A" },
    { title: "Şöbə", value: "A" },
    { title: "Yaradılma tarixi", value: inquiryData.date },
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
