export interface Event {
  id: string;
  type: EventType;
  title: string;
  startingTime: string;
  price: number;
  image: string;
  description: string;
  popular: boolean,
  featured: boolean,
  purchased: boolean,
  liked: boolean,
}

type EventType = 'CONCERT' | 'SHOW';

export type EventStatus = 'featured' | 'popular';
