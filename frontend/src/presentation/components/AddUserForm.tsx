import { useState } from "react";
import { CreateUser } from "../../application/usecases/CreateUser";
import { UserApiService } from "../../infrastructure/api/UserApiService";

interface AddUserFormProps {
  onUserCreated: () => void;
}

const AddUserForm = ({ onUserCreated }: AddUserFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userRepository = new UserApiService();
    const createUser = new CreateUser(userRepository);
    await createUser.execute({ name, email }); // No id is provided
    onUserCreated(); // Refresh the user list
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 text-white">
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
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
