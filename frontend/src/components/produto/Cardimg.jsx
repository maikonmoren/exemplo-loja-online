import React from 'react'
import PropTypes from 'prop-types'

const Cardimg = (props)=>{
    const {image} = props;
    return (
        <div>
            <img className="produto-img" width="200px" src={image} alt="produto"></img>
        </div>
    )
}

Cardimg.propTypes = {
    image:PropTypes.string.isRequired,
}

export default Cardimg;