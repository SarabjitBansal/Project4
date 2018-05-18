
import React, { Component } from 'react';
import axios from "axios";


class ImageUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
    // save file to database with ajax connection
    // debugger;
    let files = this.refs.file.files[0]; //this.state.file; //.name
    let data = new FormData();
    console.log("data",data);
    console.log("Filename",files);
    data.append("image", files);
    console.log("data",data);
    debugger;


    let url = `http://localhost:3333/users/${this.props.user.id}.json`;
    console.log(url);
      debugger;
    axios({
      url: url,
      method: "patch",
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: data
    })

// code starts
    // const url = `http://localhost:3333/users/${this.props.user.id}.json`;
    // axios({
    //   url,
    //   method: "patch",
    //   data: data,
    //   config: { headers: { "Content-Type": "multipart/form-data" } }
    // }).then(res => {
    //   console.log(res);
    //
    // });


  // code ends

  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    // if (this.props.user.image) {
    //     imagePreviewUrl = this.props.user.image;
    // }

    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} alt={Image} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
          <input className="fileInput"
            type="file" ref="file"
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton"
            type="submit"
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}
export default ImageUpload;
