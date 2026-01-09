import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function MoreScreen() {
    const router = useRouter();

    const renderMenuItem = (title: string, icon: keyof typeof Ionicons.glyphMap, route?: string) => (
        <TouchableOpacity
            style={styles.menuItem}
            onPress={() => route ? router.push(route as any) : null}
        >
            <View style={styles.menuItemLeft}>
                <View style={styles.iconContainer}>
                    <Ionicons name={icon} size={24} color="#1E222B" />
                </View>
                <Text style={styles.menuItemText}>{title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#1E222B" />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <SafeAreaView edges={['top']} style={styles.headerContainer}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerTitle}>Settings</Text>
                </View>
            </SafeAreaView>

            <ScrollView contentContainerStyle={styles.content}>
                {renderMenuItem("Edit Profile", "person-outline", "/profile/edit")}
                {renderMenuItem("My Orders", "cube-outline", "/orders")}
                {renderMenuItem("Change Password", "lock-closed-outline", "/profile/change-password")}
                {renderMenuItem("Logout", "log-out-outline", "/auth/sign-in")}
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
        backgroundColor: '#2B4C9B',
        paddingBottom: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20,
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
    content: {
        padding: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F8F9FB',
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F8F9FB',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    menuItemText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1E222B',
    },
});
