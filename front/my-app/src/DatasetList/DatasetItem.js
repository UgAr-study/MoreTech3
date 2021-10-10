import React from "react";
import PropTypes from "prop-types"
import FeaturesItem from "./FeaturesItem";
import { Text } from "react-native-paper";

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

    return (
        <div style={divStyle}>
            <span className={"description"}>{dataset.description}</span> 
            <span>&nbsp;</span>
            <img className={"dataset"} onClick={() => { selectDatasetFunc(dataset.id); }}></img>
            <img className={classes.join(' ')} onClick={() => { selectDatasetFunc(dataset.id); }}></img>
            <ul>{
                dataset.features.map(f => {
                    return (
                        <FeaturesItem selectFeaturesFunc={selectFeaturesFunc} dataset={dataset}
                        feature={f} getMarginTop={() => { return 0; }}/>
                    );
                })}
            </ul>
        </div>
    )
}

export default DatasetItem