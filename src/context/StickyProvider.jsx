import React, { useEffect, useState } from "react";
import { StickyContext } from "./StickyContext";

function StickyProvider({ children }) {
  const [showSticky, setShowSticky] = useState(false);
  const [msgSticky, setMsgSticky] = useState("");
  const [extraMsgSticky, setExtraMsgSticky] = useState("");

  useEffect(() => {
    if (showSticky) {
      const intervalRefresf = setInterval(() => closeSticky(), 4000);
      return () => clearInterval(intervalRefresf);
    }
  }, [showSticky]);

  const openSticky = (msgSticky, extraMsgSticky = "") => {
    setShowSticky(true);
    setMsgSticky(msgSticky);
    setExtraMsgSticky(extraMsgSticky);
  };

  const closeSticky = () => {
    setShowSticky(false);
  };

  return (
    <StickyContext.Provider
      value={{ openSticky, closeSticky, showSticky, msgSticky, extraMsgSticky }}
    >
      {children}
    </StickyContext.Provider>
  );
}

export default StickyProvider;
