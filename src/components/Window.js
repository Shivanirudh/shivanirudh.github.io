import React, { Component } from 'react';
import { Document, Page, pdfjs} from 'react-pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export class Window extends Component {
    constructor(props){
        super(props);
        this.state = { 
          numPages: null,
          pageNumber: 1 
        };
        this.goToNextPage=this.goToNextPage.bind(this);
        this.goToPrevPage=this.goToPrevPage.bind(this);
      }
    
      onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      };
    
      goToPrevPage = () =>
        this.setState({ pageNumber: this.state.pageNumber - 1 });
      goToNextPage = () =>
        this.setState({ pageNumber: this.state.pageNumber + 1 });
    render() {
        return (
            <div class="cv">
                <Document className="pdf"
                 file={process.env.PUBLIC_URL+"/CV.pdf"}
                 onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page className="page" pageNumber={this.state.pageNumber} width={800}/>
                </Document>
                <div>
                    <nav className="doc-buttons">
                        <br/>
                        <button onClick={this.goToPrevPage}><FontAwesomeIcon icon={faChevronLeft}/></button>
                        &nbsp;
                        Page {this.state.pageNumber} of {this.state.numPages}
                        &nbsp;
                        <button onClick={this.goToNextPage}><FontAwesomeIcon icon={faChevronRight}/></button>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Window
