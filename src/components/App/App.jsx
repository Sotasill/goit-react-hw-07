import css from "./App.module.css";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { useSelector, useDispatch } from "react-redux";
import { selectError, selectLoading } from "../../redux/contactsSlice";

import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.mainWrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader>Loading, please wait</Loader>}
      {error && <Error>Error!!!! </Error>}
      <ContactList />
    </div>
  );
}

export default App;
