import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

export const sagaStore = (values) => {
  console.log("sagaStore", values);
  return new Promise((reslove, reject) => {
    createUserWithEmailAndPassword(
      auth,
      values.payload.email,
      values.payload.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  });
};
