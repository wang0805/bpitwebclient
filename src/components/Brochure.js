import React, { Component } from "react";
import brochurePDF from './../../public/assets/pdf/brochure.pdf';
//<embed src={brochurePDF} type="application/pdf" width="100%" height="100%"/>
class Brochure extends Component {
    render(){
        return(
            <div style={{height:'100vh'}}>
                <object data={brochurePDF} type="application/pdf" width="100%" height="100%">
                    <p>Unable to display PDF file. <a href={brochurePDF}>Download</a> instead.</p>
                </object>
            </div>
              
            
        )  
    }
}

export default Brochure
