import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CheckoutScreen() {
    const router = useRouter();
    const [addressType, setAddressType] = useState('Home');

    return (
        <View style={styles.container}>
            <SafeAreaView edges={['top']} style={styles.headerContainer}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="chevron-back" size={24} color="#1E222B" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Checkout</Text>
                    <View style={{ width: 40 }} />
                </View>
            </SafeAreaView>

            <ScrollView contentContainerStyle={styles.content}>

                {/* Delivery Address Section */}
                <Text style={styles.sectionTitle}>Delivery Address</Text>

                <View style={styles.addressCard}>
                    <View style={styles.addressHeader}>
                        <Text style={styles.addressType}>{addressType}</Text>
                        <TouchableOpacity>
                            <Text style={styles.editLink}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.addressText}>3655 Drummond St, Montreal, Quebec, Canada.</Text>
                </View>

                <View style={styles.typeSelector}>
                    {['Home', 'Office'].map((type) => (
                        <TouchableOpacity
                            key={type}
                            style={[styles.typeButton, addressType === type && styles.activeTypeButton]}
                            onPress={() => setAddressType(type)}
                        >
                            <Text style={[styles.typeButtonText, addressType === type && styles.activeTypeButtonText]}>{type}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.checkoutButton} onPress={() => router.push('/payment')}>
                    <Text style={styles.checkoutButtonText}>Add Card</Text>
                </TouchableOpacity>
            </View>
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
    content: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1E222B',
        marginBottom: 16,
    },
    addressCard: {
        padding: 16,
        borderWidth: 1,
        borderColor: '#F9B023',
        borderRadius: 16,
        marginBottom: 20,
    },
    addressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    addressType: {
        fontSize: 14,
        color: '#616A7D',
    },
    editLink: {
        fontSize: 14,
        color: '#2B4C9B',
        fontWeight: '500',
    },
    addressText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1E222B',
        lineHeight: 24,
    },
    typeSelector: {
        flexDirection: 'row',
        gap: 12,
    },
    typeButton: {
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E7ECF0',
    },
    activeTypeButton: {
        backgroundColor: '#F9B023',
        borderColor: '#F9B023',
    },
    typeButtonText: {
        fontSize: 14,
        color: '#1E222B',
    },
    activeTypeButtonText: {
        color: '#fff',
        fontWeight: '600',
    },
    footer: {
        padding: 24,
        paddingBottom: 40,
        backgroundColor: '#fff',
    },
    checkoutButton: {
        backgroundColor: '#2B4C9B',
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkoutButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
});
