import {
    signInWithEmailAndPassword
} from "firebase/auth"
import Link from "next/link";
import {useRouter} from "next/router";
import { useContext, useEffect } from "react";
import Input from "../components/forms/Input";
import CustomForm from "../components/forms/LoginForm";
import SocialMediaButtons from "../components/forms/SocialMediaButtons";
import { authContext } from "../context/AuthContext";
import { auth } from "../libs/firebase";

export default function Login() {
    const {user, setUser} = useContext(authContext)

    const router = useRouter()

    const handleLogin = (data, {setSubmitting}) => {
        const {email, password} = data
        signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            setSubmitting(false)
            setUser({
                name: res.user.displayName,
                email: res.user.email,
                logout: false
            })
            router.push('/home')
        })
        .catch(error => {
            console.log(error);
            setSubmitting(false)
        })
    }

    useEffect(() => {
        if(!user.logout) router.push('/home')
    }, [user.logout])

    return (
        <div className="form-container">
            <h2>Iniciar sesión</h2>
            <CustomForm 
                initialValues={{
                    email: "",
                    password:""
                }}
                onSubmit={handleLogin}
                buttonText="Iniciar sesión"
            >
                <Input type="email" placeholder="example@example.com" name="email" label="Email"/>
                <Input type="password" placeholder="********" name="password" label="Password"/>
            </CustomForm>
            <Link href="/signup">
                <p className="form-link">¿Aún no tienes cuenta? Crea una ahora</p>
            </Link>
            <SocialMediaButtons/>
        </div>
    )
}
