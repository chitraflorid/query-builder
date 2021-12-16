import React from 'react';

const QueryResult = ({query}) => {
    return (
       <div className='query-result'>
            <div>Build your Query</div>
            <div>{query}</div>
        </div>
    );
};

export default QueryResult;