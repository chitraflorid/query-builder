import React from 'react';
import EnterpretDropdown from '../common/EnterpretDropdown';
import EnterpretButton from '../common/EnterpretButton';


const QueryFilterItem = ({parentGrpFilterId, filterId, filterIndx, field, condition, value, handleFilterChange, handleRemoveFilterBtnClick, handleAddFilterBtnClick}) => {
    const fieldData = [
        {
            optgroup: 'PREDICTION',
            id: '111',
            options: [
                {
                    id: 11, 
                    text: 'Theme', 
                    value:'theme'
                },
                {
                    id: 22, 
                    text:'Sub-theme', 
                    value: 'sub-theme'
                },
                {
                    id:33,
                    text:'Reason',
                    value:'reason'
                },
                {
                    id: 44,
                    text: 'Language',
                    value: 'language'
                },
                {
                    id:55,
                    text:'Source',
                    value: 'source'
                },
                {
                    id: 66, 
                    text: 'Rating', 
                    value: 'rating'
                },
                {
                    id: 77,
                    text:'Time Period', 
                    value: 'time period'
                }
                ]
        },
        {
            optgroup: 'COMMON',
            id: '112',
            options: [{
                    id:78,
                    text:'Customer ID',
                    value: 'customer id'
            }]
        }
    ];
    
    const conditionData = [
        {
            options: [
                {
                    id: 21,
                    text: 'Equals', 
                    value: '=='
                },
                {
                    id: 22, 
                    text: 'Does not equal', 
                    value: '!='
                },
                {
                    id: 23, 
                    text:'Like', 
                    value: 'like'
                },
                {
                    id: 34,
                    text:'Not like',
                    value: 'not like'
                }, 
                {
                    id: 67,
                    text: 'Is Empty',
                    value: 'is empty'
                }, 
                {
                    id: 78, 
                    text: 'Is', 
                    value: 'is'
                },
                {
                    id: 88, 
                    text:'Is not', 
                    value: 'is not'
                }
            ]
        }
        ];
                            
   const criteriaData = [
       {
           options: [
               {
                   id: 55,
                   text:'lll1',
                   value: 'lll1'
               }, 
               {
                   id: 66,
                   text: 'llll2',
                   value: 'lll2'
               },
               {
                   id: 77,
                   text: 'llll434',
                   value: 'llll434'
               },
               {
                   id: 88,
                   text: 'llll5454',
                   value: 'llll5454'
               }
           ]
       }
   ];

    return (
        <li id={filterId} className={'flex-container no-line container query-grp-item'} key={filterId} onChange={handleFilterChange} >
            <div className={'flex-column'}>
            <EnterpretDropdown 
                id={'field'} 
                placeHolderText={'Select field'}  
                className={'dropdown'} 
                labelText={'Field'} 
                data={fieldData} 
                value={field}
            />
        </div>
        <div className={'flex-column'}>
            <EnterpretDropdown 
                id={'condition'} 
                placeHolderText={'Select condition'} 
                labelText={'Condition'} 
                data={conditionData} 
                value={condition} 
                className={'dropdown'} 
            />
        </div>
        <div className={'flex-column'}>
            <EnterpretDropdown 
                id={'value'} 
                placeHolderText={'Select criteria'}  
                labelText={'Criteria'} 
                data={criteriaData} 
                value={value} 
                className={'dropdown'} 
            />
        </div>
        
        { filterIndx > 0 && <div className={'flex-column'}>
            <EnterpretButton 
                id={filterId} 
                type={'icon'} 
                handleClick={handleRemoveFilterBtnClick} 
                type={'delete'}
            >
                Delete
            </EnterpretButton>
        </div>
        }
        </li>
    );
};

export default QueryFilterItem;

 
 