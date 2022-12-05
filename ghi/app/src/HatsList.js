import React from 'react';

class HatList extends React.Component {
  constructor () {
    super()
    this.state = {
      "hats": []
    }
  }
async componentDidMount() {
  const url = 'http://localhost:8090/api/hats/'
  let response = await fetch(url)

  if (response.ok) {
    let data = await response.json()
    this.setState({"hats": data.hats})
  }
}
async delete(hat) {
  const url = `http://localhost:8090/api/hats/${hat}`
  const fetchConfig = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
    }
}
const response = await fetch(url, fetchConfig)
if (response.ok) {
this.componentDidMount()
}}


render () {
    return (
      <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Fabric</th>
            <th>Style Name</th>
            <th>Color</th>
            <th>Section Number</th>
            <th>Shelf Number</th>
          </tr>
        </thead>
        <tbody>
          {this.state.hats.map(hat => {
            return (
              <tr key={hat.id}>
                <td>{ hat.fabric }</td>
                <td>{ hat.style_name }</td>
                <td>{ hat.color}</td>
                <td><img src={ hat.picture_url } className='img-thumbnail' width="100px" height="100px"/></td>
                <td>{ hat.location.section_number}</td>
                <td>{ hat.location.shelf_number}</td>
                <td>
                  <button onClick={() => this.delete(hat.id)}>Delete</button>
                </td>

              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    );
  }
}

  export default HatList;
