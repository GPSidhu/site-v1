import { Component } from 'react'
import styled from 'styled-components'

const tooltipColor = '#000'; //rgba(0,0,0,.7);
const tooltipTextColor = '#fff';

const TooltipContainer = styled.span`
    
    position: relative;

    .tooltip-trigger {
        display: inline-block;
        text-decoration: underline;
      }
      
      .tooltip-top {
        bottom: 100%;
        left: 50%;
        padding-bottom: 9px;
        transform: translateX(-50%);
        
        &::after {
          border-left: 9px solid transparent;
          border-right: 9px solid transparent;
          border-top: 9px solid ${tooltipColor};
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .tooltip-bubble {
        //min-width: 120px;
        max-width: 100px;
        position: absolute;
        z-index: 10;
        &::after {
          content: '';
          position: absolute;
        }
      }

      .tooltip-message {
        background: ${tooltipColor};
        border-radius: 3px;
        color: ${tooltipTextColor};
        font-size: .75rem;
        line-height: 1.4;
        padding: .75em;
        text-align: center;
      }
`
class Tooltip extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isVisible: false
      }
      this.show = this.show.bind(this)
      this.hide = this.hide.bind(this)
      
    }
    
    hide () {
      this.setState({isVisible: false})
    }

    show () {
      this.setState({isVisible: true})
    }
  
    render() {
      let message = this.props.message
      let position = this.props.position
      return (
        <TooltipContainer onMouseLeave={this.hide}>
          {this.state.isVisible ?
          <div className={`tooltip-bubble tooltip-${position}`}>
            <div className='tooltip-message'>{message}</div>
          </div> : null
          }
          <span 
            className='tooltip-trigger'
            onMouseOver={this.show}
            >
            {this.props.children}
          </span>
        </TooltipContainer>
      )
    }
}

export default Tooltip;
