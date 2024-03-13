import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/sign-in/sign-in.component';

import './authentication.styles.scss';

function Authentication(){
    // useEffect(() => {
    //     const fetchUser = async() => {
    //         const response = await getRedirectResult(auth);
    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     fetchUser().catch(console.error);
    // }, []);

    return(
        <div className="auth-container">
            <SignIn />
            <SignUp />
        {/*<button onClick={signInWithGoogleRedirect}> Sign In With Google Redirect</button>*/}
        </div>
    )
};

export default Authentication;