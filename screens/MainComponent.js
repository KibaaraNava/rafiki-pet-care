import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import LandingPage from "./LandingScreen";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import PetProfileScreen from "./PetProfileScreen";
import LoginScreen from "./LoginScreen";


{/*Bottom Navigator variable*/}
const Tab = createBottomTabNavigator();

{/*Stack Navigator */}
const Stack = createStackNavigator();

{/*screeOptions variable*/}
const screenOptions= {
    tabBarActiveTintColor: "#FFB07C",
    tabBarInactiveTintColor: "#888"
};

const LandingStack = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen 
            name="LandingPage"
            component={LandingPage}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen 
            name="LoginScreen"
            component={LoginScreen}
            options={{
                title: "Login",
                headerStyle: {backgroundColor: "#FFB07C"},
                headerTintColor: "#FFF",
                headerTitleStyle: {fontWeight: "bold"}
            }}
        />
    </Stack.Navigator>
    );
};

const MainComponent = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={screenOptions}
            >
                <Tab.Screen 
                    name= "Welcome"
                    component={LandingStack}
                    options={{
                        tabBarIcon: ({  color, size}) => {
                            return <Icon name="emoji-people" size={size} color={color} />
                        },
                        headerShown: false,
                        
                    }}
                />
                <Tab.Screen 
                    name= "Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({  color, size}) => {
                            return <Icon name="home" size={size} color={color} />
                        },
                        headerShown:false
                    }}
                />
                <Tab.Screen 
                    name= "Explore"
                    component={ExploreScreen}
                    options={{
                        tabBarIcon: ({ color, size}) => {
                        return <Icon name="explore" size={size} color={color} />
                        },
                        headerShown: false
                    }}
                />
                <Tab.Screen 
                    name= "Profile"
                    component={PetProfileScreen}
                    options={{
                        tabBarIcon: ({ color, size}) => {
                        return <Icon name="cruelty-free" type="material" size={size} color={color} />
                        },
                        headerShown: false
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainComponent;