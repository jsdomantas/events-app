import { useQuery } from 'react-query';
import { getBoughtTickets } from '../../api/tickets';

export const useTickets = () => useQuery(['tickets'], getBoughtTickets);
