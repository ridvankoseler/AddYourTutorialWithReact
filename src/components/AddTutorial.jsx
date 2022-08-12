import React, { useState } from "react";

const AddTutorial = ({ addTutorial }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTutorial({ title: title, description: desc });
    setTitle("");
    setDesc("");
    
  };
  return (
    <div className='container text-center mt-4'>
      <h1 className='display-6 text-danger'>Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>
            Title
          </label>
          <input
            type='text'
            id='title'
            className='form-control'
            placeholder='Enter your title'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='desc' className='form-label'>
            Description
          </label>
          <input
            type='text'
            id='des'
            className='form-control'
            placeholder='Enter your Description'
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            required
          />
        </div>

        <button type='submit' className='btn btn-info'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
