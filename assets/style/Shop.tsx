import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#EFF5F5',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    productCard: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        width: '47%',
        padding: 10,
        marginBottom: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#E0E0E0', // เพิ่มเส้นขอบ
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 10,
        resizeMode: 'cover',
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        textAlign: 'center',
    },
    productPrice: {
        fontSize: 14,
        color: '#00C6CF',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#EFF5F5',
        borderRadius: 15,
        padding: 5,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#00C6CF',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        color: '#00C6CF',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
