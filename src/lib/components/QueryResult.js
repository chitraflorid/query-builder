import React, {useContext} from 'react';
import { QueryContext } from '../context/queryContext';

const QueryResult = () => {
    const {query} = useContext(QueryContext);
    
    return (
       <div className='query-result'>
            <div>Build your Query</div>
            <div>{query}</div>
        </div>
    );
};

export default QueryResult;