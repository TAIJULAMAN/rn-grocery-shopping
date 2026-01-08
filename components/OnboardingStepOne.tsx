import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

interface OnboardingStepOneProps {
    onNext: () => void;
}

export default function OnboardingStepOne({ onNext }: OnboardingStepOneProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.textSection}>
                    <Text style={styles.title}>
                        Your holiday{'\n'}shopping{'\n'}delivered to your{'\n'}home
                    </Text>

                    <Text style={styles.subtitle}>
                        There's something for everyone{'\n'}to enjoy with Sweet Shop{'\n'}Favourites
                    </Text>

                    {/* Pagination Dots */}
                    <View style={styles.paginationContainer}>
                        <View style={[styles.dot, styles.activeDot]} />
                        <View style={[styles.dot, styles.inactiveDot]} />
                    </View>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={require('@/assets/images/Trolley.png')}
                        style={{ width: 280, height: 280 }}
                        contentFit="contain"
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onNext}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.buttonText}>Get Started</Text>
                        <Ionicons name="arrow-forward" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        backgroundColor: '#2B4C9B',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'space-between',
        paddingBottom: 40,
        paddingTop: 20,
    },
    textSection: {
        marginTop: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 40,
        marginBottom: 24,
        color: '#FFFFFF',
    },
    subtitle: {
        fontSize: 18,
        lineHeight: 26,
        marginBottom: 30,
        color: '#D1D5DB',
    },
    paginationContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    dot: {
        height: 4,
        borderRadius: 2,
    },
    activeDot: {
        backgroundColor: '#FFFFFF',
        width: 24,
    },
    inactiveDot: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        width: 20,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        maxHeight: 300,
    },
    imagePlaceholder: {
        width: 140,
        height: 140,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: '#9CA3AF',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.6,
    },
    buttonContainer: {
        marginBottom: 10,
        marginTop: 10,
    },
    button: {
        flexDirection: 'row',
        height: 64,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        backgroundColor: '#FAFAFA',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000000',
    },
});
