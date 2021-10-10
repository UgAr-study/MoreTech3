import React from "react";
import FeaturesItem from "./FeaturesItem";
import { Text } from "react-native-paper";
import '../App.css'

function DatasetItem({dataset, selectDatasetFunc, selectFeaturesFunc}) {
    const classes = []

    if (dataset.isSelected) {
        classes.push('headerAfterSelect')
    } else {
        classes.push('headerBeforeSelect')
    }

    return (
        <div className="overviewcard">
             
            <div className="dataset" onClick={() => { selectDatasetFunc(dataset.id); }}>
                <div className={"description " + classes.join(' ')}>
                    <p className="text-description">{dataset.description}</p>
                </div>

                <div className="featurelist">{
                    dataset.features.map(f => {
                        return (
                            <FeaturesItem selectDatasetFunc={selectDatasetFunc} selectFeaturesFunc={selectFeaturesFunc} dataset={dataset}
                            feature={f}/>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default DatasetItem