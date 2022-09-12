import {Formik, Form} from "formik"
import Spinner from "../Spinner"

export default function CustomForm({children, initialValues,onSubmit, buttonText}) {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({isSubmitting,status})=>(
                <>
                    <Form className="form">
                        {children}
                        <button 
                            type="submit" 
                            className={`${isSubmitting && 'button-disabled'} form-button`} 
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? <Spinner/> : buttonText}
                        </button>
                    </Form>
                </>
            )}
        </Formik>
    )
}
