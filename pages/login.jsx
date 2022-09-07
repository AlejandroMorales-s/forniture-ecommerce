
import Link from "next/link";
import Input from "../components/forms/Input";
import CustomForm from "../components/forms/LoginForm";
import SocialMediaButtons from "../components/forms/SocialMediaButtons";

export default function login() {
    const handleLogin = (data, {setSubmitting}) => {
        
    }
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
