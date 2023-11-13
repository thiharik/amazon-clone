import React from 'react'
import "./Subtotal.css";

import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';


function Subtotal() {
  const [{basket},dispatch]=useStateValue();

  return (
    <div className='Subtotal'>
        <cuurentcurrencyformat 
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
     <button>proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
