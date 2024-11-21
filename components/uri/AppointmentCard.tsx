import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { pets } from '@/assets/PetCarousel';
const AppointmentCard = () => {
  return (
    <View style={{ marginTop: 25, }}>
      {/* หัวข้อ */}
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>การนัดหมาย</Text>
        <Text style={styles.headerText}>ดูทั้งหมด</Text>
      </View> */}

      {/* Scrollable Card */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {pets.map((pet) => (
          <View key={pet.id} style={styles.cardContainer}>
            <View style={styles.contentContainer}>
              <View>
                <Text style={styles.title}>นัดหมายการฉีดวัคซีน</Text>
                <View style={{
                  flexDirection: 'row',
                  marginBottom: 10,
                  paddingHorizontal: 2,
                }}>
                <Text style={styles.date}>{pet.days}  </Text>
                <Text style={styles.date}>{pet.month} </Text>
                <Text style={styles.date}>{pet.year}</Text>
                </View>
              </View>
              {/* <MaterialIcons
                name="vaccines"
                size={48}
                color="#fff"
                style={styles.icon}
              /> */}
            </View>

            {/* รูปสัตว์เลี้ยง */}
            <View style={styles.petContainer}>
              <Image source={pet.image} style={styles.petImage} />
              <Text style={styles.petName}>{pet.name}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6C6C6C',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    marginBottom: 20
  },
  cardContainer: {
    backgroundColor: '#6ED7CF',
    padding: 16,
    marginRight: 16,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4, // สำหรับ Android
    shadowColor: '#000', // สำหรับ iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    width: 280, // กำหนดความกว้างการ์ด
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: '#fff',
  },
  icon: {
    position: 'absolute',
    right: -60,
    top: -10,
    opacity: 0.6,
  },
  petContainer: {
    alignItems: 'center',
    marginLeft: 16,
  },
  petImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginBottom: 8,
  },
  petName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default AppointmentCard;
