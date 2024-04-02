/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Auth/firebase.config";
import PrivateAxios from "../Hooks/PrivateAxios";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleJoin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const userCreate = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email;
      const loggedUser = { email: userEmail };

      setUser(currentUser);
      console.log("currentUserJWT", currentUser);
      setLoading(false);

      ////////////// JWT Function
      if (currentUser) {
        PrivateAxios.post("/taskMate/jwt", loggedUser, {
          withCredentials: true,
        })
          .then((res) => {
            console.log("Get TokensJWT", res.data);
          })
          .catch((error) => {
            console.error("Error getting JWT tokens:", error);
          });
      } else {
        PrivateAxios.post("/taskMate/logout", loggedUser, {
          withCredentials: true,
        })
          .then((res) => {
            console.log("Get Log Out JWT", res.data);
          })
          .catch((error) => {
            console.error("Error logging out JWT:", error);
          });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    googleJoin,
    userCreate,
    userLogin,
    updateUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
