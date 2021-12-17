import React, {useContext} from 'react';
import QueryGroupFilter from './QueryGroupFilter';
import QueryResult from './QueryResult';
import { QueryContext } from './context/queryContext';

const QueryComposer = () => {
    const queryContext = useContext(QueryContext);
    const { groupFilter, query, submitQuery } = queryContext;

    return (
        <>
            <QueryResult query={query} />
            <QueryGroupFilter grpFilter={groupFilter} />
        </>
    )
};

export default QueryComposer;