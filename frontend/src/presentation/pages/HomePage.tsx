import AddUserForm from "../components/AddUserForm";
import UserList from "../components/UserList";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Management</h1>
      <AddUserForm onUserCreated={() => window.location.reload()} />
      <UserList />
    </div>
  );
};

export default HomePage;
