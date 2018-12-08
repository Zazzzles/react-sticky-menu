import React, { Component } from 'react';

import '../styles/sticky.css'

class StickyMenu extends Component {

   constructor(props){
       super(props)
       this.state = {
        headerSticky: false
       }
       this.topOffset = 0
   }

    componentDidMount () {
        this.topOffset = this.refs.wrapper.offsetTop
        window.addEventListener('scroll', () =>{
          if(this.topOffset < window.pageYOffset){
            this.setState({
                headerSticky: true
            })
          }else{
            this.setState({
                headerSticky: false
            })
          }
        })
    }

    shouldComponentUpdate (next) {
        return next.headerSticky !== this.state.headerSticky
    }

    render() {
        const { headerSticky } = this.state 
        return(
            <div className={`sticky-wrapper ${headerSticky ? 'sticky' : ''}`} ref='wrapper'>
                {this.props.children}
            </div>
        );
    }
}

export default StickyMenu;