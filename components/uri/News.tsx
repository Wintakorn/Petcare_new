import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Modal,
    Pressable,
    StyleSheet
} from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { posts } from '@/assets/posts';



interface Post {
    id: string;
    user: string;
    userIcon: string;
    date: string;
    text: string;
    image: string;
    location: {
        latitude: number;
        longitude: number;
    };
}

const News: React.FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
    const [sharedPosts, setSharedPosts] = useState<Record<string, boolean>>({});

    const handleImagePress = (image: string) => {
        setSelectedImage(image);
        setModalVisible(true);
    };

    const handleLikePress = (postId: string) => {
        setLikedPosts((prev) => ({
            ...prev,
            [postId]: !prev[postId],
        }));
    };

    const handleSharePress = (postId: string) => {
        setSharedPosts((prev) => ({
            ...prev,
            [postId]: true,
        }));
        alert('Shared successfully!');
    };

    return (
        <ScrollView>
            <View style={styles_News.container}>
                {/* Header */}
                <View style={styles_News.header}>
                    <Text style={styles_News.headerText}>ข้อมูลข่าวสารของชุมชน</Text>
                </View>

                {/* New Post Box */}
                <View style={styles_News.postBox}>
                    {/* Input Section */}
                    <View style={styles_News.inputSection}>
                        {/* Profile Image */}
                        <Image
                            source={{ uri: 'https://preview.redd.it/sobbing-ibuki-by-v0-11ejad5kvvqa1.jpg?width=1080&crop=smart&auto=webp&s=9fbbdbde6ad41f9858d6d7ba6275801f29d1223f' }}
                            style={styles_News.profileImage}
                        />
                        {/* Text Input */}
                        <TextInput
                            style={styles_News.input}
                            placeholder="คุณคิดอะไรอยู่?"
                            placeholderTextColor="#A9A9A9"
                            multiline
                        />
                    </View>

                    {/* Buttons Section */}
                    <View style={styles_News.postActions}>
                        {/* Add Media Button */}
                        <TouchableOpacity style={styles_News.addMediaButton}>
                            <FontAwesome name="image" size={20} color="#007BFF" />
                            <Text style={styles_News.addMediaText}>Add Media</Text>
                        </TouchableOpacity>
                        {/* Post Button */}
                        <TouchableOpacity style={styles_News.postButton}>
                            <Text style={styles_News.postButtonText}>Post</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                {/* Posts List */}
                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }: { item: Post }) => (
                        <View style={styles_News.postContainer}>
                            <View style={styles_News.postHeader}>
                                <View style={styles_News.userInfo}>
                                    <Image source={{ uri: item.userIcon }} style={styles_News.userIcon} />
                                    <Text style={styles_News.userName}>{item.user}</Text>
                                </View>
                                <Text style={styles_News.postDate}>{item.date}</Text>
                            </View>
                            <View style={styles_News.separator} />
                            <Text style={styles_News.postText}>{item.text}</Text>
                            <TouchableOpacity onPress={() => handleImagePress(item.image)}>
                                <Image source={{ uri: item.image }} style={styles_News.postImage} />
                            </TouchableOpacity>

                            <MapView
                                style={styles_News.map}
                                initialRegion={{
                                    latitude: item.location.latitude,
                                    longitude: item.location.longitude,
                                    latitudeDelta: 0.01,
                                    longitudeDelta: 0.01,
                                }}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: item.location.latitude,
                                        longitude: item.location.longitude,
                                    }}
                                />
                            </MapView>
                            <View style={styles_News.postFooter}>
                                {/* Like Button */}
                                <TouchableOpacity
                                    style={styles_News.footerAction}
                                    onPress={() => handleLikePress(item.id)}
                                >
                                    <MaterialIcons
                                        name="thumb-up"
                                        size={20}
                                        color={likedPosts[item.id] ? '#007BFF' : '#6C6C6C'}
                                    />
                                    <Text
                                        style={[
                                            styles_News.footerActionText,
                                            likedPosts[item.id] && { color: '#007BFF' },
                                        ]}
                                    >
                                        Like
                                    </Text>
                                </TouchableOpacity>

                                {/* Share Button */}
                                <TouchableOpacity
                                    style={styles_News.footerAction}
                                    onPress={() => handleSharePress(item.id)}
                                >
                                    <MaterialIcons name="share" size={20} color="#6C6C6C" />
                                    <Text style={styles_News.footerActionText}>Share</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />

                {/* Modal สำหรับแสดงภาพขยาย */}
                <Modal
                    visible={modalVisible}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <Pressable style={styles_News.modalOverlay} onPress={() => setModalVisible(false)}>
                        <View style={styles_News.modalContent}>
                            <Image source={{ uri: selectedImage }} style={styles_News.modalImage} />
                        </View>
                    </Pressable>
                </Modal>
            </View>
        </ScrollView>
    );
};

export default News;
const styles_News = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#EFF5F5',
    },
    header: {
        marginBottom: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },

    newPostHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    postContainer: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        shadowColor: 'red',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 2,
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    postDate: {
        fontSize: 12,
        color: '#6C6C6C',
    },
    separator: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginVertical: 10,
    },
    postText: {
        marginVertical: 10,
        fontSize: 14,
        color: '#333',
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginVertical: 10,
        borderColor: '#E0E0E0',
        borderWidth: 1,

    },
    map: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginVertical: 10,
    },
    postFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    footerAction: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerActionText: {
        marginLeft: 5,
        fontSize: 14,
        color: '#6C6C6C',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10,
    },
    modalImage: {
        width: 350,
        height: 350,
        borderRadius: 10,
    },
    postBox: {
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        marginBottom: 20,
    },
    inputSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#F8F9FA',
        fontSize: 14,
    },
    postActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addMediaButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F4F8',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    addMediaText: {
        marginLeft: 5,
        color: '#007BFF',
        fontSize: 14,
    },
    postButton: {
        backgroundColor: '#00C6CF',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 10,
    },
    postButtonText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
    }
});

