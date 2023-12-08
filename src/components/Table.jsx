import React from "react";
import PropTypes from "prop-types";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
}

const TableBody = ({ linkData, onRemoveLink }) => {
  const rows = linkData.map((row, index) => (
    <tr key={row.id || index}>
      <td>{row.linkName}</td>
      <td>
        <a href={row.linkURL} target="_blank" rel="noopener noreferrer">{row.linkURL}</a>
      </td>
      <td>
        <button onClick={() => onRemoveLink(index)}>Delete</button>
      </td>
    </tr>
  ));

  return <tbody>{rows}</tbody>;
};

TableBody.propTypes = {
  linkData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      linkName: PropTypes.string.isRequired,
      linkURL: PropTypes.string.isRequired
    })
  ),
  onRemoveLink: PropTypes.func.isRequired
};

function Table({ linkData, removeLink }) {
  return (
    <table>
      <TableHeader />
      <TableBody linkData={linkData} onRemoveLink={removeLink} />
    </table>
  );
}

Table.propTypes = {
  linkData: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default Table;