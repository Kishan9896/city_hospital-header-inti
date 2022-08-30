import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase";
import { history } from "../History";

export const singUp = (values) => {
  console.log("sagaStore", values);
  return new Promise((reslove, reject) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            sendEmailVerification(auth.currentUser).then(() => {
              reslove("Email Verfication sent!");
            });
          } else {
            // User is signed out
            // ...
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
          reject("This email is already use.");
        }
      });
  });
};

export const singin = (values) => {
  // console.log("singin", values);
  return new Promise((reslove, reject) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user.emailVerified) {
          reslove(user);
          history.push("/");
        } else {
          reject("Please check your email.");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode.localeCompare("auth/wrong-password") === 0) {
          reject("please check your email or password.");
        }
      });
  });
};

export const logoutAPI = (values) => {
  return new Promise((reslove, reject) => {
    signOut(auth)
      .then(() => {
        reslove({ payload: "Logout successfull" });
      })
      .catch((error) => {
        reject(error.code);
      });
  });
};
