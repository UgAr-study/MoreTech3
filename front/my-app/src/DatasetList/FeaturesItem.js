import React from "react";
import PropTypes from "prop-types"

function FeaturesItem(props) {
    const classes = []

    function checkSelected(fName) {
        props.dataset.features.map(f => {
            if (f.name === fName) {
                console.log(f.isSelected)
                return f.isSelected;
            }
        })
    }

    if (checkSelected(props.fName)) {
        classes.push('fItemAfter')
    } else {
        classes.push('fItemBefore')
    }

    return(
        <li >
            <img className={classes.join(' ')} onClick={() => {props.selectFeaturesFunc(props.fName);}}></img>
        </li>
    )
}

FeaturesItem.propTypes = {
    dataset: PropTypes.array,
    fName: PropTypes.string,
    selectFeaturesFunc: PropTypes.func.isRequired,
}

export default FeaturesItem 