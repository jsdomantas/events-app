import React from 'react';
import {
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import { QueryClientProvider } from 'react-query';
import Details from '../Details';
import queryClient from '../../utils/queryClient';
import { getEvent, likeEvent } from '../../api/events';
import { buyTickets } from '../../api/tickets';
import { Event } from '../../types/types';
import mockedEventResponse from './__fixtures__/mockedEventResponse.json';

const mockProps: any = { navigation: { goBack: jest.fn() }, route: { params: { id: '1' } } };

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={ queryClient }>
    { children }
  </QueryClientProvider>
);

jest.mock('../../api/events');
jest.mock('../../api/tickets');
jest.mock('react-native-maps', () => 'AirGoogleMaps');

const mockedGetEvent = getEvent as jest.Mock<Promise<Event>>;
const mockedLikeEvent = likeEvent as jest.Mock<Promise<Event>>;
const mockedBuyTickets = buyTickets as jest.Mock<Promise<Event>>;

beforeEach(() => {
  mockedGetEvent.mockResolvedValue(mockedEventResponse as Event);
  mockedLikeEvent.mockResolvedValue(mockedEventResponse as Event);
  mockedBuyTickets.mockResolvedValue(mockedEventResponse as Event);
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('Details.tsx', () => {
  it('should let you like the event', async () => {
    const { getByTestId } = render(
      <Wrapper>
        <Details { ...mockProps } />
      </Wrapper>,
    );

    await waitForElementToBeRemoved(() => getByTestId('EventDetails-LoadingSpinner'));
    fireEvent.press(getByTestId('EventDetails-LikeBtn'));
    await waitFor(() => expect(mockedLikeEvent).toHaveBeenCalledWith('1'));
  });
  it('should let you buy a ticket', async () => {
    const { getByText } = render(
      <Wrapper>
        <Details { ...mockProps } />
      </Wrapper>,
    );

    fireEvent.press(getByText('BUY A TICKET'));
    await waitFor(() => expect(mockedBuyTickets).toHaveBeenCalledWith('1'));
  });
});
