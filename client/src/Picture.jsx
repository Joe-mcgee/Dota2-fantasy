import React, {Component} from 'react';

class Picture extends Component {
  render() {
    return (
      <div className="row">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"style={style.carousel}>
          <div className="carousel-inner">
            <div className="carousel-item active" >
              <img className="d-block w-100" src="/DOTA-TI-Vancouver-1-1068x560.jpg" alt="First slide"style={style.image}/>
            </div>
            <div className="carousel-item" >
              <img className="d-block w-100" src="TI7 TOP INSIDE.jpg" alt="Second slide"style={style.image}/>
            </div>
            <div className="carousel-item" >
              <img className="d-block w-100" src="maxresdefault.jpg" alt="Third slide"style={style.image}/>
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

const style = {
  carousel : {
    width:'100%'
  },

  image : {
    width:'100%'
  }
}
export default Picture;
