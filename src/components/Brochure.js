import React, { Component } from "react";
import brochurePDF from './../../public/assets/pdf/brochure.pdf';

class Brochure extends Component {
    render(){
        return(
            <div style={{height:'100vh'}}>
                <embed src={brochurePDF} type="application/pdf" width="100%" height="100%"/>
            </div>
              
            
        )  
    }
}

export default Brochure