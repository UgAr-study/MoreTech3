import React from "react";
import PropTypes from "prop-types"
import FeaturesItem from "./FeaturesItem";
import { Text } from "react-native-paper";

function MapFeatures({dataset, selectFeaturesFunc}) {
    dataset.features.map(feature => {
        return (
            <FeaturesItem selectFeaturesFunc={selectFeaturesFunc} dataset={dataset} fName={dataset.features[0].name} 
                          getMarginTop={() => { return (dataset.features[0].id * 350 + 100);}}/>
        );
    });
}

function DatasetItem({dataset, selectDatasetFunc, selectFeaturesFunc, getMargin}) {
    const classes = []

    if (dataset.isSelected) {
        classes.push('headerAfterSelect')
    } else {
        classes.push('headerBeforeSelect')
    }
    let myMarginLeft = String(getMargin().left) + 'px';
    let myMarginTop = String(getMargin().top) + 'px';
    let divStyle = { 
        marginLeft: myMarginLeft,
        marginTop: myMarginTop,
        width: '0px',
        height: '0px'
    };
    console.log(dataset.id);
    console.log(divStyle);

    return(
        <div style={divStyle}>
            <span className={"description"}>{dataset.description}</span> 
            <span>&nbsp;</span>
            <img className={"dataset"} onClick={() => selectDatasetFunc(dataset.id)}></img>
            <img className={classes.join(' ')} onClick={() => selectDatasetFunc(dataset.id)}></img>
        </div>
    )
}

DatasetItem.propTypes = {
    dataset: PropTypes.object,
    selectDatasetFunc: PropTypes.func.isRequired,
    selectFeaturesFunc: PropTypes.func.isRequired,
}

export default DatasetItem