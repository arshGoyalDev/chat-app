import { createContext, useContext, useState, useEffect } from "react";

import { auth, db, imageDb } from "../config/firebase";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, setDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { uploadBytes, ref } from "firebase/storage";

const AuthContext = createContext(null);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUserCred = (uid) => {
    // const userRef = doc(db, "users", uid);
    // const userCred = onSnapshot(userRef, (fetchedData) => {
    //   console.log({ ...fetchedData.data() });
    //   setUser({ ...fetchedData.data() });
    // });
    // userCred();
  };

  const createUserDoc = async (uid, username, email) => {
    await setDoc(doc(db, "users", uid), {
      uid: uid,
      username: username,
      name: "",
      email: email,
      about: "",
      profilePic: "",
      chats: {},
    });

    setUser(uid);
    localStorage.setItem("uid", uid);

    return true;
  };

  const signUp = async (username, email, password, setErrorEmail) => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setErrorEmail(false);
      await createUserDoc(userCred.user.uid, username, email);
      getUserCred(userCred.user.uid);

      return true;
    } catch (error) {
      if (error.message.includes("email")) {
        setErrorEmail("Email already in use");
      }
      return false;
    }
  };

  const login = async (email, password, setErrorEmail, setErrorPassword) => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      setErrorEmail(false);
      setErrorPassword(false);
      // getUserCred(userCred.user.uid);

      return true;
    } catch (error) {
      console.log(error.message);
      if (error.message.includes("user")) {
        setErrorEmail("No user found with this email");
        setErrorPassword(false);
      } else if (error.message.includes("password")) {
        setErrorPassword("Wrong password");
        setErrorEmail(false);
      } else if (error.message.includes("internal")) {
        setErrorEmail("Internal error");
        setErrorPassword("Internal error");
      }

      return false;
    }
  };

  const googleAuth = async (form, setLoading, router) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      setUser(result.user.uid);

      await createUserDoc(
        result.user.uid,
        result.user.displayName.replace(/\s/g, "").toLowerCase(),
        result.user.email
      );

      setLoading(false);

      if (form === "sign-up") {
        router.push({
          pathname: "get-started",
        });
      } else if (form === "login") {
        router.push({
          pathname: "login",
        });
      }
    });
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const updateDetails = async (name, about, pic) => {
    const imgRef = ref(imageDb, `profile-pics/${user}`);
    uploadBytes(imgRef, pic);
    await updateDoc(doc(db, "users", user), {
      name: name,
      about: about,
      profilePic: user,
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, signUp, login, logout, googleAuth, updateDetails }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { useAuth };
