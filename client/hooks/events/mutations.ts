import { useMutation } from 'react-query';
import { likeEvent, unlikeEvent } from '../../api/events';
import queryClient from '../../utils/queryClient';

export const useLikeEvent = (eventId: string) => useMutation(() => likeEvent(eventId), {
  onSuccess: () => {
    queryClient.invalidateQueries(['event', eventId]);
  },
});

export const useUnlikeEvent = (eventId: string) => useMutation(() => unlikeEvent(eventId), {
  onSuccess: () => {
    queryClient.invalidateQueries(['event', eventId]);
  },
});
