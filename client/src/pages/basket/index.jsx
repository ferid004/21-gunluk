import React, { useEffect, useState } from 'react'
import './index.scss'

import { useUser } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'

function Basket() {

  // const { User, setUser, LoginUser } = useUser()
  const { User, setUser, LoginUser, addbasket,art,azalt,basketdelet  } = useUser()

  console.log(User);
  ///
  const navigatee = useNavigate();
  useEffect(() => {
      if (!User) {
          navigatee('/login');
      }
  }, [User, navigatee]);


  const navigate=useNavigate()

  function refresh(item,callback) {
    callback(item)
    navigate('/basket')
  }

  return (
    <>
    {!User?''
    
    :<div id='basket'>
    <div className="my">
      <h3>My Basket</h3>
    </div>
    
  <div className="container">
    {User.basket && User.basket.map((item) => (
      <div className='bigbox' key={item._id}>
        <div className="imgbox">
          <img src={item.src} alt="" />
        </div>
        <div className="text">
          <div className='name'>{item.name}</div>
          <div className='info'>{item.info}</div>
          <div className='price'>Price: ${item.price}</div>
          <div className="countbox">
            <div onClick={()=>refresh(item,art)} className="countbtn custom-btn btn-9">+</div>
            <div className='count'>{item.count}</div>
            <div onClick={()=>refresh(item,azalt)} className="countbtn custom-btn btn-9">-</div>
          </div>
          <div className="total_price">
            Total:$ {item.price*item.count}
          </div>
          <div onClick={()=>refresh(item,basketdelet)} className="countbtn custom-btn btn-9">delete</div>
        </div>
      </div>
    ))}
  </div>
  

</div>}
    </>

)
}

export default Basket