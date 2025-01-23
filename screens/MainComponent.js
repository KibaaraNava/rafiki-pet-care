import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import LandingPage from "./LandingScreen";
import HomeScreen from "./HomeScreen";

{/*Bottom Navigator variable*/}
const Tab = createBottomTabNavigator();

{/*screeOptions variable*/}
const screenOptions= {
    tabBarActiveTintColor: "#FFB07C",
    tabBarInactiveTintColor: "#888"
}

const MainComponent = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={screenOptions}
            >
                <Tab.Screen 
                    name= "Welcome"
                    component={LandingPage}
                    options={{
                        tabBarIcon: ({  color, size}) => {
                            return <Icon name="emoji-people" size={size} color={color} />
                        }
                    }}
                />
                <Tab.Screen 
                    name= "Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({  color, size}) => {
                            return <Icon name="home" size={size} color={color} />
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainComponent;