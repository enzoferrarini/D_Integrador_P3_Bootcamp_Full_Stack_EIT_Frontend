import React, { useEffect, useRef} from "react";

const Sticky = ({ show, msg , extraMsg}) => {
  const stickyRef = useRef();

  useEffect(() => {
    if (show) {
      stickyRef.current.className = "sticky mostrar";
    } else {
      stickyRef.current.className = "sticky";
    }
  }, [show]);

  return (
    <div id="mensajeFlotante" ref={stickyRef} className="sticky">
      <div className="sticky__header">
        <div></div>
        <strong>Mensaje</strong>
      </div>
      <div className="sticky__body">
        <p id="idMsgSticky">{msg} {extraMsg?<><br/><strong>{extraMsg}</strong></>:null}</p>
        
      </div>
    </div>
  );
};

export default Sticky;
