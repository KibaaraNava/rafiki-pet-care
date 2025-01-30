import { useFocusEffect } from "@react-navigation/native";
import { Icon, Chip, Avatar } from "react-native-elements";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { Easing, useAnimatedStyle, withSpring, withDecay, useSharedValue, runOnJS } from 'react-native-reanimated';

const HealthTrackerScreen = () => {
    const navigation = useNavigation();
    const width = useWindowDimensions();
    const swipeThreshold = 100;
    
    const translateX = useSharedValue(0);

    // Reset translateX when the screen is focused
    useFocusEffect(() => {
        translateX.value = 0; // Reset the translateX to 0 when screen is focused
    });

    const handleSwipe = (translationX, screenName) => {
        if (Math.abs(translationX) > swipeThreshold) {
            navigation.navigate(screenName);
        }
    };

    const handleGestureEvent = (event) => {
        translateX.value = event.nativeEvent.translationX;
    };

    const createSwipeAnimation = () => {
        return useAnimatedStyle(() => {
            const scale = Math.abs(translateX.value) > 100 ? 0.95 : 1;
            const opacity = Math.abs(translateX.value) > 100 ? 0.8 : 1;

            return {
                transform: [{
                    translateX: withSpring(translateX.value, {
                        damping: 20,
                        stiffness: 100
                    })
                }],
                opacity,
                scale
            }
        });
    };

    const avatarSize = width > 400 ? "large" : "medium";

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Health Tracker Section */}
                <View style={styles.healthTrackerSection}>
                    <View style={styles.listItem}>
                        <Text style={styles.exploreText}>Health Logs</Text>
                        <TouchableOpacity 
                            style={styles.arrowButton}
                            onPress={() => navigation.navigate("HealthLogsScreen")}
                        >
                            <Icon name="arrow-forward" size={24} color={"#FFB07C"} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.separator}></View>

                    <View style={styles.listItem}>
                        <Text style={styles.exploreText}>Tracking Data</Text>
                        <TouchableOpacity 
                            style={styles.arrowButton}
                            onPress={() => navigation.navigate("TrackingDataScreen")}
                        >
                            <Icon name="arrow-forward" size={24} color={"#FFB07C"} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.separator}></View>

                    <View style={styles.listItem}>
                        <Text style={styles.exploreText}>Health Insights</Text>
                        <TouchableOpacity 
                            style={styles.arrowButton}
                            onPress={() => navigation.navigate("HealthInsightsScreen")}
                        >
                            <Icon name="arrow-forward" size={24} color={"#FFB07C"} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Health Tracker More Section */}
                <View style={styles.healthTrackerMore}>
                    <Chip 
                        title={"Health Logs"}
                        containerStyle={styles.chipContainer}
                        buttonStyle={styles.chipButton}
                        titleStyle={styles.chipTitle}
                    />

                    <PanGestureHandler
                        onGestureEvent={handleGestureEvent}
                        onHandlerStateChange={(event) => {
                            if (event.nativeEvent.state === 5) { // Gesture end state
                                runOnJS(handleSwipe)(translateX.value, "HealthLogsScreen");
                            }
                        }}
                    >
                        <Animated.View style={[styles.card, createSwipeAnimation()]}>
                            <Avatar 
                                rounded
                                size={"large"}
                                source={require("../assets/images/pet-health.jpeg")}
                            />
                            <View style={styles.cardContent}>
                                <Text style={styles.cardText}>
                                    Track Your Health Progress
                                </Text>
                                <Text style={styles.cardDescription}>
                                    Keep track of your fitness goals with personalized health logs and insights.
                                </Text>
                                <TouchableOpacity style={styles.arrowButtonExplore}>
                                    <Text style={styles.arrowText}>Swipe To See More Health Logs</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </PanGestureHandler>

                    <View style={styles.separator}></View>

                    <Chip 
                        title={"Tracking Data"}
                        containerStyle={styles.chipContainer}
                        buttonStyle={styles.chipButton}
                        titleStyle={styles.chipTitle}
                    />

                    <PanGestureHandler
                        onGestureEvent={handleGestureEvent}
                        onHandlerStateChange={(event) => {
                            if (event.nativeEvent.state === 5) { // Gesture end state
                                runOnJS(handleSwipe)(translateX.value, "TrackingDataScreen");
                            }
                        }}
                    >
                        <Animated.View style={[styles.card, createSwipeAnimation()]}>
                            <Avatar 
                                rounded
                                size={"large"}
                                source={require("../assets/images/pet-duck.jpeg")}
                            />
                            <View style={styles.cardContent}>
                                <Text style={styles.cardText}>
                                    Analyze Your Health Data
                                </Text>
                                <Text style={styles.cardDescription}>
                                    Explore detailed insights on your health progress with comprehensive data analysis.
                                </Text>
                                <TouchableOpacity style={styles.arrowButtonExplore}>
                                    <Text style={styles.arrowText}>Swipe To See More Tracking Data</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </PanGestureHandler>

                    <View style={styles.separator}></View>

                    <Chip 
                        title={"Health Insights"}
                        containerStyle={styles.chipContainer}
                        buttonStyle={styles.chipButton}
                        titleStyle={styles.chipTitle}
                    />

                    <PanGestureHandler
                        onGestureEvent={handleGestureEvent}
                        onHandlerStateChange={(event) => {
                            if (event.nativeEvent.state === 5) { // Gesture end state
                                runOnJS(handleSwipe)(translateX.value, "HealthInsightsScreen");
                            }
                        }}
                    >
                        <Animated.View style={[styles.card, createSwipeAnimation()]}>
                            <Avatar 
                                rounded
                                size={"large"}
                                source={require("../assets/images/pet-training.jpeg")}
                            />
                            <View style={styles.cardContent}>
                                <Text style={styles.cardText}>
                                    Get Expert Health Tips
                                </Text>
                                <Text style={styles.cardDescription}>
                                    Learn from the experts about how to improve your health and achieve your wellness goals.
                                </Text>
                                <TouchableOpacity style={styles.arrowButtonExplore}>
                                    <Text style={styles.arrowText}>Swipe To See More Health Insights</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </PanGestureHandler>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5", // Same background color as the Health Tracker card in Explore screen
    },
    scrollContainer: {
        paddingBottom: 20
    },
    healthTrackerSection: {
        marginTop: 30,
        paddingHorizontal: 20
    },
    healthTrackerMore: {
        marginTop: 30,
        paddingHorizontal: 20,
        backgroundColor: "#20B2AA", // You can update this if needed to match your previous color
        height: "100%",
        borderRadius: 25
    },
    exploreText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15
    },
    separator: {
        height: 3,
        backgroundColor: "#ccc",
        marginVertical: 15,
        borderRadius: 25
    },
    arrowButton: {
        padding: 5
    },
    arrowButtonExplore: {
        padding: 1,
        alignSelf: "flex-start"
    },
    arrowText: {
        color: "#333",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5
    },
    chipContainer: {
        marginTop: 30,
        marginBottom: 10,
        alignSelf: "flex-start"
    },
    chipButton: {
        backgroundColor: "#FFB07C",
        borderRadius: 10
    },
    chipTitle: {
        color: "#333",
        fontSize: 14,
        fontWeight: "bold"
    },
    card: {
        marginTop: 10,
        backgroundColor: "#F5F5F5", // Same background color for the card
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 20
    },
    cardContent: {
        marginTop: 10
    },
    cardText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333"
    },
    cardDescription: {
        fontSize: 14,
        color: "#777",
        marginVertical: 5
    }
});

export default HealthTrackerScreen;


