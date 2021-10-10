import React from "react";
import DatasetItem from "./DatasetItem"
import PropTypes from "prop-types"

function DatasetList({ dataSetArr, selectDatasetFunc, selectFeaturesFunc }) {
    return (
        <ul>{
            dataSetArr.map(ds => {
                return <DatasetItem dataset={ds} key={ds.id} selectDatasetFunc={selectDatasetFunc} 
                    selectFeaturesFunc={selectFeaturesFunc} getMargin={() => { 
                        let value = {
                            left: 0, top: 0
                        };
                        value.left = Math.floor((ds.id * 350 + 100) % 1050);
                        value.top = ((ds.id * 350 + 100) - value.left) / 1050;
                        value.top *= 350;
                        return value;
                    }}/>
            })}
        </ul>
    )
}

export default DatasetList