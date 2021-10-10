import '../App.css'
import React from "react";
import DatasetItem from "./DatasetItem"


function DatasetList({ dataSetArr, selectDatasetFunc, selectFeaturesFunc }) {
    return (
        <div className="main-overview">
            {dataSetArr.map(ds => {
                if (ds.isVisible.bySearch && ds.isVisible.byFilters) {
                    return (
                        <DatasetItem dataset={ds} key={ds.id} selectDatasetFunc={selectDatasetFunc} 
                            selectFeaturesFunc={selectFeaturesFunc}/>
                    );
                }
            })}
        </div>
    )
}

export default DatasetList