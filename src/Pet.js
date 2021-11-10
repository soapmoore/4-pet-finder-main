import React from "react";

export const Pet = ({ pet }) => {
  return (
    <div>
      <h2>
        <pre>{JSON.stringify(pet, null, 2)}</pre>
      </h2>
      <h2>{pet.name}</h2>
    </div>
  );
};
