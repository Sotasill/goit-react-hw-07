import css from "./ContactForm.module.css";
import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ValidationShema from "../../validationshema"; // Ensure this is correctly imported
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const initialValues = {
  name: "",
  number: "",
};

function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ id: nanoid(), ...values }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ValidationShema}
    >
      <Form className={css.form}>
        <div className={css.formElementWrapper}>
          <label htmlFor={nameFieldId} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.input}
            placeholder="Enter your name"
          />
          <ErrorMessage
            name="name"
            component="p"
            className={css.errorMessage}
          />
        </div>
        <div className={css.formElementWrapper}>
          <label htmlFor={numberFieldId} className={css.label}>
            Number
          </label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            className={css.input}
            placeholder="Enter your phone number"
          />
          <ErrorMessage
            name="number"
            component="p"
            className={css.errorMessage}
          />
        </div>
        <button type="submit" className={css.submitButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
