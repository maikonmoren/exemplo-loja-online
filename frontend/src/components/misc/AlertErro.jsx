import React from 'react';
import PropTypes from 'prop-types'
import './Alert.css'
/*Erro de api*/
const AlertErro = (props) => {
    const {erro} = props
    return(
        <div className="alert-erro">
            {erro}
        </div>
    )
}

AlertErro.propTypes = {
    erro:PropTypes.string.isRequired,
};

export default AlertErro