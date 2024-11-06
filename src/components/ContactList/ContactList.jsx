import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

function ContactList() {
  // Получение уже отфильтрованных контактов из селектора
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactBox}>
      {contacts.map((contact) => (
        <Contact key={contact.id} data={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
