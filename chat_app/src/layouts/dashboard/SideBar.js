import React ,{ useState } from 'react';



const getPath = (index) =>{
  switch (index) {
    case 0:
      return '/app'
    
    case 1:
      return '/group'

    case 2:
      return '/call'

    case 3:
      return '/settings'
  
    default:
      break;
  }
};

const getMenuPath = (index) =>{
  switch (index) {
    case 0:
      return '/profile';
      
    case 1:
      return '/settings'
      
    case 2:
      // todo - update token and set isAuth = false
      return '/auth/login'
      
    default:
      break;
  }
}

const SideBar = () => {

  
}

export default SideBar