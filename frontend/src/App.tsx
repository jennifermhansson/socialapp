import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import FeedPage from "./pages/FeedPage";
import "./index.css";

export type User = {
  username: string;
  email: string;
};

export type Auth = {
  token: string;
  user: User;
};

function loadAuth(): Auth | null {
  try {
    const stored = localStorage.getItem("auth");
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function App() {
  const [auth, setAuth] = useState<Auth | null>(loadAuth);

  const handleLogin = (token: string, user: User) => {
    const next = { token, user };
    setAuth(next);
    localStorage.setItem("auth", JSON.stringify(next));
  };

  const handleLogout = () => {
    setAuth(null);
    localStorage.removeItem("auth");
  };

  if (!auth) {
    return <AuthPage onLogin={handleLogin} />;
  }

  return <FeedPage auth={auth} onLogout={handleLogout} />;
}

export default App;
