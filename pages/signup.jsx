import {
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth"
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router"
import Link from "next/link"
import Input from "../components/forms/Input"
import CustomForm from "../components/forms/LoginForm"
import SocialMediaButtons from "../components/forms/SocialMediaButtons"
import { database, auth } from "../libs/firebase"
import { useContext, useEffect } from "react";
import { authContext } from '../context/AuthContext' 

export default function Signup() {
    const {user, setUser} = useContext(authContext)
    const router = useRouter()

    const handleSignup = (data, {setSubmitting}) => {
        const {name, email, password} = data

        createUserWithEmailAndPassword(auth, email, password)
        .then(async (result)=>{
            await updateProfile(result.user,{
                displayName:name
            })
            await setDoc(doc(database, "users", result.user.uid),{
                role:"REGULAR"
            })

            return {
                id: result.user.uid
            }
        })
        .then(({id})=>{
            setSubmitting(false)
            setUser({
                name: name,
                email: email,
                id,
                logout: false
            })
            router.push('/home')
        })
        .catch(error=>{
            console.log(error)
            setSubmitting(false)
        })
    }

    useEffect(() => {
        if(!user.logout) router.push('/home')
    }, [user.logout])

    return (
        <div className="form-container">
        <h2>Regístrate</h2>
        <CustomForm 
            initialValues={{
                name:"",
                email: "",
                password:""
            }}
            onSubmit={handleSignup}
            buttonText="Registrarme ahora"
        >
            <Input type="text" placeholder="Jhon" name="name" label="Nombre"/>
            <Input type="email" placeholder="example@example.com" name="email" label="Email"/>
            <Input type="password" placeholder="********" name="password" label="Contraseña"/>
        </CustomForm>
        <Link href="/login">
            <p className="form-link">¿Ya tienes una cuenta? Inicia sesión</p>
        </Link>
        <SocialMediaButtons/>
    </div>
    )
}
