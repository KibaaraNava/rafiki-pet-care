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
            
            {/*Horizontal scroll Pet images*/}
            <FlatList 
                date={petImages}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    <Image source={item} style={styles.petImage} />
                }}
                showsHorizontalScrollIndicator={false}
                style={styles.imageRow}
            />

            {/*Hero Section*/}
            <View style={styles.heroSection}>
                <Text style={styles.heroText}>
                    Caring for your pets has never been easier!
                    Rafiki Pet CAre helps you keep track of your furry friends' needs with ease.
                </Text>
            </View>

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
    imageRow: {
        marginTop: 10,
        paddingHorizontal: 10
    },
    petImage: {
        width: 80,
        height: 80,
        marginHorizontal: 5,
        borderRadius: 10
    },
    heroSection: {
        fontSize: 16,
        color: "#FFF",
        textAlign: "center",
        lineHeight: 24
    },
    exploreButton: {
        marginHorizontal: 50,
        marginTop: 20,
        padding: 15,
        backgroundColor: "#FFB07C",
        borderRadius: 10,
        alignItems: "center"
    },
    exploreButtonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default LandingPage;