import {Formik, Form} from "formik"

export default function CustomForm({children, initialValues,onSubmit, buttonText}) {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({isSubmitting,status})=>(
                <>
                    <Form className="form">
                        {children}
                        <button className="form-button" disabled={isSubmitting}>{buttonText}</button>
                    </Form>
                    {//{status?.success&&<div className="bg-green-300 text-green-900 w-1/2 mx-auto mt-10 p-3 rounded-md">{status?.message}</div>}
                    }
                </>
            )}
        </Formik>
    )
}
