import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PaymentScreen() {
    const router = useRouter();
    const [showSuccess, setShowSuccess] = useState(false);

    const handlePayment = () => {
        setShowSuccess(true);
    };

    const handleCloseSuccess = () => {
        setShowSuccess(false);
        router.push('/');
    };

    return (
        <View style={styles.container}>
            <SafeAreaView edges={['top']} style={styles.headerContainer}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="chevron-back" size={24} color="#1E222B" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Add Card</Text>
                    <View style={{ width: 40 }} />
                </View>
            </SafeAreaView>

            <ScrollView contentContainerStyle={styles.content}>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>CARD HOLDER NAME</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="John Doe"
                        placeholderTextColor="#A9B4D5"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>CARD NUMBER</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="1234 5678 9012 3456"
                        placeholderTextColor="#A9B4D5"
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.row}>
                    <View style={[styles.inputGroup, { flex: 1, marginRight: 16 }]}>
                        <Text style={styles.label}>EXP DATE</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="10/26"
                            placeholderTextColor="#A9B4D5"
                        />
                    </View>
                    <View style={[styles.inputGroup, { flex: 1 }]}>
                        <Text style={styles.label}>CVC</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="123"
                            placeholderTextColor="#A9B4D5"
                            keyboardType="numeric"
                            secureTextEntry
                        />
                    </View>
                </View>

            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.checkoutButton} onPress={handlePayment}>
                    <Text style={styles.checkoutButtonText}>Make Payment</Text>
                </TouchableOpacity>
            </View>

            {/* Success Modal */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={showSuccess}
                onRequestClose={handleCloseSuccess}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.successIconContainer}>
                            <Ionicons name="checkmark" size={40} color="#fff" />
                        </View>
                        <Text style={styles.successTitle}>Payment Successful</Text>
                        <Text style={styles.successSubtitle}>Your order has been placed successfully</Text>

                        <TouchableOpacity style={styles.modalButton} onPress={handleCloseSuccess}>
                            <Text style={styles.modalButtonText}>Back to Home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    inputGroup: {
        marginBottom: 24,
    },
    label: {
        fontSize: 12,
        color: '#616A7D',
        marginBottom: 8,
        letterSpacing: 1,
    },
    input: {
        height: 56,
        backgroundColor: '#F8F9FB',
        borderRadius: 16,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#1E222B',
    },
    row: {
        flexDirection: 'row',
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
    // Modal Styles
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 30,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    successIconContainer: {
        width: 80,
        height: 80,
        backgroundColor: '#2B4C9B', // Using app primary color
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        // Add a subtle ring effect
        borderWidth: 8,
        borderColor: '#E7ECF0',
    },
    successTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E222B',
        marginBottom: 12,
        textAlign: 'center',
    },
    successSubtitle: {
        fontSize: 14,
        color: '#616A7D',
        textAlign: 'center',
        marginBottom: 32,
    },
    modalButton: {
        width: '100%',
        height: 56,
        backgroundColor: '#1E222B',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    trackButton: {
        paddingVertical: 10,
    },
    trackButtonText: {
        color: '#1E222B',
        fontSize: 16,
        fontWeight: '600',
    },
});
