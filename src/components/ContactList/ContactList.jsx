// import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsAction } from 'redux/contacts/slice.contacts';
import { getContacts, getFilter } from 'redux/selectors';
import {
  ContactBtn,
  ContactItem,
  ContactText,
  ListUl,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const removeContacts = id => {
    dispatch(deleteContactsAction(id));
  };
  const filteredContacts = useMemo(
    () => contacts.filter(contact => contact.name.includes(filter)),
    [filter, contacts]
  );

  return (
    <ListUl>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <ContactText>
              {name}: {number}
            </ContactText>
            <ContactBtn onClick={() => removeContacts(id)}>Delete</ContactBtn>
          </ContactItem>
        );
      })}
    </ListUl>
  );
};
