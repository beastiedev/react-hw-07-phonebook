import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3004';

export const getContacts = () => axios.get('/contacts').then((res) => res.data);

export const createContact = (payload) => axios.post('/contacts', payload).then((res) => res.data);

export const removeContact = (id) => axios.delete(`/contacts/${id}`).then((res) => res.data);
