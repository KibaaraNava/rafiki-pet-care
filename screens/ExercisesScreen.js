import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, ScrollView, View, Image } from "react-native";

const ExercisesScreen = () => {
    const handleStartGame = (gameName) => {
        console.log(`Starting game: ${gameName}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.header}>Exercises</Text>

                {/* Exercise 1 */}
                <View style={[styles.exerciseCard, { backgroundColor: "#20B2AA" }]}>
                    <Text style={styles.exerciseTitle}>Fetch</Text>
                    <Text style={styles.exerciseDescription}>A fun game to exercise your pet's body and mind.</Text>
                    <Image
                        source={require("../assets/images/fetch-icon.png")} // Add your image path here
                        style={styles.exerciseImage}
                    />
                    <TouchableOpacity
                        style={styles.startButton}
                        onPress={() => handleStartGame("Fetch")}
                    >
                        <Text style={styles.buttonText}>Start</Text>
                    </TouchableOpacity>
                </View>

                {/* Exercise 2 */}
                <View style={[styles.exerciseCard, { backgroundColor: "#FFB07C" }]}>
                    <Text style={styles.exerciseTitle}>Tug of War</Text>
                    <Text style={styles.exerciseDescription}>Strengthen your bond and give your pet a great workout.</Text>
                    <Image
                        source={require("../assets/images/tug-of-war-icon.png")} // Add your image path here
                        style={styles.exerciseImage}
                    />
                    <TouchableOpacity
                        style={styles.startButton}
                        onPress={() => handleStartGame("Tug of War")}
                    >
                        <Text style={styles.buttonText}>Start</Text>
                    </TouchableOpacity>
                </View>

                {/* Add more exercises here */}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3D3D3", // Same as the ArticlesScreen background
    },
    scrollContainer: {
        padding: 20
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    exerciseCard: {
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 3,
    },
    exerciseTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff", // White text for the title
    },
    exerciseDescription: {
        fontSize: 14,
        marginTop: 10,
        color: "#FFF",  // White text for the description
        fontWeight: "bold",
    },
    exerciseImage: {
        width: 100, // Same size as in the CoursesScreen
        height: 100,
        borderRadius: 10, // Rounded corners like in the CoursesScreen
        marginVertical: 10,
        alignSelf: "center", // Center the image
    },
    startButton: {
        marginTop: 15,
        backgroundColor: "#FF0000", // Button color
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff", // White text for the button
    },
});

export default ExercisesScreen;



