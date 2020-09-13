import React from "react";

const ContactItem = ({ item, onDelete }) => {
  return (
    <li>
      {item.name}: {item.number}{" "}
      <button onClick={() => onDelete(item.id)}>delete</button>
    </li>
  );
};

export default ContactItem;
