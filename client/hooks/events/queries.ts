import { useQuery } from 'react-query';
import { getEvent, getEventsByStatus } from '../../api/events';
import { EventStatus } from '../../types/types';

export const useEventDetails = (eventId: string) => useQuery(['event', eventId], () => getEvent(eventId));

export const useEventsByStatus = (status: EventStatus) => useQuery(['events', status], () => getEventsByStatus(status));
