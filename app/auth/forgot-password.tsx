import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ForgotPasswordScreen() {
    const router = useRouter();

    const handleSendCode = () => {
        router.push('/auth/verify-otp');
    };

    return (
        <View style={styles.container}>
            <SafeAreaView edges={['top']} style={styles.headerContainer}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="chevron-back" size={24} color="#1E222B" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Forgot Password</Text>
                <Text style={styles.subtitle}>Enter your email address to verify your account.</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>EMAIL</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="john.doe@example.com"
                        placeholderTextColor="#A9B4D5"
                        keyboardType="email-address"
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleSendCode}>
                    <Text style={styles.buttonText}>Send Code</Text>
                </TouchableOpacity>

            </ScrollView>
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
    },
    headerContent: {
        paddingHorizontal: 20,
        height: 50,
        justifyContent: 'center',
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F8F9FB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        padding: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1E222B',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#616A7D',
        marginBottom: 40,
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
    button: {
        backgroundColor: '#2B4C9B',
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
});
