import {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';

type User = FirebaseAuthTypes.User | null;
type Confirm = FirebaseAuthTypes.ConfirmationResult | null;

const useAuth = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<User>(null);
  const navigation = useNavigation();

  function autoSignIn() {
    auth()
      .signInAnonymously()
      .then(() => {
        navigation.navigate('HomeStackNavigator');
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }
        console.error(error);
      });
  }

  function authSignOut() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  function onAuthStateChanged(user: User) {
    setUser(user);
    navigation.navigate('HomeStackNavigator');
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '473774399062-ohvoofn34du4i4una6im1djheelic34n.apps.googleusercontent.com',
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {}
  }

  return {autoSignIn, authSignOut, onGoogleButtonPress, user};
};

export default useAuth;
