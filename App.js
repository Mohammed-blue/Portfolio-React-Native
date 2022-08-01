import { NavigationContainer } from '@react-navigation/native'
import Main from './screens/MainComponent';
console.disableYellowBox = true; // this allows for warning messages to be disabled inn the cons0le

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
