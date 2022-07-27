import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Search from './pages/Search';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Routes(){
    return(
        <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor:'#f00',
            tabBarShowLabel:false,
            tabBarStyle:{
                position:'absolute',
                backgroundColor:'#000',
                borderTopWidth:0,
                
                bottom: 8,
                left:8,
                right:8,
                elevation:0,

                borderRadius:4,
                height:60
            }
        }}>
            <Tab.Screen name="Home" component={Home}
            options={{
                headerShown:false,
                tabBarIcon:({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="home" size={size} color={"#f00"} />
                    }
                    return <Ionicons name="home" size={size} color={"#333"}/>
                }
            }}/>
            <Tab.Screen name="Favorites" component={Favorites}
            options={{
                headerShown:false,
                tabBarIcon:({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="heart" size={size} color={"#f00"} />
                    }
                    return <Ionicons name="heart" size={size} color={"#333"} />
                }
            }}/>
            <Tab.Screen name="Profile" component={Profile}
            options={{
                headerShown:false,
                tabBarIcon:({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="home" size={size} color={"#f00"} />
                    }
                    return <Ionicons name="home" size={size} color={"#333"} />
                }
            }}/>
            <Tab.Screen name="Search" component={Search}
            options={{
                headerShown:false,
                tabBarIcon:({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="home" size={size} color={"#f00"} />
                    }
                    return <Ionicons name="home" size={size} color={"#333"} />
                }
            }}/>
        </Tab.Navigator>
    )
}

export default Routes; 
