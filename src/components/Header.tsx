import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Header';  // Impor gaya yang telah didefinisikan

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.a}>Home</Text>
      <Text style={styles.a}>About</Text>
      <Text style={styles.a}>Contact</Text>
    </View>
  );
};

export default Header;
