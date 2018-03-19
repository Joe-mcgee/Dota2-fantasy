import React, {Component} from 'react';

const styleA = {
  maxWidth:'100%',
  maxHeight:'650px',
  width:'1800px',
  height: '430px',
}
const styleB = {
  width:'100%'
}


class Picture extends Component {
  render() {
    return (
      <div className="row">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"style={styleB}>
          <div className="carousel-inner">
            <div className="carousel-item active" >
              <img className="d-block w-100" src="/DOTA-TI-Vancouver-1-1068x560.jpg" alt="First slide"style={styleA}/>
            </div>
            <div className="carousel-item" >
              <img className="d-block w-100" src="TI7 TOP INSIDE.jpg" alt="Second slide"style={styleA}/>
            </div>
            <div className="carousel-item" >
              <img className="d-block w-100" src="maxresdefault.jpg" alt="Third slide"style={styleA}/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      );
  }
}

export default Picture;
