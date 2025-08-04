export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  location?: {
    latitude: number;
    longitude: number;
  };
  isVisible: boolean;
  radius: number;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  creatorId: string;
  location: {
    latitude: number;
    longitude: number;
  };
  tags: string[];
  maxParticipants?: number;
  currentParticipants: string[];
  startTime?: Date;
  endTime?: Date;
  isActive: boolean;
}

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

export type MainTabParamList = {
  Map: undefined;
  Profile: undefined;
  Activities: undefined;
};