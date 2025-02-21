import UserList from "./presentation/components/UserList";
import { UserApiService } from "./infrastructure/api/UserApiService";

const App = () => {
  const userRepository = new UserApiService();

  return (
    <div className="container mx-auto p-4">
      <UserList userRepository={userRepository} />
    </div>
  );
};

export default App;
