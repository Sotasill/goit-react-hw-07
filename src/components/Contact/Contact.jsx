import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsApi";

function Contact({ data }) {
  const { id, name, number } = data; // Извлечение свойств из объекта data
  

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.listitem}>
      <p>{name}</p>
      <p>{number}</p>
      <button className={css.delBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
