import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./setup";
import { FirebaseError } from "firebase/app";
import { storeUserId } from "../utils";

export async function loginUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    console.log("User credential :", userCredential.user.uid);
    storeUserId(userCredential.user.uid);
    return true;
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.log(error.code);
      switch (error.code) {
        case "auth/wrong-password":
        case "auth/invalid-credential":
          alert("Invalid email or password");
          break;

        case "auth/invalid-email":
          alert("Invalid email format");
          break;

        default:
          alert("Something went wrong");
      }
    }
  }
}
