import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;


/*
 steps for authentication
-------------------------
Stwep-1: initial Setup
1. Initial Setup
2. creat web app
3. get configuration
4. initialize firebase
5. Enable auht methoud

----------------------------
step-2: setup component
1. Create Login Component
2. Create Register Component
3. Creat Route for Login and Register

------------------------------
step-3: set auth system
1. set up sign in methord
2. set up sign out methord
3. user state
4. special observer

-------------------------------
step-4: create auth context hook (useAuth)
1. create a auth context
2. create context provider
3. set context Provider context value
3. use Auth Provider
4. create useAuth Hook

-------------------------------
step-5: create private route
1. create private Route
2. set private Route

----------------------------
step-6: Redirect after login
1. after login redirect user to their desired

*/