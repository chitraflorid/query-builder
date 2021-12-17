import React, {useContext} from 'react';
import EnterpretModal from '../common/enterpret-modal/EnterpretModal';
import QueryProvider from './providers/QueryProvider';
import QueryGroupFilter from './QueryGroupFilter';
import QueryBuilderFooter from './QueryBuilderFooter';
import QueryResult from './QueryResult';
import { QueryContext } from './context/queryContext';
import axios from 'axios';

const QueryBuilder = () => {
    const queryContext = useContext(QueryContext);
    const { groupFilter, query, cancelQuery, updateQuerySubmit} = queryContext;
    const div = document.createElement("div");
    document.body.append(div);
    
    const handleFinishBtnClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const postData = async () => {
            try {
                const res = await new Promise(() => {
                    setTimeout(() => console.log("query submitted!!!"), 2000);
                });
                //axios.post('', {queryObj: groupFilter});
                updateQuerySubmit(res);
            } catch(err) {
                updateQuerySubmit(err);
            }
        };
        postData();

        
        console.log("submit query!");        
    }
    
    const handleCancelClick = (e) => {
        // e.preventDefault();
        e.stopPropagation();
        cancelQuery();
    };
    
    return (
        <EnterpretModal container={div}>
            <QueryResult query={query} />
            <QueryGroupFilter grpFilter={groupFilter} />
            <QueryBuilderFooter handleCancel={handleCancelClick} handleSubmit={handleFinishBtnClick} />
        </EnterpretModal>
    );
};

export default QueryBuilder;
