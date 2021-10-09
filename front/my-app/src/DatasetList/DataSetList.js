import React from "react";
import DatasetItem from "./DatasetItem"
import PropTypes from "prop-types"

function DatasetList(props) {
    return(
        <ul style={{liftStyle: 'none'}}>
            {
                props.dataSetArr.map(ds => {
                    return <DatasetItem dataset={ds} key={ds.id} selectDatasetFunc={props.selectDatasetFunc} 
                            selectFeaturesFunc={props.selectFeaturesFunc} getMargin={() => { 
                                let value = {
                                    left: 0, top: 0
                                };
                                value.left = Math.floor((ds.id * 350 + 100) % 1050);
                                value.top = ((ds.id * 350 + 100) - value.left) / 1050;
                                value.top *= 350;
                                return value;
                            }}/>
                })
            }
        </ul>
    )
}

DatasetList.propTypes = {
    dataSetArr: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectDatasetFunc: PropTypes.func.isRequired,
    selectFeaturesFunc: PropTypes.func.isRequired,
    getMargin: PropTypes.func.isRequired,
}

export default DatasetList