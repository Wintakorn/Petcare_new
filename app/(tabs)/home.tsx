import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '@/components/uri/Header';
import Menu from '@/components/uri/Menu';
import AppointmentCard from '@/components/uri/AppointmentCard';
// import NavigationBar from '@/components/uri/NavigationBar';
import News from '@/components/uri/News';
import PetCarousel from '@/components/uri/PetCarousel';
import Shop from '@/components/uri/Shop'; // Import Shop Component

const HomeScreen = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <ScrollView nestedScrollEnabled>
      <View style={styles.container}>
        <Header />
        <Menu onMenuSelect={setActiveSection} />
        {activeSection === 'home' && (
          <>
            <PetCarousel />
            <AppointmentCard />
          </>
        )}
        {activeSection === 'news' && <News />}
        {activeSection === 'shop' && <Shop />}
        {/* <NavigationBar /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF5F5',
  },
});

export default HomeScreen;
