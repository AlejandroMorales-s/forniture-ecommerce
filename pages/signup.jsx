import {
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth"
import { useRouter } from "next/router"
import Link from "next/link"
import Input from "../components/forms/Input"
import CustomForm from "../components/forms/LoginForm"
import SocialMediaButtons from "../components/forms/SocialMediaButtons"
import { auth } from "../libs/firebase"

export default function Signup() {
    const router = useRouter()

    const handleSignup = (data, {setSubmitting}) => {
        const {name, email, password} = data

        createUserWithEmailAndPassword(auth, email, password)
        .then(res=>updateProfile(res.user,{
            displayName:name
        }))
        .then(res=>{
            setSubmitting(false)
            router.push('/login')
        })
        .catch(error=>{
            console.log(error)
            setSubmitting(false)
        })
    }
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
