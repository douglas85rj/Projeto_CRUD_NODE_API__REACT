import {
  Container,
  UserInfo
} from './styles';

export interface TUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface UserProps {
  user: TUser;
  handleRemoveUser: (id: string) => void;
}

import { formatDate } from '../../utils/formatDate';

export default function UserCard({ user, handleRemoveUser } : UserProps) {
  return (
    <Container>
      <UserInfo>
        <strong>{user.name}</strong>
        <p>email: {user.email}</p>
        <p>id: {user.id}</p>
        <p>Data de criação: {formatDate(user.createdAt)}</p>
        <p>Data de atualização: {formatDate(user.updatedAt)}</p>
      </UserInfo>

      <button onClick={() => handleRemoveUser(user.id)}>Remover</button>
    </Container>
  );
}
