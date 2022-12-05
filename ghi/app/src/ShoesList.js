import React, { useState } from "react"

class ShoesList extends React.Component {
  constructor() {
    super()
    this.state = {
      "shoes": []
    }
  }

  async componentDidMount() {
    const url = 'http://localhost:8080/api/shoes/'
    let response = await fetch(url)

    if (response.ok) {
      let data = await response.json()
      this.setState({ "shoes": data.shoes })
    }
  }

  async delete(id) {

      const url = `http://localhost:8080/api/shoes/${id}`
      const fetchConfig = {
        method: 'delete',
      }
      const response = await fetch(url, fetchConfig)
      if (response.ok) {
        console.log(`The shoe has been deleted ${id}`)
        this.componentDidMount()
      }
    }


  //   const deleteShoe = async (shoeId) => {
  //     fetch(`http://localhost:8090/api/hats/${shoeId}/`, {
  //         method: 'DELETE',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         }
  //     })
  //     window.location.reload();
  // }
  render () {
//   if(props.shoes === undefined) {
//   return null
// }
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
      {this.state.shoes.map(shoe => {
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
                onClick={() => this.delete(shoe.id)}
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
}}



export default ShoesList
