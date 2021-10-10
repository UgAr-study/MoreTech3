import React from "react";
import '../App.css'

function FeaturesItem({selectDatasetFunc, selectFeaturesFunc, dataset, feature}) {
    const classesImg = []
    const classesText = []

    if (feature.isSelected) {
        classesImg.push('fItemAfter')
    } else {
        classesImg.push('fItemBefore')
    }
    classesText.push('fItemText')

    return(
        <div className="feature">
            <div className={classesImg.join(' ')} onClick={() => { 
                selectFeaturesFunc(dataset.id, feature.id);
                selectDatasetFunc(dataset.id);
            }}></div>
            <div className={classesText.join(' ')} onClick={() => { 
                selectFeaturesFunc(dataset.id, feature.id);
                selectDatasetFunc(dataset.id);
            }}>{feature.name}</div>
        </div>
    )
}

export default FeaturesItem