import axios from 'axios';
import { Event } from '../types/types';

const BASE_URL = 'http://localhost:3001';

const headers = {
  'Content-Type': 'application/json',
};

export const buyTickets = async (eventId: string): Promise<Event> => {
  const { data } = await axios.post(`${BASE_URL}/tickets/buy/${eventId}`, {}, { headers });
  return data;
};

export const getBoughtTickets = async (): Promise<Array<Event>> => {
  const { data } = await axios.get(`${BASE_URL}/tickets`, { headers });
  return data;
};
