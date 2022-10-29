import React, { useEffect, useState } from 'react';

function Loading(props) {
    const [timeOut, setTimeOut] = useState('Loading...')

    useEffect(()=>{
        setTimeout(() => {
            setTimeOut("Unknown Error?")
        }, 10000);
    },[])


    return (
        <div className=' p-5 py-20 text-center w-full overflow-hidden'>
            <p className="animate-ping font-bold">    
            {timeOut}
            </p>
        </div>
    );
}

export default Loading;