import React, {useEffect} from "react";
import ReactDOM from 'react-dom';
//import EnterpretModalHeader from './EnterpretModalHeader';
//import EnterpretModalBody from './EnterpretModalBody';
//import EnterpretModalFooter from './EnterpretModalFooter';

const EnterpretModal = ({container, children}) => {
  useEffect(() => {
      return () => {
        if (container) {
            document.body.removeChild(container);
        }
        container = null;
      }
  }, []);
  
 return ReactDOM.createPortal(children, container);

};

export default EnterpretModal;
