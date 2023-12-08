import Table from './Table';
import Form from './Form';
import React, { useState, useCallback } from 'react';

function LinkContainer() {
  const [favLinks, setFavLinks] = useState([]);

  // useCallback ensures these functions are not recreated on every render.
  const removeLink = useCallback((index) => {
    setFavLinks((currentLinks) => currentLinks.filter((_, i) => i !== index));
  }, []);

  const handleSubmit = useCallback((favLink) => {
    setFavLinks((currentLinks) => [...currentLinks, favLink]);
  }, []);

  return (
    <div>
      <h1>My Favorite Links</h1>
      <p>Add a new link with a name and URL to the table!</p>
      {/* Table displays the list of favorite links */}
      <Table linkData={favLinks} removeLink={removeLink} />
      <h1>Add New</h1>
      {/* Form adds a new favorite link */}
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default LinkContainer;
