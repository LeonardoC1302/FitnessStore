import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { 
    // auth, 
    signInWithGooglePopup, 
    // signInWithGoogleRedirect, 
    createUserDocumentFromAuth 
} from "../../../utils/firebase/firebase.utils";

import SignUp from "../../../components/sign-up/sign-up.component"

function SignIn(){
    // useEffect(() => {
    //     const fetchUser = async() => {
    //         const response = await getRedirectResult(auth);
    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     fetchUser().catch(console.error);
    // }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);

    }

    return(
        <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}> Sign In With Google Popup</button>
        <SignUp />
        {/*<button onClick={signInWithGoogleRedirect}> Sign In With Google Redirect</button>*/}
        </div>
    )
};

export default SignIn;