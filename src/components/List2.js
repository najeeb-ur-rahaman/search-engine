import React, { useState } from "react";
import ReactDOM from "react-dom";

import {
  Button,
  ButtonDropdown,
  ButtonGroup,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";



function List2({profile}) {
  const [dropdownOpen, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const toggleModal = () => setModalOpen(!modalOpen);
  const toggleModal2 = () => setModalOpen2(!modalOpen2);

  return (
    <div className="App">
    
      <ButtonGroup>
        <ButtonDropdown className="py-0" isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>{profile.username}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={toggleModal}>Profile</DropdownItem>
            <Modal isOpen={modalOpen} toggle={toggleModal}>
              <ModalHeader>User Profile</ModalHeader>
              <ModalBody>
              <p> Email  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{profile.email}</p>
              <p>  Institute  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{profile.institute}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="light" onClick={toggleModal}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
            {/* <DropdownItem onClick={toggleModal2}>Show Modal 2</DropdownItem>
            <Modal isOpen={modalOpen2} toggle={toggleModal2}>
              <ModalHeader>Header2</ModalHeader>
              <ModalBody>
                
                  <p>hello</p>
                  <Link to="/logout">Logout</Link>
              </ModalBody>
              <ModalFooter>
                <Button color="light" onClick={toggleModal2}>
                  Close
                </Button>
              </ModalFooter>
            </Modal> */}
          </DropdownMenu>
        </ButtonDropdown>
      </ButtonGroup>
    </div>
  );
}

export default List2;

