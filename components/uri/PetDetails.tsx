import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import AppointmentCard from './AppointmentCard';

interface Pet {
    id: number;
    name: string;
    image: ImageSourcePropType;
    gender: string;
    age: number;
    breed: string;
    history: string;
}

type RootStackParamList = {
    HomeScreen: undefined;
    PetDetail: { pet: Pet };
};

type PetDetailRouteProp = RouteProp<RootStackParamList, 'PetDetail'>;

const PetDetail: React.FC<{ route: PetDetailRouteProp }> = ({ route }) => {
    const { pet } = route.params;
    const navigation = useNavigation();

    return (
        <>
            {/* Header Section */}
            <View style={styles_PetDetail.header}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles_PetDetail.backButton}>
                        <Text style={styles_PetDetail.backButtonText}>{'<'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles_PetDetail.headerTitle}>
                        <Text style={styles_PetDetail.headerTitleMain}>Pet</Text>
                        <Text style={styles_PetDetail.headerTitleSub}>Care</Text>
                    </Text>
                    <Text style={styles_PetDetail.headerLocation}>📍 Ubonratchathani</Text>
                </View>
            </View>

            {/* Main Content */}
            <ScrollView style={styles_PetDetail.container}>
                <Image source={pet.image} style={styles_PetDetail.petImage} />
                <View style={styles_PetDetail.infoContainer}>
                    <Text style={styles_PetDetail.petName}>{pet.name}</Text>
                    <Text style={styles_PetDetail.location}>📍 Ubonratchathani</Text>

                    <View style={styles_PetDetail.detailsRow}>
                        <View style={styles_PetDetail.detailBox}>
                            <Text style={styles_PetDetail.detailLabel}>เพศ</Text>
                            <Text style={styles_PetDetail.detailValue}>{pet.gender}</Text>
                        </View>
                        <View style={styles_PetDetail.detailBox}>
                            <Text style={styles_PetDetail.detailLabel}>อายุ</Text>
                            <Text style={styles_PetDetail.detailValue}>{pet.age}</Text>
                        </View>
                        <View style={styles_PetDetail.detailBox}>
                            <Text style={styles_PetDetail.detailLabel}>สายพันธุ์</Text>
                            <Text style={styles_PetDetail.detailValue}>{pet.breed}</Text>
                        </View>
                    </View>

                    <Text style={styles_PetDetail.sectionTitle}>ประวัติ</Text>
                    <Text style={styles_PetDetail.sectionContent}>{pet.history}</Text>

                    <View style={styles_PetDetail.appointmentContainer}>
                        <AppointmentCard />
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default PetDetail;
const styles_PetDetail = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
  
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#F8F9FA',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    backButton: {
        backgroundColor: '#73D3D3',
        borderRadius: 20, // ครึ่งหนึ่งของ width และ height
        width: 40, // กำหนดขนาดความกว้าง
        height: 40, // กำหนดขนาดความสูง
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    backButtonText: {
        fontSize: 25, // ลดขนาดฟอนต์ให้เหมาะสมกับปุ่ม
        color: '#fff', // เปลี่ยนสีฟอนต์ตามตัวอย่าง
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitleMain: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00796B',
    },
    headerTitleSub: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    headerLocation: {
        fontSize: 12,
        color: '#757575',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    petImage: {
        width: '100%',
        height: 200,
    },
    infoContainer: {
        padding: 20,
    },
    petName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    location: {
        fontSize: 14,
        color: '#6C6C6C',
        marginBottom: 15,
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
  
  
    },
    detailBox: {
        alignItems: 'center',
        backgroundColor: '#FFF', // ตั้งสีพื้นหลังให้เป็นสีขาว
        borderRadius: 10, // โค้งมนมุม
        padding: 15, // เพิ่มระยะห่างภายในกล่อง
        shadowColor: '#000', // เงาสีดำ
        shadowOffset: { width: 0, height: 2 }, // การเยื้องของเงา
        shadowOpacity: 0.1, // ความโปร่งใสของเงา
        shadowRadius: 4, // ความกระจายของเงา
        elevation: 3, // สำหรับ Android
        marginVertical: 5, // ระยะห่างด้านบนและล่าง
        marginHorizontal: 5, // ระยะห่างด้านซ้ายและขวา
        paddingHorizontal: 30,
    },
    detailLabel: {
        fontSize: 14,
        color: '#6C6C6C',
    },
    detailValue: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    sectionContent: {
        fontSize: 14,
        color: '#6C6C6C',
    },
    appointmentContainer: {
        marginTop: 20,
    },
  });
  
  