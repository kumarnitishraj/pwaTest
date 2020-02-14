import React, { Component } from 'react'
import QrScanner from 'qr-scanner'; 
import QrScannerWorkerPath from "../node_modules/qr-scanner/qr-scanner-worker.min.js";
QrScanner.WORKER_PATH = QrScannerWorkerPath;

class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      result: 'No result',
    }
    this.videoRef = React.createRef();
    this.selectRef = React.createRef();
    this.camHasCameraRef = React.createRef();
    this.camQrResultTimestamp = React.createRef();
    // this.handleScan = this.handleScan.bind(this)
  }

  componentDidMount() {
    
    QrScanner.hasCamera().then(hasCamera => {
      const qrScanner = new QrScanner(this.camref, result => console.log('decoded qr code:', result));
      qrScanner.start();
    });
    
    
  }

  setResult = (label, result) => {
    label.textContent = result;
    this.camQrResultTimestamp.textContent = new Date().toString();
    label.style.color = 'teal';
    clearTimeout(label.highlightTimeout);
    label.highlightTimeout = setTimeout(() => label.style.color = 'inherit', 100);
  }
  
  render(){
 
    return(
      <div>
        <div>
          <h1>Scan from WebCam:</h1>
          <b>Device has camera: </b>
          <span id="cam-has-camera" ref={this.camHasCameraRef}></span>
          <br/>
          <video muted playsinline id="qr-video" ref={refs=> this.camref=refs}></video>
        </div>

        <div>
          <br/>
      </div>
        <b>Detected QR code: </b>
        <span id="cam-qr-result">None</span>
        <br/>
        <b>Last detected at: </b>
        <span id="cam-qr-result-timestamp" ref={this.camQrResultTimestamp}></span>
        <hr/>

      </div>
    )
  }
}

export default Test;