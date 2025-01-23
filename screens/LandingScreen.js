import { Icon } from "react-native-elements";
import { Image, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const petImages = [
    require("../assets/images/pet-cat.jpeg"),
    require("../assets/images/pet-dog.jpeg"),
    require("../assets/images/pet-duck.jpeg"),
    require("../assets/images/pet-rabbit.jpeg")
];

const LandingPage = () => {

    return (
        <View style={styles.container}>
            {/*Header*/}
            <View style={styles.header}>
                <Icon name="pets" size={40} color="#FFB07C"/>
                <Text style={styles.title}>Rafiki Pet Care</Text>
            </View>
            
            {/*First Row Pet images*/}
            <FlatList 
            key={"row-1"}
                data={petImages.slice(0, 2)}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <Image source={item} style={styles.petImage} />
                    )}
                contentContainerStyle={styles.imageGrid}
            />

            {/*Hero Section*/}
            <View style={styles.heroSection}>
                <Text style={styles.heroText}>
                    Caring for your pets has never been easier!
                    Rafiki Pet Care helps you keep track of your furry friends' needs with ease.
                </Text>
            </View>

            {/*Second Row Pet images*/}
            <FlatList 
                key={"row-2"}
                data={petImages.slice(2, 4)}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <Image source={item} style={styles.petImage} />
                    )}
                contentContainerStyle={styles.imageGrid}
            />

            {/*Explore Button*/}
                <TouchableOpacity style={styles.exploreButton}>
                    <Text style={styles.exploreButtonText}>Explore The App</Text>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF5EE"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#FFE4C4"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginLeft: 10
    },
    imageGrid: {
        justifyContent: "center",
        alignItems: "center"
    },
    petImage: {
        width: 140,
        height: 140,
        marginHorizontal: 28,
        borderRadius: 10,
        marginTop: 25
    },
    heroSection: {
        marginTop: 10,
        marginHorizontal: 20,
        padding: 40,
        backgroundColor: "#FFB07C",
        borderRadius: 10,
        elevation: 10
    },
    heroText: {
        fontSize: 16,
        color: "#FFF",
        textAlign: "center",
        lineHeight: 24
    },
    exploreButton: {
        marginHorizontal: 100,
        marginTop: 20,
        marginBottom: 50,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: "#FFB07C",
        borderRadius: 10,
        alignItems: "center",
        elevation: 5
    },
    exploreButtonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default LandingPage;