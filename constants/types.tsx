import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Place: { placeId: number };
  JournalEntries: { placeId: number };
};

export type StackParams = {
  Home: undefined;
  Place: { placeId: number };
};

export type StackNavProps<T extends keyof StackParams> = {
  navigation: StackNavigationProp<StackParams, T>;
};
