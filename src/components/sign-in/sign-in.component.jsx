import { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import './sign-in.styles.scss';
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

const defaultFormFields = {
    email: '',
    password: ''
}

function SignIn(){
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        try{
            dispatch(emailSignInStart(email, password));
            resetFormFields();
        } catch(error){
            if(error.code === "auth/invalid-credential"){
                alert("Invalid credentials for account.")
            } else{
                console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    };

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    };

    return(
        <div className="sign-in-container">
            <h2>Already have an account</h2>
            <p>Sign In with your email and password</p>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email} 
                />

                <FormInput 
                    label="Password"
                    type="password"
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password} 
                />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button 
                        type="button"
                        buttonType={BUTTON_TYPE_CLASSES.google} 
                        onClick={signInWithGoogle}
                    >
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    )
};

export default SignIn;