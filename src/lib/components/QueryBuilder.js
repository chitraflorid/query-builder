import React, {memo, useContext} from 'react';
import { EnterpretModal} from '../../common/components';
import QueryProvider from '../providers/QueryProvider';
import QueryGroupFilter from './QueryGroupFilter';
import QueryBuilderFooter from './QueryBuilderFooter';
import QueryResult from './QueryResult';

const QueryBuilder = ({handleCancel, handleSubmit, fieldData, criteriaData}) => {
    const div = document.createElement("div");
    document.body.append(div);

    return (
        <QueryProvider fieldData={fieldData} criteriaData={criteriaData}>
            <EnterpretModal container={div}>
                <QueryResult />
                <QueryGroupFilter />
                <QueryBuilderFooter
                    handleCancel={handleCancel}                     handleSubmit={handleSubmit}
                />
            </EnterpretModal>
        </QueryProvider>
    );
};

export default QueryBuilder;
