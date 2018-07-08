import ListsScreen from "./Home";
import DetailsScreen from "./DetailsScreen";
import {createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Home: ListsScreen,
  Details: DetailsScreen,
},
{
  initialRouteName: 'Home',
}
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}