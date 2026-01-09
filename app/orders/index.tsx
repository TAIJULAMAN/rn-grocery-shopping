import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type Order = {
    id: string;
    date: string;
    total: number;
    status: 'Delivered' | 'Cancelled';
    items: number;
};

const ORDERS: Order[] = [
    { id: '1', date: 'Oct 24, 2023', total: 47.00, status: 'Delivered', items: 3 },
    { id: '2', date: 'Oct 12, 2023', total: 22.50, status: 'Delivered', items: 2 },
    { id: '3', date: 'Sep 28, 2023', total: 15.00, status: 'Cancelled', items: 1 },
];

export default function MyOrdersScreen() {
    const router = useRouter();

    const renderItem = ({ item }: { item: Order }) => (
        <TouchableOpacity style={styles.orderCard}>
            <View style={styles.orderHeader}>
                <Text style={styles.orderId}>Order #{item.id}</Text>
                <Text style={[
                    styles.status,
                    item.status === 'Delivered' ? styles.statusDelivered : styles.statusCancelled
                ]}>
                    {item.status}
                </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.orderDetails}>
                <View>
                    <Text style={styles.detailLabel}>Date</Text>
                    <Text style={styles.detailValue}>{item.date}</Text>
                </View>
                <View>
                    <Text style={styles.detailLabel}>Total</Text>
                    <Text style={styles.detailValue}>${item.total.toFixed(2)}</Text>
                </View>
                <View>
                    <Text style={styles.detailLabel}>Items</Text>
                    <Text style={styles.detailValue}>{item.items}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <SafeAreaView edges={['top']} style={styles.headerContainer}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="chevron-back" size={24} color="#1E222B" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>My Orders</Text>
                    <View style={{ width: 40 }} />
                </View>
            </SafeAreaView>

            <FlatList
                data={ORDERS}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
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
    listContent: {
        padding: 20,
    },
    orderCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F8F9FB',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    orderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    orderId: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1E222B',
    },
    status: {
        fontSize: 12,
        fontWeight: '600',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        overflow: 'hidden',
    },
    statusDelivered: {
        backgroundColor: '#EAF8F1',
        color: '#27AE60',
    },
    statusCancelled: {
        backgroundColor: '#FCECEC',
        color: '#EB5757',
    },
    divider: {
        height: 1,
        backgroundColor: '#F8F9FB',
        marginBottom: 12,
    },
    orderDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailLabel: {
        fontSize: 12,
        color: '#616A7D',
        marginBottom: 4,
    },
    detailValue: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1E222B',
    },
});
