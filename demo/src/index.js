import React, { Component } from 'react'
import { render } from 'react-dom'

import SimpleRedButton from '../../src/SimpleRedButton/SimpleRedButton'

import Button from '../../src/Button/Button';
import Form from "../../src/Form/Form";
import ModalComp from "../../src/Modal/ModalComp"

import FlatButton from '../../src/FlatButton/FlatButton';

class Demo extends Component {
  state = {
    modalIsOpen: false
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    return <div>
     <Button 
     text={'best button ever'} size='medium' styles={{color:'white'}} buttonColor='blue'
     handleClick = {() => alert('hello world')}
     />
     <Form fields={["input", "textarea", "button"]} />
     <Button 
     text={'Open Modal'} size='medium' styles={{color:'white'}} buttonColor='blue'
     handleClick = {this.openModal}
     />
     <ModalComp
        isOpen={this.state.modalIsOpen}
        closeModal={this.closeModal}
     >
       <div>
         <h1>Inside Modal</h1>
         <p>Modal is rendering all the children passed</p>
       </div>
     </ModalComp>
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))

