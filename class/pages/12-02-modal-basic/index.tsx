import React, { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalBasicPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myPassword, setMypassword] = useState("");

  function onChangeMyPassword(event) {
    setMypassword(event.target.value);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };
  //   const handleOk = () => {
  //     setIsModalVisible(false);
  //   };
  //   const handleCancel = () => {
  //     setIsModalVisible(false);
  //   };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>모달창 열기</Button>
      <Modal
        visible={isModalVisible}
        // onOk={handleOk}
        // onCancel={handleCancel}
        onCancel={closeModal}
      >
        비밀번호 입력: <input type="password" onChange={onChangeMyPassword} />
      </Modal>
    </>
  );
}
