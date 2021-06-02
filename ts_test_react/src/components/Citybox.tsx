import React from 'react';


function Citybox() {
  return (
      <>

     

      <div className="cityBox">
        <div className="cityItem">
          <div className="cityItemName">Baku</div> <div>44 celc</div><button className="cityClose">-</button>
          
        </div>
        <div className="cityItem">
          
          <div className="cityItemName">Moscow</div> <div>44 celc</div><button className="cityClose">-</button>
        </div>
      </div>

      </>
    
  );
}

export default Citybox;