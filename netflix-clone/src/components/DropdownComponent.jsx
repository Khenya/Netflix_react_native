import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Icon from "react-native-vector-icons/AntDesign";
import { styles } from '../config/theme/app-theme';

const DropdownComponent = ({ options, onSelect }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    toggleModal();
  };

  return (
    <View>
      <TouchableOpacity style={styles.containerButtonDropDown} onPress={toggleModal}>
        <Text style={styles.buttonTextDropDown}>{selectedOption ? selectedOption.label : 'Season 1'}</Text>
        <Icon name="down" size={15} color="red" />
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.option} onPress={() => handleSelect(item)}>
                <Text style={styles.optionText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};
export default DropdownComponent;
