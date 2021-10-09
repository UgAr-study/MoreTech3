import React from "react";
import PropTypes from "prop-types"
import FeaturesItem from "./FeaturesItem";

const styles = {
    li: {
        display: "flex",
        justifyContent: "space-between",
        alingItems: "center",
        padding: ".5rem 1rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        margin: ".5rem"
    },
    input: {
        marginRight: "1rem"
    }
}

const divStyle = {
    margin: '1px'
};
function DatasetItem({dataset, selectDatasetFunc, selectFeaturesFunc, getMarginLeft}) {

    const classes = []

    if (dataset.isSelected) {
        classes.push('imageAfterSelect')
    } else {
        classes.push('imageBeforeSelect')
    }
    let marginLeft = getMarginLeft();
    console.log("MarginLeft = " + marginLeft);
    return(
        <li >
            <div style={divStyle}>
            <img className={"description"} onClick={() => selectDatasetFunc(dataset.id)}></img>
            <img className={classes.join(' ')} onClick={() => selectDatasetFunc(dataset.id)}></img>
            <h2>
                <title>word-wrap</title>
                {dataset.description}
            </h2>
            <fs><FeaturesItem selectFeaturesFunc={selectFeaturesFunc} dataset={dataset} fName={dataset.features[0].name}/></fs>
            {/* {dataset.description} */}
            </div>
        </li>
    )
}

DatasetItem.propTypes = {
    dataset: PropTypes.object,
    selectDatasetFunc: PropTypes.func.isRequired,
    selectFeaturesFunc: PropTypes.func.isRequired,
}

export default DatasetItem