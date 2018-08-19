import React  from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

const sweetAlert = ({type, message, handleClose, handleCancel}) => {
  return (
    <React.Fragment>
    {(function(){if(type === 'error' || type === 'danger'){
      return(
      <SweetAlert error title="OOPS!" onConfirm={handleClose}>
      {message}
    </SweetAlert> )
  }else if(type === 'success') {
    return(
      <SweetAlert success title="Yeah!" onConfirm={handleClose}>
        {message}
      </SweetAlert>
     )
   }
   else if(type === 'deleteWarning') {
     return(
       <SweetAlert
           warning
           showCancel
           confirmBtnText="Yes"
           confirmBtnBsStyle="danger"
           cancelBtnBsStyle="default"
           title="Are you sure?"
           onConfirm={handleClose}
           onCancel={()=>{handleCancel()}}
       >
           You will not be able to recover this data!
       </SweetAlert>
      )
    }
   else{
     return(
       <SweetAlert warning onConfirm={handleClose}>
         {message}
       </SweetAlert>
      )
   }
 })()}
  </React.Fragment>
  );
};
export default sweetAlert;
