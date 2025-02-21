import { useEffect, useState } from "react";
import { User } from "../../domain/entities/User";
import { UserApiService } from "../../infrastructure/api/UserApiService";
import EditUserForm from "./EditUserForm";
import { DeleteUser, GetUsers } from "../../application/usecases";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const fetchUsers = async () => {
    const userRepository = new UserApiService();
    const getUsers = new GetUsers(userRepository);
    const data = await getUsers.execute();
    setUsers(data);
    setEditingUser(null);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    const userRepository = new UserApiService();
    const deleteUser = new DeleteUser(userRepository);
    await deleteUser.execute(id);
    fetchUsers(); // Refresh the user list
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id} className="mb-2">
            {user.name} - {user.email}
            <button
              onClick={() => setEditingUser(user)}
              className="ml-2 p-1 bg-yellow-500 text-white rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(user._id || "")}
              className="ml-2 p-1 bg-red-500 text-white rounded"
            >
              {" "}
              Delete
            </button>
            {editingUser && editingUser?._id === user._id && (
              <EditUserForm user={editingUser} onUserUpdated={fetchUsers} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
