import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { useRouter } from 'expo-router';

// Mock Data
type Category = {
    id: string;
    name: string;
    icon: keyof typeof Ionicons.glyphMap;
};

const CATEGORIES: Category[] = [
    { id: '1', name: 'Meats & Fishes', icon: 'fish-outline' },
    { id: '2', name: 'Vegetables', icon: 'leaf-outline' },
    { id: '3', name: 'Fruits', icon: 'nutrition-outline' },
    { id: '4', name: 'Dairy', icon: 'water-outline' },
    { id: '5', name: 'Beverages', icon: 'wine-outline' },
    { id: '6', name: 'Bakery', icon: 'restaurant-outline' },
    { id: '7', name: 'Snacks', icon: 'fast-food-outline' },
    { id: '8', name: 'Frozen', icon: 'snow-outline' },
];

export default function CategoriesScreen() {
    const router = useRouter();

    const renderItem = ({ item }: { item: Category }) => (
        <TouchableOpacity
            style={styles.categoryCard}
            onPress={() => router.push({ pathname: '/category/[id]', params: { id: item.id, name: item.name } })}
        >
            <View style={styles.iconContainer}>
                <Ionicons name={item.icon} size={40} color="#F9B023" />
            </View>
            <Text style={styles.categoryName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <SafeAreaView edges={['top']} style={styles.safeArea}>
                    <View style={styles.headerContent}>
                        <Text style={styles.headerTitle}>Categories</Text>
                        <TouchableOpacity style={styles.cartButton} onPress={() => router.push('/cart')}>
                            <Ionicons name="cart-outline" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>

            <FlatList
                data={CATEGORIES}
                renderItem={renderItem}
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
        backgroundColor: '#2B4C9B',
        paddingBottom: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20,
    },
    safeArea: {
        backgroundColor: '#2B4C9B',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#fff',
    },
    cartButton: {
        position: 'relative',
    },
    listContent: {
        paddingHorizontal: 20,
        paddingBottom: 100, // Space for tab bar
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    categoryCard: {
        width: '48%',
        backgroundColor: '#F8F9FB',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(249, 176, 35, 0.15)', // Light yellow bg from design
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    categoryName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1E222B',
        textAlign: 'center',
    },
});
