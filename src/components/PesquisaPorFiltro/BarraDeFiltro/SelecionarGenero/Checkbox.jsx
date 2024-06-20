import React from 'react';

const Checkbox = ({ opcoes, genero, setGenero }) => {
  function handleCheck({ target }) {
    if (target.checked) {
      setGenero([...genero, target.value]);
    } else {
      setGenero(genero.filter((item) => item !== target.value));
    }
  }

  return (
    <>
      {opcoes.map(({id, name}) => {
        return (
          <label key={id} className={genero.includes(String(id)) ? 'checado' : ''}>
            <input
              type="checkbox"
              checked={genero.includes(String(id))}
              value={id}
              onChange={handleCheck}
            />
            {name}
          </label>
        );
      })}
    </>
  );
};

export default Checkbox;
