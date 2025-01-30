import { SafeAreaView, ScrollView,  View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Chip, Icon } from "react-native-elements";

const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.section}>
                {/*Create Account Section */}
                <Chip 
                title={"Create"}
                containerStyle={styles.chipContainer}
                buttonStyle={styles.chipButton}
                titleStyle={styles.chipTitle}
                />
                <View style={styles.card}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Full Name" 
                        placeholderTextColor="#777" 
                     />
                    <TextInput 
                        style={styles.input}
                        placeholder="Email" 
                        placeholderTextColor="#777"
                        keyboardType="email-address" 
                     />
                     <TextInput 
                        style={styles.input}
                        placeholder="Password" 
                        placeholderTextColor="#777" 
                        secureTextEntry
                     />
                     <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Sign Up
                        </Text>
                     </TouchableOpacity>
                </View>

                {/*LoginAccount Section */}
                <Chip 
                title={"Login"}
                containerStyle={styles.chipContainer}
                buttonStyle={styles.chipButton}
                titleStyle={styles.chipTitle}
                />
                <View style={styles.card}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Email" 
                        placeholderTextColor="#777"
                        keyboardType="email-address" 
                     />
                     <TextInput 
                        style={styles.input}
                        placeholder="Password" 
                        placeholderTextColor="#777" 
                        secureTextEntry
                     />
                     <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Login
                        </Text>
                     </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#D3D3D3",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    section: {
      width: "90%",
      alignItems: "center",
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 20
    },
    card: {
      width: "100%",
      padding: 20,
      backgroundColor: "#20B2AA",
      borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
      alignItems: "center",
    },
    input: {
      width: "100%",
      height: 50,
      borderColor: "#CCC",
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 15,
      marginVertical: 10,
      fontSize: 16,
      backgroundColor: "#FAFAFA",
    },
    button: {
      marginTop: 20,
      backgroundColor: "#FFB07C",
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 25,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    buttonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold",
    },
    chipContainer: {
        marginTop: 5,
        marginBottom: 10,
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    chipButton: {
        backgroundColor: "#FFE4C4",
        paddingHorizontal: 40,
        paddingVertical: 10,
    },
    chipTitle: {
        color: "#333",
        fontSize: 15,
        fontWeight: "bold"
    }
  });

export default LoginScreen;