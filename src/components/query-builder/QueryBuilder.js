import React, {useContext} from 'react';
import EnterpretModal from '../common/enterpret-modal/EnterpretModal';
import QueryProvider from './providers/QueryProvider';
import QueryGroupFilter from './QueryGroupFilter';
import QueryResult from './QueryResult';
import { QueryContext } from './context/queryContext';

const QueryBuilder = () => {
    const queryContext = useContext(QueryContext);
    const { groupFilter, query } = queryContext;
    const div = document.createElement("div");
    document.body.append(div);
    
    return (
        <EnterpretModal container={div}>
            <QueryResult query={query} />
            <QueryGroupFilter grpFilter={groupFilter} />
        </EnterpretModal>
    );
};

export default QueryBuilder;