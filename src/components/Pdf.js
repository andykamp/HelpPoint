import React from 'react';
import PDF from 'react-pdf-js';
import { connect } from 'react-redux'; //to get acces to the actioncreater
import { stopLoading } from '../actions'; //all the actions in the actioncreator
import pdf from '../Lonn.pdf'

class MyPdfViewer extends React.Component {
  state = {};

  onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
    this.props.stopLoading();
  }

  onPageComplete = (page) => {
    this.setState({ page });
  }

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  }

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  }

  renderPagination = (page, pages) => {
    let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
    if (page === 1) {
      previousButton = <li className="previous disabled"><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
    }
    let nextButton = <li className="next" onClick={this.handleNext}><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
    if (page === pages) {
      nextButton = <li className="next disabled"><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
    }
    return (
      <nav>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
      );
  }

  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <div>
        <PDF file={pdf} onDocumentComplete={this.onDocumentComplete} onPageComplete={this.onPageComplete} page={this.state.page} />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {  } = state.scroll;

  //createQueue is from the reducer/index and is the reucer!
  return {  };
};

export default connect(mapStateToProps, { stopLoading })(MyPdfViewer);
