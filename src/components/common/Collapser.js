import { Component } from 'react'
import styled from 'styled-components'
import {
    FaChevronCircleRight,
    FaChevronCircleDown
} from 'react-icons/fa'

const ClpsContainer = styled.div`
    
    button {
        cursor: pointer;
        background: transparent;
        border: none;
        color: aqua;
    }
    .panel-title {
        font-size: 16px;
    }
    .panel-group {
        margin-top: 30px;
    }
    .panel-collapse {
        max-height: 500px;
        overflow: hidden;
        transition: max-height .5s ease;
    }
    .panel-close {
        max-height: 0;
    }
`
class Collapser extends Component {
    constructor(props) {
      super(props);
      this.state = {
        expanded: false
      }
    }
    
    render() {
      return (
          <ClpsContainer>
            <div className="panel-heading">
              <h4 className="panel-title">
                <button
                  onClick={function(){this.setState({expanded:!this.state.expanded})}.bind(this)} >
                    {this.state.expanded ? <FaChevronCircleDown /> : <FaChevronCircleRight /> }
                  </button>
              </h4>
            </div>
            <div className={this.state.expanded ? "panel-collapse": "panel-collapse panel-close"}>
             {this.props.content}
            </div>
        </ClpsContainer>
      );
    }
  }
      
export default Collapser