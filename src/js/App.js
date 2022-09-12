import React from 'react';

const App = () => {
  const title = <h1>App Component</h1>;

  const sendNotification = () => {
    alert('You clicked the button');
  };

  return (
    <>
      <div>{title}</div>
      <button onClick={sendNotification}>Alert</button>
    </>
  );
};

export default App;
