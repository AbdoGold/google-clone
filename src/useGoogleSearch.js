import { useState, useEffect } from 'react';
import API_Key from './Keys';

const CONTEXT_key = "af51721ae59caa0ca"

const  useGoogleSearch = (term) => {
   const [data, setData] = useState(null);

   useEffect(() => {

      const fetchData = async() => { 

          fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_Key}&cx=${CONTEXT_key}&q=${term}`)
            .then(response => response.json())
            .then(result => { 
                setData(result)
            })
          
      } 

      fetchData();

   }, [term])

   return {data} 
}

export default useGoogleSearch;
