//import the GoogleApiWrapper
 import {GoogleApiWrapper} from 'google-maps-react'
//pass the google info as props to the Map

//export the container WITHIN the GoogleApiWrapper
 export default GoogleApiWrapper({
   apiKey: 'YO KEY!',
   libraries: ['visualization']
 })
