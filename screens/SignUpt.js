import { ScrollView, StyleSheet,} from 'react-native';
import Logo from '../components/Logo';
import Welcome from '../components/Welcome';
import Input from '../components/Input';
import SignUp from '../components/SignUp';
import Account from '../components/Account';
export default function SignUpt() {
  return (
    <ScrollView style={styles.container}>
      <Logo/>
      <Welcome/>
      <Input />
      <SignUp />
      <Account />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#041C2F',
  }
 
})