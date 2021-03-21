import React from 'react';
import  Flyer from './components/flyer';
import Form from './components/form';


function App() {
  return (
    <>
        <div className="row">
          <div className="col-12 col-md-3">
            <Form />
          </div>
          <div className="col-12 col-md-9">
            <Flyer />
          </div>
        </div>
    </>
  );
}

export default App;
