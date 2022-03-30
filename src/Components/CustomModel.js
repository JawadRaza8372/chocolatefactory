import { StyleSheet, Text, View, Modal } from "react-native";
import React from "react";

const CustomModel = ({ show, toggleModal, children }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={show}
      onRequestClose={toggleModal}
    >
      {children}
    </Modal>
  );
};

export default CustomModel;

const styles = StyleSheet.create({});
