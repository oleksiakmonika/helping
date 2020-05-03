import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
    <div>
        <Formik
            initialValues={{ name: '', email: '',  massage:'' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <form className='form' onSubmit={handleSubmit}>
                    <div>   <input
                        className='name'
                        type="imput"
                        name="name"
                        label='Wpisz swoje imię'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Monika"
                        value={values.name}
                    />
                    <input
                        className='email'
                        type="email"
                        name="email"
                        label='Wpisz swój email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="monika@gmail.com"
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}</div>
                    <textarea
                        className='textArea'
                        label="Napisz wiadomość"
                        type="massage"
                        name="massage"
                        rows="6"
                        onChange={handleChange}
                        placeholder="Wpisz wiadomość ..."
                        value={values.massage}
                    />
                    {errors.password && touched.password && errors.password}
                    <button className='button' type="submit" disabled={isSubmitting}>
                        Wyślij
                    </button>
                </form>
            )}
        </Formik>
    </div>
);
export default Basic;