import logo from './logo.svg';
import './App.css';
import QueryBuilder from './lib';

function App() {
     const CRITERIA_DATA = [{
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

        const FIELD_DATA = [
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
  const handleFinishBtnClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const postData = async () => {
            try {
                const res = await new Promise(() => {
                    setTimeout(() => console.log("query submitted!!!"), 2000);
                });
                //axios.post('', {queryObj: groupFilter});
                //updateQuerySubmit(res);
            } catch(err) {
                //updateQuerySubmit(err);
            }
        };
        postData();
        console.log("submit query!");        
    };
    
    const handleCancelClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // cancelQuery();
    };
  
    return (
        <QueryBuilder 
            handleCancel={handleCancelClick}
            handleSubmit={handleFinishBtnClick}
            fieldData={FIELD_DATA}
            criteriaData={CRITERIA_DATA} 
        />
  );
}

export default App;
