import axios from 'axios';

const api = axios.create({
  baseURL: "https://randomuser.me/api/"
})

export async function getContact() {
   let response = await api.get(`contact`);
  return response.data;  
}

export async function getContactInfo(id) {
  let response = await api.get(`${id}`);
  return response.data;
}

