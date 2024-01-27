import React from "react";

const CharityDetails = ({name, description, link}) => {
  return (
    <div className="flex-grow-1 ms-3 col-md-9">
      <p>
        <span className="font-weight-bold">Name</span> : {name}
      </p>
      <p>
        <span className="font-weight-bold">Link</span> : <a href={link} class="link-primary">{link}</a>
      </p>
      <p>
        <span className="font-weight-bold">Description</span> : {description}
      </p>

    </div>
  );
};

export default CharityDetails;
