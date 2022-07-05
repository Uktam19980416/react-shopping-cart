import { useState } from 'react';
import Button from '@material-ui/core/Button';

import { CartItemType } from '../App';
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  // const [amount, setAmount] = useState(1);

  // const handleAddToCartClick = () => {
  //   handleAddToCart(item);
  // }

  // const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAmount(Number(event.target.value));
  // }

  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>{item.price}</p>
        {/* <p>{item.category}</p>
        <p>{item.id}</p>
        <p>{item.amount}</p> */}
      </div>
      {/* <div> */}
        {/* <input type="number" value={amount} onChange={handleAmountChange} /> */}
        <Button onClick={() => handleAddToCart(item)}> Add To Cart
          {/* onClick={handleAddToCartClick} <AddShoppingCart /> */}
        </Button>
      {/* </div> */}
    </Wrapper>
  );
}

export default Item;
// Language: typescript
// Path: react-shopping-cart\src\Item\Item.tsx
// Compare this snippet from react-shopping-cart\src\index.tsx:
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { QueryClient, QueryClientProvider } from "react-query";
// 
// const client = new QueryClient();
// 
// ReactDOM.render(
//   <QueryClientProvider client={client}>
//     <App />
//   </QueryClientProvider>,
//   document.getElementById('root')
// );
// 
// // const root = ReactDOM.createRoot(
// //   document.getElementById('root') as HTMLElement
// // );
// // root.render(
// //     <App />
// // );
// 
// Compare this snippet from react-shopping-cart\src\App.tsx:
//