import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function EditProfileScreen() {
    const router = useRouter();

    const handleUpdate = () => {
        Alert.alert("Success", "Profile Updated Successfully");
    };

    return (
        <View style={styles.container}>
            <SafeAreaView edges={['top']} style={styles.headerContainer}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="chevron-back" size={24} color="#1E222B" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Edit Profile</Text>
                    <View style={{ width: 40 }} />
                </View>
            </SafeAreaView>

            <ScrollView contentContainerStyle={styles.content}>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>FULL NAME</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="John Doe"
                        defaultValue="John Doe"
                        placeholderTextColor="#A9B4D5"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>EMAIL</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="john.doe@example.com"
                        defaultValue="john.doe@example.com"
                        placeholderTextColor="#A9B4D5"
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>PHONE NUMBER</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="+1 234 567 890"
                        defaultValue="+1 234 567 890"
                        placeholderTextColor="#A9B4D5"
                        keyboardType="phone-pad"
                    />
                </View>

            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.saveButton} onPress={handleUpdate}>
                    <Text style={styles.saveButtonText}>Update Profile</Text>
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
    footer: {
        padding: 24,
        paddingBottom: 40,
        backgroundColor: '#fff',
    },
    saveButton: {
        backgroundColor: '#2B4C9B',
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
});
