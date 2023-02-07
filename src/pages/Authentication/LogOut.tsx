import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { logOutNew } from "../../api/logOut";
import { AuthContext } from "../../AuthProvider";

const LogOut = () => {
  const { authenticatedUserName, setAuthenticatedUserName } =
    useContext(AuthContext);
  const [isHandlingLogOut, setIsHandlingLogOut] = useState(false);
  const [successLogOut, setSuccessLogOut] = useState(false);

  const handleLogOut = async () => {
    setIsHandlingLogOut(true);
    try {
      const response = await logOutNew();
      if (response.data) {
        setAuthenticatedUserName("");
        setSuccessLogOut(true);
      } else {
        setSuccessLogOut(false);
      }
    } catch (error) {
      console.log(error);
      setSuccessLogOut(false);
    }
    setIsHandlingLogOut(false);
  };

  useEffect(() => {
    handleLogOut();
  });

  return (
    <>
      {!isHandlingLogOut && successLogOut && !authenticatedUserName && (
        <Navigate to="/authentication/log-in" replace={true} />
      )}
    </>
  );
};

export default LogOut;
