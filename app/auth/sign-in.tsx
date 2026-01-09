import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SignInScreen() {
    const router = useRouter();

    const handleSignIn = () => {
        // Mock authentication
        router.push('/');
    };

    return (
        <View style={styles.container}>
            <SafeAreaView edges={['top']} style={styles.headerContainer}>
                <View style={styles.headerContent}>
                    {/* Placeholder for alignment */}
                    <View style={{ width: 40 }} />
                </View>
            </SafeAreaView>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Sign In</Text>
                <Text style={styles.subtitle}>Welcome back! Please enter your details.</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>EMAIL</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="john.doe@example.com"
                        placeholderTextColor="#A9B4D5"
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>PASSWORD</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="********"
                        placeholderTextColor="#A9B4D5"
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity onPress={() => router.push('/auth/forgot-password')}>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/auth/sign-up')}>
                        <Text style={styles.footerLink}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

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
    forgotPassword: {
        alignSelf: 'flex-end',
        color: '#2B4C9B',
        fontSize: 14,
        fontWeight: '600',
        marginTop: -16,
        marginBottom: 32,
    },
    button: {
        backgroundColor: '#2B4C9B',
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        color: '#616A7D',
        fontSize: 14,
    },
    footerLink: {
        color: '#2B4C9B',
        fontSize: 14,
        fontWeight: '600',
    },
});
