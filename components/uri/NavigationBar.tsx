import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavigationBar = () => {
  const tabs = ['หน้าหลัก', 'บริการ', 'การแจ้งเตือน', 'โปรไฟล์'];

  return (
    <View style={styles.navBar}>
      {tabs.map((tab, index) => (
        <Text key={index} style={styles.tab}>
          {tab}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#FFF',
    marginTop: 15
  },
  tab: {
    fontSize: 14,
    color: '#000',
  },
});

export default NavigationBar;
