import axios from 'axios';
import { Event, EventStatus } from '../types/types';

const BASE_URL = 'http://localhost:3001';

const headers = {
  'Content-Type': 'application/json',
};

export const getEventsByStatus = async (status: EventStatus): Promise<Array<Event>> => {
  const { data } = await axios.get(`${BASE_URL}/events/${status}`, { headers });
  return data;
};

export const getEvent = async (eventId: string): Promise<Event> => {
  const { data } = await axios.get(`${BASE_URL}/event/${eventId}`, { headers });
  return data;
};

export const likeEvent = async (eventId: string): Promise<Event> => {
  const { data } = await axios.post(`${BASE_URL}/event/like`, { id: eventId }, { headers });
  return data;
};

export const unlikeEvent = async (eventId: string): Promise<Event> => {
  const { data } = await axios.delete(`${BASE_URL}/event/unlike`, { data: { id: eventId }, headers });
  return data;
};
