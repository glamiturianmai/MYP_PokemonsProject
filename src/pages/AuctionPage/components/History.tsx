import './Components.scss';
import { AuctionCard } from './AuctionCard/AuctionCard.tsx';
import { AuctionCardActiveResponse } from '../../../models/ResponseModels/AuctionCardActiveResponse.tsx';
export const History = () => {
    
    const auctionCardList: AuctionCardActiveResponse[] = [
        {
            id: 1,
            name: 'card1',
            owner: 'sdsdsasx',
            lastBet: 1445,
            timeEnd: '12:23',
            date: '12.08',
          },

          {
            id: 2,
            name: 'card2',
            owner: 'dcdcdsdc',
            lastBet: 21,
            timeEnd: '21:54',
            date: '12.08'
          },
        ]
    return (
        <div> 
            <h1> Here are all the cards you participated in auctions!</h1>
            <div className='cards'> 
            {auctionCardList.map((card) => (
          <AuctionCard
            type="history"
            card={{ ...card }}
          />
        ))}
        </div>
        </div>
    )
                          
}