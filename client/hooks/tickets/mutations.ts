import { useMutation } from 'react-query';
import { buyTickets } from '../../api/tickets';
import queryClient from '../../utils/queryClient';

export const useBuyTickets = (eventId: string) => useMutation(() => buyTickets(eventId), {
  onSuccess: () => {
    queryClient.invalidateQueries(['event', eventId]);
    queryClient.invalidateQueries(['tickets']);
  },
});
