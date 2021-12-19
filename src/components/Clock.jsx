import React, { useEffect } from "react";
import moment from "moment";
const Clock = () => {
  useEffect(() => {
    handle = setInterval(writeTime, 500); // --- this is called at component mount --> []
    console.log('useEffect is called'); // --- this is called at component mount --> []
    return unmountHandler; // --- this is called at component unmount
  },[]);

  let handle = null;

  function mountHandler(){
      
  }

  function unmountHandler() {
    console.log("unmount phase - clock");
    clearInterval(handle);
  }

  function writeTime() {
    const now = moment();
    document.title = now.format("HH:mm:ss");
  }

  return <div>clock</div>;
};
export default Clock;
