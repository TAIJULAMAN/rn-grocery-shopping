import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Mock Product Data (Reusing structure from HomeRecommended)
type Product = {
    id: string;
    name: string;
    subtitle: string;
    price: number;
    icon: keyof typeof Ionicons.glyphMap;
};

const PRODUCTS: Product[] = [
    { id: '1', name: 'Fresh Lemon', subtitle: 'Organic', price: 12, icon: 'image-outline' },
    { id: '2', name: 'Green Tea', subtitle: '2 Packages', price: 6, icon: 'leaf-outline' },
    { id: '3', name: 'Fresh Lime', subtitle: 'Organic', price: 10, icon: 'image-outline' },
    { id: '4', name: 'Fresh Lemon', subtitle: 'Organic', price: 12, icon: 'image-outline' },
    { id: '5', name: 'Green Tea', subtitle: '2 Packages', price: 6, icon: 'leaf-outline' },
    { id: '6', name: 'Fresh Lime', subtitle: 'Organic', price: 10, icon: 'image-outline' },
    { id: '7', name: 'Fresh Lemon', subtitle: 'Organic', price: 12, icon: 'image-outline' },
    { id: '8', name: 'Green Tea', subtitle: '2 Packages', price: 6, icon: 'leaf-outline' },
    { id: '9', name: 'Fresh Lime', subtitle: 'Organic', price: 10, icon: 'image-outline' },
    { id: '10', name: 'Fresh Lemon', subtitle: 'Organic', price: 12, icon: 'image-outline' },
    { id: '11', name: 'Green Tea', subtitle: '2 Packages', price: 6, icon: 'leaf-outline' },
    { id: '12', name: 'Fresh Lime', subtitle: 'Organic', price: 10, icon: 'image-outline' },
];

export default function CategoryDetails() {
    const { id, name } = useLocalSearchParams();
    const router = useRouter();

    const renderProduct = ({ item }: { item: Product }) => (
        <View style={styles.productCard}>
            <View style={styles.productImageContainer}>
                <Ionicons name={item.icon} size={40} color="#D1D5DB" />
                <TouchableOpacity style={styles.wishlistButton}>
                    <Ionicons name="heart-outline" size={18} color="#FFC107" />
                </TouchableOpacity>
            </View>
            <Text style={styles.productTitle}>{item.name}</Text>
            <Text style={styles.productSubtitle}>{item.subtitle}</Text>
            <View style={styles.productFooter}>
                <Text style={styles.productPrice}><Text style={styles.priceBold}>${item.price}</Text></Text>
                <TouchableOpacity style={styles.addButton}>
                    <Ionicons name="add" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <SafeAreaView edges={['top']} style={styles.headerContainer}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="chevron-back" size={24} color="#1E222B" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{name || 'Category Details'}</Text>
                    <TouchableOpacity style={styles.cartButton}>
                        <Ionicons name="cart-outline" size={24} color="#1E222B" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <FlatList
                data={PRODUCTS}
                renderItem={renderProduct}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.listContent}
                columnWrapperStyle={styles.columnWrapper}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        backgroundColor: '#fff',
        paddingBottom: 10,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height: 50,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F8F9FB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1E222B',
    },
    cartButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContent: {
        padding: 20,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    productCard: {
        width: '48%',
        backgroundColor: '#F8F9FB',
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
    },
    productImageContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        position: 'relative',
    },
    wishlistButton: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    productTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1E222B',
        marginBottom: 2,
    },
    productSubtitle: {
        fontSize: 12,
        color: '#616A7D',
        marginBottom: 12,
    },
    productFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    productPrice: {
        fontSize: 12,
        color: '#1E222B',
    },
    priceBold: {
        fontWeight: '700',
        fontSize: 14,
    },
    addButton: {
        width: 24,
        height: 24,
        backgroundColor: '#2B4C9B',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
