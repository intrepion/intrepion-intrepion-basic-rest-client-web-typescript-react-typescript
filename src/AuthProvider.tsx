import { createContext, useState, FC, ReactNode, useEffect } from "react";
type AuthContextState = {
  authenticatedUserName: string;
  setAuthenticatedUserName: (authenticatedUserName: string) => void;
};
const contextDefaultValues: AuthContextState = {
  authenticatedUserName: "",
  setAuthenticatedUserName: function (authenticatedUserName: string): void {
    throw new Error(
      "Function not implemented. Cannot use authenticatedUserName: " +
        authenticatedUserName
    );
  },
};
export const AuthContext =
  createContext<AuthContextState>(contextDefaultValues);
interface Props {
  children: ReactNode;
}
const AuthProvider: FC<Props> = ({ children }) => {
  const [authenticatedUserName, setAuthenticatedUserName] = useState<string>(
    contextDefaultValues.authenticatedUserName
  );
  useEffect(() => {
    const authenticatedUserName = localStorage.getItem("authenticatedUserName");
    if (authenticatedUserName) {
      setAuthenticatedUserName(authenticatedUserName);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("authenticatedUserName", authenticatedUserName);
  }, [authenticatedUserName]);
  return (
    <AuthContext.Provider
      value={{
        authenticatedUserName,
        setAuthenticatedUserName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
