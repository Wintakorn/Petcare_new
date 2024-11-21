import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // เพิ่ม useNavigation
import { StackNavigationProp } from '@react-navigation/stack';
import { pets } from '@/assets/PetCarousel';

type PetCarouselNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;
const PetCarousel: React.FC = () => {
    const navigation = useNavigation<PetCarouselNavigationProp>();


    return (
        <View>
            <View style={{ marginHorizontal: 20, padding: 10, marginTop: 8 }}>
                <Text style={{ color: '#6C6C6C', fontSize: 18 }}>Student</Text>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
                nestedScrollEnabled
            >
                {pets.map((pet) => (
                    <TouchableOpacity
                        key={pet.id}
                        style={styles.card}
                        onPress={() => navigation.navigate('PetDetail', { pet })} // เพิ่มการนำทาง
                    >
                        <Image source={pet.image} style={styles.image} />
                        <Text style={styles.name}>{pet.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default PetCarousel;

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: 10,

    },
    card: {
        marginRight: 15,
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        borderColor: '#E0E0E0',
        borderWidth: 1,
    },
    name: {
        marginTop: 5,
        fontSize: 14,
        color: '#333',
    },
});
