import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>