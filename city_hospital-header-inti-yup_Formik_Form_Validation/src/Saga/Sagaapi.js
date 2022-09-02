import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
  sendPasswordResetEmail,
  getAuth,
} from "firebase/auth";
import { auth } from "../Firebase";
import { history } from "../History";

export const signUp = (values) => {
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

export const signin = (values) => {
  return new Promise((reslove, reject) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
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

export const signinWithgoogle = () => {
  return new Promise((reslove, reject) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        reslove(user)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        reject(errorCode)
      });
  })
}

export const forgotwithEmail = (values) => {
  return new Promise((reslove, reject) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, values.email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  })
}