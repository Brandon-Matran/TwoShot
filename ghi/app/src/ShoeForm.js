import React from "react"


class ShoeForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            manufacturer: '',
            model_name: '',
            color: '',
            picture_url: '',
            bin: '',
            bins: [],
        }
        this.handleChangeColor = this.handleChangeColor.bind(this)
        this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this)
        this.handleChangeModel = this.handleChangeModel.bind(this)
        this.handleChangeBin = this.handleChangeBin.bind(this)
        this.handleChangePictureUrl = this.handleChangePictureUrl.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


async componentDidMount() {
    const url = 'http://localhost:8100/api/bins/'
    const response = await fetch(url)
    if (response.ok) {
        const data = await response.json();
        console.log(data)
        this.setState({bins: data.bins})
    }
}


  handleChangeManufacturer(event) {
    const value = event.target.value;
    this.setState({ manufacturer: value });
  }


  handleChangeModel(event) {
    const value = event.target.value;
    this.setState({ model_name: value });
  }

  handleChangeColor(event) {
    const value = event.target.value;
    this.setState({ color: value });
  }

  handleChangePictureUrl(event) {
    const value = event.target.value;
    this.setState({ picture_url: value });
  }

  handleChangeBin(event) {
    const value = event.target.value;
    this.setState({ bin: value });
  }


  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    delete data.bins;

    const binUrl = 'http://localhost:8080/api/shoes/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(binUrl, fetchConfig);
    if (response.ok) {
      const newShoe = await response.json();
      console.log(newShoe);
      this.setState({
        manufacturer: '',
        model_name: '',
        color: '',
        picture_url: '',
        bin: '',
      });
    }
  }



    render () {
        return (
            <div className="container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create Your Shoe!</h1>
            <form id="create-shoe-form" onSubmit={this.handleSubmit}>
            <div className="form-floating mb-3">
                <input onChange={this.handleChangeManufacturer} value={this.state.manufacturer} placeholder="" required type="text" name="manufacturer" className="manufacturer form-control" id="manufacturer"/>
                <label htmlFor="manufacturer">Manufacturer</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeModel} value={this.state.model_name} placeholder="" required type="text" name="model_name" className="form-control" id="model_name" />
                <label htmlFor="model_name"> Shoe Model</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeColor} value={this.state.color} placeholder="" required type="text" name="color" className="form-control" id="color"/>
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangePictureUrl} value={this.state.picture_url} required type="text" name="picture_url" id="picture_url" className="form-control" />
                <label htmlFor="picture_url">Picture Url</label>
                </div>
                <select required onChange={this.handleChangeBin} value={this.state.bin} name ="bin" className="form-select" id="bin" >
                  <option value="">Retailer</option>
                  {this.state.bins.map( bin => {
                    return (
                        <option key={bin.closet_name} value={bin.id}>
                            {bin.closet_name}
                        </option>
                    )
                  })}
                </select>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
        )
    }
}


export default ShoeForm
