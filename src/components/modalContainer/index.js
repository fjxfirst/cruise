import {Component} from 'react'
import ReactDOM from 'react-dom'
const modalRoot = document.getElementById('modal-root');
class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  render() {
    const {isShow} = this.props
    if(isShow){
      return ReactDOM.createPortal(
        this.props.children,
        this.el
      )
    }else{
      return null
    }

  }
}
export default ModalContainer