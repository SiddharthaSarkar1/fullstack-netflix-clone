import { useAuthStore } from "../../store/authUser";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";

const HomePage = () => {
  const {user, logout} = useAuthStore();
  return (
    <div>
      {
        user ? <HomeScreen /> : <AuthScreen />
      }

      <button onClick={() => logout()}>Logout</button>
    </div>
  )
}

export default HomePage;