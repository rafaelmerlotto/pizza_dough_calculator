
import { StyleSheet,  View } from 'react-native';
import Overview from './pages/Overview';

export default function App() {
  return (
    <View style={styles.container}> 
        <Overview/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
backgroundColor: "#a64942"
  },
});
