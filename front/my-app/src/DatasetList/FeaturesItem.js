import React from "react";
import PropTypes from "prop-types"

function FeaturesItem(props) {
    const classesImg = []
    const classesText = []

    function checkSelected(fName) {
        props.dataset.features.map(f => {
            if (f.name === fName) {
                return f.isSelected;
            }
        })
    }

    if (checkSelected(props.fName)) {
        classesImg.push('fItemAfter')
    } else {
        classesImg.push('fItemBefore')
    }
    classesText.push('fItemText')

    let myMarginTop = String(props.getMarginTop()) + 'px';
    let liStyle = { 
        marginTop: myMarginTop
    };

    return(
        <li>
            <img className={classesImg.join(' ')} onClick={() => {
                props.selectFeaturesFunc(props.fName);
                console.log('aaa'); // not working
            }}></img>
            <span className={classesText.join(' ')} >{props.fName}</span>
        </li>
    )
}

export default FeaturesItem 