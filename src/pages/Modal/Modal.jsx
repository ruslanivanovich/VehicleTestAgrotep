import React from "react";
import {
  ModalWrapper,
  Modal,
  ModalContent,
  CloseIcon,
  Title
} from "./Modal.styled";
import { Button } from "../Vehicles/VehiclesStyled";

export default function ModalWindow({
  closeModal,
  children,
  prevSvg,
  nextSvg,
  title,
  prevImg,
  nextImg,

}) {
  return (
    <ModalWrapper
      onClick={closeModal}
    >
      {prevImg && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevImg();
          }}
        >
          {prevSvg}
        </button>
      )}

      <Modal onClick={(e) => e.stopPropagation()}>
        {closeModal && (
          <CloseIcon
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          />
        )}

        <ModalContent>
          <Title>{title}</Title>
          {children}

        </ModalContent>
        {title && (
          <div style={{display:'flex',justifyContent:"center",gap:'20px',marginTop:'20px'}}>
            <Button variant='delete' onClick={closeModal}>Yes</Button>
            <Button variant='primary' onClick={closeModal}>No</Button>
          </div>
        )}
      </Modal>

      {nextImg && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextImg();
          }}
        >
          {nextSvg}
        </button>
      )}
    </ModalWrapper>
  );
}