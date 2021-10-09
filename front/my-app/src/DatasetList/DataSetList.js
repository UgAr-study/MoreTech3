import React from "react";
import DatasetItem from "./DatasetItem"
import PropTypes from "prop-types"

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function DatasetList(props) {
    return(
        <ul style={styles.ul}>
            {
                props.dataSetArr.map(ds => {
                    return <DatasetItem dataset={ds} key={ds.id} selectDatasetFunc={props.selectDatasetFunc} 
                                     selectFeaturesFunc={props.selectFeaturesFunc} getMarginLeft={() => { return (ds.id * 100 + 100);}}/>
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