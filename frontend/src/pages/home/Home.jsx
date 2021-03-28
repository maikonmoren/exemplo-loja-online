import React, { Component } from 'react'
import api from '../../services/api'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

class Home extends Component{
    componentDidMount() {
        const request = api.get('/')
        request.then((response) => {
           console.log(response.data)
        })
            .catch((error) => {
               console.log(error)
            });
    }

    render(){
        return(<>
         Home
        </>)
    }
}

export default Home;