import React from "react";
import PDetail from "./data/PersonData.json";
import Blogs from "./blogs";
class Greeting extends React.Component {
  render() {
    const {
      match: { params },
    } = this.props;

    const { id } = params;
   
    return (
      <React.Fragment>
        {PDetail.map((p) =>
          p.id === id ? (
            <div className="container">
              <div className="row">
              <div class="col-4"></div>
              <div class="col-4">
            <div className="contentClass">
              <img className="leadImg" src={p.image}   width="100%" height="auto"/>
              
               </div>
                <div class="col-4"></div>
               </div>
                </div>
              <h1 className="TitleClass">{p.title}</h1> 
              <p className="paraClass">{p.info}</p>
           
            </div>
          ) : (
           ""
          )
        )}
      </React.Fragment>
    );
  }
}
export default Greeting;
