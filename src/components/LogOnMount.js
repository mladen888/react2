import React, {useEffect} from 'react'

const LogOnMount = ()=>{
    
    useEffect(() => {
        console.log('Component mounted');
      }, [])
    
    return(
        null
    )
}

export default LogOnMount;