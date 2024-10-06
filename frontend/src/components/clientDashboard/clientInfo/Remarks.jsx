// import React from 'react'

// const Remarks = () => {
//   return (
//     <>
//     <div className="remarksContainer">
//         <div className="container">
//             <h3>remarks</h3>
//         </div>
//     </div>
      
//     </>
//   )
// }

// export default Remarks






import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Remarks = () => (
  <>
    <Title style={{color: '#fff'}} level={4}>Remarks</Title>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </>
);

export default Remarks;
