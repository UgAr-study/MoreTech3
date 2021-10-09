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
    let myMarginLeft = String(getMarginLeft(dataset.id)) + 'px';
    let liStyle = { 
        marginLeft: myMarginLeft
    };
    return(
        <li style={liStyle}>
            <description>{dataset.description}</description>
            <img className={"dataset"} onClick={() => selectDatasetFunc(dataset.id)}></img>
            <img className={classes.join(' ')} onClick={() => selectDatasetFunc(dataset.id)}></img>
            <fs><FeaturesItem selectFeaturesFunc={selectFeaturesFunc} dataset={dataset} fName={dataset.features[0].name}/></fs>
        </li>
    )
}

DatasetItem.propTypes = {
    dataset: PropTypes.object,
    selectDatasetFunc: PropTypes.func.isRequired,
    selectFeaturesFunc: PropTypes.func.isRequired,
}

export default DatasetItem