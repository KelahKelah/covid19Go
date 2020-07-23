// So decided to use class components here just for a little change
import React, { Component } from 'react';
import { FaLock } from 'react-icons/fa';
import './Modal.css'

class Modal extends Component {
    // constructor() {
    //     super(props)
    //     this.state = {
    //         // ('Youre ready')
    //     }

    // }

    componentDidMount() {
this.setState()
    }

    render() {
        return(
            <div className='modal-container'>
                <div className='modal-content'>
                    <FaLock />
                    <h2>Dont panic!</h2>
                    <div>Our processes are highly secure</div>
                </div>
            </div>         
        ) 
    }

    
    
}
export default Modal;