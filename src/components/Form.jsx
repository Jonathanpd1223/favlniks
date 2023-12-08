import React, { useState } from 'react';

function Form({ handleSubmit }){
  const [link, setLink] = useState({ linkName: '', linkURL: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLink(prevLink => ({ ...prevLink, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(link); // Pass the form data up to the parent component
    setLink({ linkName: '', linkURL: '' }); // Reset the form fields
  };

  return(
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="linkName">Link Name:</label>
        <input 
          type="text" 
          id="linkName" 
          name="linkName" 
          value={link.linkName} 
          onChange={handleInputChange} 
        />
      </div>
      <div>
        <label htmlFor="linkURL">Link URL:</label>
        <input 
          type="url" 
          id="linkURL" 
          name="linkURL" 
          value={link.linkURL} 
          onChange={handleInputChange} 
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
