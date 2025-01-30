import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, ScrollView, View, Image } from "react-native";

const GamesScreen = () => {
    const handleStartGame = (gameName) => {
        console.log(`Starting game: ${gameName}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.header}>Games</Text>

                {/* Game 1 */}
                <View style={[styles.gameCard, { backgroundColor: "#DAA520" }]}>
                    <Text style={styles.gameTitle}>Hide and Seek</Text>
                    <Text style={styles.gameDescription}>A mental stimulation game to help your pet’s problem-solving skills.</Text>
                    <Image
                        source={require("../assets/images/hide-and-seek-icon.jpeg")} // Add your image path here
                        style={styles.gameImage}
                    />
                    <TouchableOpacity
                        style={styles.startButton}
                        onPress={() => handleStartGame("Hide and Seek")}
                    >
                        <Text style={styles.buttonText}>Start</Text>
                    </TouchableOpacity>
                </View>

                {/* Game 2 */}
                <View style={[styles.gameCard, { backgroundColor: "#008080" }]}>
                    <Text style={styles.gameTitle}>Obstacle Course</Text>
                    <Text style={styles.gameDescription}>Create a challenging course for your pet to navigate for both mental and physical exercise.</Text>
                    <Image
                        source={require("../assets/images/obstacle-course-icon.jpeg")} // Add your image path here
                        style={styles.gameImage}
                    />
                    <TouchableOpacity
                        style={styles.startButton}
                        onPress={() => handleStartGame("Obstacle Course")}
                    >
                        <Text style={styles.buttonText}>Start</Text>
                    </TouchableOpacity>
                </View>

                {/* Add more games here */}
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
    gameCard: {
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 3,
    },
    gameTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff", // White text for the title
    },
    gameDescription: {
        fontSize: 14,
        marginTop: 10,
        color: "#FFF",  // White text for the description
        fontWeight: "bold",
    },
    gameImage: {
        width: 120, // Increased size
        height: 120, // Increased size
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

export default GamesScreen;


