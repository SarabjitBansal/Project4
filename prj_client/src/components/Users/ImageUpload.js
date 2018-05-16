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
    let files = this.state.file.name;
    let data = new FormData();
    console.log("Filename",files);
    this.setState({ onDrop: true });
    data.append("image", files);

    const url = `http://localhost:3333/users/${this.props.user.id}.json`;
    axios({
      url,
      method: "patch",
      data: data,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    }).then(res => {
      console.log(res);
      // if (res.status === 200) {
      //   this.setState(prevState => ({
      //     onDrop: !prevState.onDrop
      //   }));
      // }
    });


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
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
          <input className="fileInput"
            type="file"
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
