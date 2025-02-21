import { useEffect, useState } from "react";
import { User } from "../../domain/entities/User";
import { GetUsers } from "../../application/usecases/GetUsers";
import { UserRepository } from "../../domain/repositories/UserRepository";

interface UserListProps {
  userRepository: UserRepository;
}

const UserList = ({ userRepository }: UserListProps) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const getUsers = new GetUsers(userRepository);
      const data = await getUsers.execute();
      setUsers(data);
    };
    fetchUsers();
  }, [userRepository]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
