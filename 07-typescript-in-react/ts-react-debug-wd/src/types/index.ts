export type User = { id: string; password: string; email: string; name: string };

export type AuthContextType = {
  user: User | null;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
};

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string; // it's passed to new Date(), so string or number
  location: string;
  latitude: number;
  longitude: number;
  organizerId: string;
};
