import React, { useEffect, useState } from 'react';

const useLocalJSON = (url) => {
    const [response, setResponse] = React.useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
      try {
        const res = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        const json = await res.json();

        setResponse(json);
      } catch (error) {
        console.log(error);
      }
    };
}, [url]);
    
  return [response, setResponse];
};

export default useLocalJSON;

