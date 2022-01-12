import React, { useEffect, useState } from "react";

const Async = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(true)
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Hello Bro</h1>
      {isButtonVisible && <button>Button</button> }
    </div>
  );
};

export default Async;
