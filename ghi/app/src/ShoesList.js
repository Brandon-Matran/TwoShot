import React from "react"

function ShoesList(props) {

  const deleteShoe = async (shoeId) => {

    fetch(`http://localhost:8080/api/shoes/${shoeId}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    window.location.reload();
}
  if (props.shoes === undefined) {
    return null
  }
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Manufacturer</th>
          <th>Model Name</th>
          <th>Color</th>
          <th>Bin</th>
        </tr>
      </thead>
      <tbody>
        {props.shoes.map((shoe) => {
          console.log(props.shoes.map)
          return (
            <tr key={shoe.id}>
              <td>{shoe.manufacturer}</td>
              <td>{shoe.model_name}</td>
              <td>{shoe.color}</td>
              <td>{shoe.bin}</td>
              <td>
              <button
                type="button"
                className="button"
                value={shoe.id}
                onClick={() => deleteShoe(shoe.id)}
              >
                Delete
              </button>
              </td>

            </tr>


          )
        })}

      </tbody>
    </table>
  );
}



export default ShoesList
