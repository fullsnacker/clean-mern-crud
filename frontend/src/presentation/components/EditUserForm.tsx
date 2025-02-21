import { useState, useEffect } from "react";
import { User } from "../../domain/entities/User";
import { UpdateUser } from "../../application/usecases/UpdateUser";
import { UserApiService } from "../../infrastructure/api/UserApiService";

interface EditUserFormProps {
  user: User;
  onUserUpdated: () => void;
}

const EditUserForm = ({ user, onUserUpdated }: EditUserFormProps) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userRepository = new UserApiService();
    const updateUser = new UpdateUser(userRepository);
    await updateUser.execute(user._id || "", { name, email });
    onUserUpdated(); // Refresh the user list
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded mr-2"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded mr-2"
        required
      />
      <button type="submit" className="p-2 bg-green-500 text-white rounded">
        Update User
      </button>
    </form>
  );
};

export default EditUserForm;
