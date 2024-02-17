import React, { useEffect, useState } from 'react'

function useLocalStroge(strogename) {
    const [profil, setProfil] = useState(localStorage.getItem(strogename)?JSON.parse(localStorage.getItem(strogename)):null);
    useEffect(() => {
        localStorage.setItem(strogename,JSON.stringify(profil));
    
    }, [profil])
    function update() {
        localStorage.setItem(strogename,JSON.stringify(profil));
    }
    
  return [profil,setProfil,update]
}

export default useLocalStroge