import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet
} from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import { RootStackParamList } from '@/app/_layout';

type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

interface ProductDetailProps {
  route: ProductDetailRouteProp;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = () => {
    Alert.alert('Purchase Confirmed', `You have bought ${quantity} ${product.name}.`);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#00C6CF" />
      </TouchableOpacity>

      {/* Product Image */}
      <Image source={{ uri: product.image }} style={styles.image} />

      {/* Product Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>{product.price} บาท</Text>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>4.9</Text>
        </View>
        <Text style={styles.productCategory}>{product.category}</Text>

        {/* Quantity Selector */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Buy Now Button */}
      <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
        <Text style={styles.buyButtonText}>Buy Now!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF5F5',
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00C6CF',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#6C6C6C',
  },
  productCategory: {
    fontSize: 14,
    color: '#6C6C6C',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    backgroundColor: '#EFF5F5',
    padding: 10,
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    color: '#00C6CF',
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 20,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#00C6CF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});