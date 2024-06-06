import { useUser } from '@auth0/nextjs-auth0/client';

export default function ProfileServer() {
    const { user } = useUser();
  return (
    user && (
      <div>
        <img src={user.picture ?? ''} alt={user.name ?? 'User'} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}

