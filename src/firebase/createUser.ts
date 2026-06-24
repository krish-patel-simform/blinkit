import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./setup";
import { storeUserId } from "../utils";

export async function createUser(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    console.log("User created:", userCredential.user.uid);
    storeUserId(userCredential.user.uid);
    return true;
  } catch (error) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("An account with this email already exists");
          break;

        case "auth/invalid-email":
          alert("Invalid email address");
          break;

        case "auth/weak-password":
          alert("Password should be at least 6 characters");
          break;

        case "auth/network-request-failed":
          alert("Check your internet connection");
          break;

        default:
          alert("Failed to create account");
          console.log(error.code);
      }
    }
    return false;
  }
}
