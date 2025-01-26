import { Icon } from "react-native-elements";
import { Image, SafeAreaView, StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const petImages = [
    require("../assets/images/rafiki-main-logo-removebg-preview.png")
];

const LandingPage = () => {

    {/*hook to access navigation */}
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

                {/*app name */}
                <Text style={styles.appName}>Rafiki Pet Care</Text>

                {/*Pet image */}
                <Image source={petImages[0, 1]} style={styles.petImage} />
                
                {/*Pet images*/}
                <View style={styles.imageContainer}>
                    {petImages.map((image, index) => (
                        <Image key={index} source={image} style={styles.petImage} />
                    ))}
                </View>

                {/*Hero Section*/}
                <View style={styles.heroSection}>
                    <Text style={styles.heroText}>
                        Caring for your pets has never been easier!
                        Rafiki Pet Care helps you keep track of your furry friends' needs with ease.
                    </Text>

                    {/*Buttons */}
                    <View style={styles.buttonsContainer}>

                        {/*Explore Button*/}
                        <TouchableOpacity 
                        style={styles.exploreButton}
                        onPress={() => navigation.navigate("Home")}
                        >
                            <Icon name="explore" size={30} color={"#FFF"}/>
                            <Text style={styles.exploreButtonText}>Explore</Text>
                        </TouchableOpacity>

                            {/*View seperator */}
                            <View style={styles.separator}></View>

                            {/*Login and Sign-In Button*/}
                        <TouchableOpacity style={styles.loginButton}>
                            <Icon name="login" size={30} color={"#FFF"}/>
                            <Text style={styles.exploreButtonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3D3D3"
    },
    scrollContent: {
        alignItems: "center",
        paddingBottom: 50
    },
    appName: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#FFB07C",
        marginTop: 50,
        textAlign: "center"
    },
    imageContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    petImage: {
        width: 250,
        height: 250,
        borderRadius: 15,
        marginTop: -120
    },
    heroSection: {
        marginTop: 40,
        width: "100%",
        height: "100%",
        padding: 20,
        backgroundColor: "#20B2AA",
        borderRadius: 15,
        alignItems: "center",
        elevation: 5
    },
    heroText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFF",
        textAlign: "center",
        lineHeight: 24,
        marginBottom: 20
    },
    buttonsContainer: {
        alignItems: "center",
        marginTop: 40,
        width: "90%"
    },
    exploreButton: {
        marginBottom: 15,
        paddingVertical : 8,
        width: "70%",
        backgroundColor: "#D3D3D3",
        borderRadius: 15,
        alignItems: "center",
        elevation: 5
    },
    loginButton: {
        width: "70%",
        paddingVertical: 8,
        backgroundColor: "#D3D3D3",
        borderRadius: 15,
        alignItems: "center",
        elevation: 5
    },
    exploreButtonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold"
    },
    separator: {
        height: 3,
        width: "90%",
        backgroundColor: "#ccc",
        marginVertical: 15,
        borderRadius: 25
    }
});

export default LandingPage;