import React, { useState } from "react";
import { Button, Modal, Input } from "react-bootstrap";
import "./ModalAdd.css";

export const ModalAdd = ({ closeModal, onAdd }) => {
  const [student, setStudent] = useState({
    id: "",
    studentCode: "",
    name: "",
    dateOfBirth: "",
    home: "",
  });

  const handleChangeInput = (field, value) => {
    setStudent((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  return (
    <Modal
      show={closeModal}
      onHide={closeModal}
      backdrop="static"
      keyboard={() => closeModal(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Thêm sinh viên</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div class="form-group">
            <input
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Mã sinh viên"
              onChange={(e) => handleChangeInput("id", e.target.value)}
              value={student.id}
            />
          </div>
          <div class="form-group mt-3">
            <input
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Họ tên"
              onChange={(e) => handleChangeInput("name", e.target.value)}
              value={student.name}
            />
          </div>
          <div class="form-group mt-3">
            <input
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ngày sinh"
              onChange={(e) => handleChangeInput("dateOfBirth", e.target.value)}
              value={student.dateOfBirth}
            />
          </div>
          <div class="form-group mt-3">
            <input
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Quê quán"
              onChange={(e) => handleChangeInput("home", e.target.value)}
              value={student.home}
            />
          </div>
          <button
            type="submit"
            class="btn btn-success mt-4"
            onClick={(e) => {
              e.preventDefault();
              onAdd(student);
            }}
          >
            Add Record
          </button>
          <button
            type="submit"
            class="btn btn-success mt-4"
            onClick={() => closeModal(false)}
          >
            Đóng
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAdd;
