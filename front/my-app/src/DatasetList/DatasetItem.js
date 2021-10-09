import React from "react";
import PropTypes from "prop-types"
import FeaturesItem from "./FeaturesItem";
import { Text } from "react-native-paper";

function DatasetItem({dataset, selectDatasetFunc, selectFeaturesFunc, getMarginLeft}) {
    const classes = []

    if (dataset.isSelected) {
        classes.push('headerAfterSelect')
    } else {
        classes.push('headerBeforeSelect')
    }
    let myMarginLeft = String(getMarginLeft()) + 'px';
    let liStyle = { 
        marginLeft: myMarginLeft
    };
    return(
        <li style={liStyle}>
            <span className={"description"}>{dataset.description}</span>
            <img className={"dataset"} onClick={() => selectDatasetFunc(dataset.id)}></img>
            <img className={classes.join(' ')} onClick={() => selectDatasetFunc(dataset.id)}></img>
            <FeaturesItem selectFeaturesFunc={selectFeaturesFunc} dataset={dataset} fName={dataset.features[0].name} 
                          getMarginTop={() => { return (dataset.features[0].id * 350 + 100);}}/>
        </li>
    )
}

DatasetItem.propTypes = {
    dataset: PropTypes.object,
    selectDatasetFunc: PropTypes.func.isRequired,
    selectFeaturesFunc: PropTypes.func.isRequired,
}

export default DatasetItem