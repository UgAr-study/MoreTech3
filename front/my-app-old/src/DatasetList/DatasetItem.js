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

function DatasetItem({dataset, selectDatasetFunc, selectFeaturesFunc}) {

    const classes = []

    if (dataset.isSelected) {
        classes.push('imageAfterSelect')
    } else {
        classes.push('imageBeforeSelect')
    }

    return(
        <li >
            <img className={"description"} onClick={() => selectDatasetFunc(dataset.id)}></img>
            <img className={classes.join(' ')} onClick={() => selectDatasetFunc(dataset.id)}></img>
            <h2>
                <title>word-wrap</title>
                {dataset.description}
            </h2>
            <fs><FeaturesItem selectFeaturesFunc={selectFeaturesFunc} dataset={dataset} fName={dataset.features[0].name}/></fs>
            {/* {dataset.description} */}

            {/* <button className="rm">&times;</button> */}
        </li>
    )
}

DatasetItem.propTypes = {
    dataset: PropTypes.object,
    selectDatasetFunc: PropTypes.func.isRequired,
    selectFeaturesFunc: PropTypes.func.isRequired,
}

export default DatasetItem