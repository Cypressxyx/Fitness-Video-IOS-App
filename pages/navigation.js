import { createStackNavigator } from 'react-navigation';

const App = createStackNavigator({
  History: { screen: './Home' },
  Profile: { screen : './Workout' },
});

export default App;

