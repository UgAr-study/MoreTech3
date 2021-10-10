import React from "react";
import PropTypes from "prop-types"

function FeaturesItem({selectFeaturesFunc, dataset, feature, getMarginTop}) {
    const classesImg = []
    const classesText = []

    if (feature.isSelected) {
        classesImg.push('fItemAfter')
    } else {
        classesImg.push('fItemBefore')
    }
    classesText.push('fItemText')

    let myMarginTop = String(getMarginTop()) + 'px';
    let liStyle = { 
        marginTop: myMarginTop
    };

    return(
        <li>
            <img className={classesImg.join(' ')} onClick={() => { selectFeaturesFunc(dataset.id, feature.id); }}></img>
            <span className={classesText.join(' ')} onClick={() => { selectFeaturesFunc(dataset.id, feature.id); }}>{feature.name}</span>
        </li>
    )
}

export default FeaturesItem 