import { AuctionResponse } from '../models/ResponseModels/AuctionResponse';
import { BetShortResponseMock } from './BetShortResponseMock';

export const auctionsMock: AuctionResponse[] = [
  {
    id: 1,
    owner: { id: 1, name: 'Peter Pettigrew' },
    card: { id: 'xy5-1', name: 'Venusaur-EX' },
    cardName: 'xy5-1',
    createdAt: '2024-08-12 16:00:00',
    startPrice: 1.0,
    currentBet: BetShortResponseMock[0],
    activeTime: 24,
    minStep: 0.1,
    isAborted: false,
    isFinished: true,
  },
  {
    id: 2,
    owner: { id: 1, name: 'Peter Pettigrew' },
    card: { id: 'dv1-1', name: 'Weedle' },
    cardName: 'dv1-1',
    createdAt: '2024-08-24 16:00:00',
    startPrice: 2.34,
    currentBet: undefined,
    activeTime: 2,
    minStep: 0.12,
    isAborted: false,
    isFinished: false,
  },
  {
    id: 3,
    owner: { id: 2, name: 'Bilbo Baggins' },
    card: { id: 'dp3-1', name: 'Ampharos' },
    cardName: 'dp3-1',
    createdAt: '2024-08-12 16:00:00',
    startPrice: 0.46,
    currentBet: BetShortResponseMock[2],
    activeTime: 24,
    minStep: 0.21,
    isAborted: true,
    isFinished: false,
  },
  {
    id: 4,
    owner: { id: 2, name: 'Bilbo Baggins' },
    card: { id: 'dp3-1', name: 'Ampharos' },
    cardName: 'dp3-1',
    createdAt: '2024-08-12 16:00:00',
    startPrice: 5.46,
    currentBet: BetShortResponseMock[3],
    activeTime: 48,
    minStep: 0.21,
    isAborted: false,
    isFinished: false,
  },
];
