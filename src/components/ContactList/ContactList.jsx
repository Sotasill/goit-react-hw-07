import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

function ContactList() {
    const contacts = useSelector(selectFilteredContacts)
     const filter = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactBox}>
      {visibleContacts.map((contact) => (
        <Contact
          key={contact.id}
          data={contact}
        />
      ))}
    </ul>
  );
}

export default ContactList;




