function ShoesList(props) {
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
          </tr>
        </thead>
        <tbody>
        {props.shoes.map(shoe => {
            return (
                <tr key={ shoe.id }>
                <td>{shoe.manufacturer}</td>
                <td>{shoe.model_name}</td>
                <td>{shoe.color}</td>
                </tr>

            )
        })}

        </tbody>
      </table>
    );
  }



export default ShoesList
