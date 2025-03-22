export type User = {
  id: number,
  name: string,
  email: string,
  city: string;
}

export type SearchBarProps = {
  query: string,
  setQuery: (query: string) => void;
}

export type UserCardProps = {
  user: User;
}

export type UserListProps = {
  users: User[],
  fakeLoading: boolean;
}