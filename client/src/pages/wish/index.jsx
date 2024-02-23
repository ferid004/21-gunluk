import React, { useEffect, useState } from 'react'
import './index.scss'

import { useUser } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'

function Wish() {

  // const { User, setUser, LoginUser } = useUser()
  const { User, setUser, LoginUser, addbasket,art,azalt,basketdelet,addwish  } = useUser()

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
    navigate('/wish')
  }



  const truncateInfo = (info, maxLength) => {
    if (info.length > maxLength) {
        return info.substring(0, maxLength) + '...';
    }
    return info;
}

  return (
    <>
    {!User?''
    
    :<div id='basket'>
    <div className="my">
      <h3>My Wish</h3>
    </div>
    
  <div className="container">
    {User.wishlist && User.wishlist.map((item) => (
      <div className='bigbox' key={item._id}>
        <div className="imgbox">
          <img src={item.src} alt="" />
        </div>
        <div className="text">
          <div className='name'>{item.name}</div>
          <div className='info'>{truncateInfo(item.info, 32)}</div>
          <div className='price'>Price: ${item.price}</div>
          <div className="countbox">
          </div>
          <div className="total_price">
          </div>
          <div onClick={()=>refresh(item,addwish)} className="countbtn custom-btn btn-9">delete</div>
        </div>
      </div>
    ))}
  </div>
  

</div>}
    </>

)
}

export default Wish