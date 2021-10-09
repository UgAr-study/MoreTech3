import React, { useState } from 'react'
import { Checkbox, Collapse } from 'antd';

const { Panel } = Collapse


function CheckBox(props) {

    var listAll = []
    var list = []

    props.dataSetArr.map(dataset => {
        dataset.features.map(f => {
                listAll.push({"_id": listAll.length,
                            "name": f.name});
        })
    })

    console.log(listAll);


    listAll.map(f1 => {
        var tmp = false
        list.map(f2 => {
            if (f2.name == f1.name) {
                tmp = true
            }
        })
        if (!tmp) {
            list.push(f1)
        }
    })
    console.log(list);

    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {

        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        // props.handleFilters(newChecked)
        //update this checked information into Parent Component 

    }

    const renderCheckboxLists = () => list && list.map((value, index) => (
        <React.Fragment key={index}>
            <Checkbox
                onChange={() => handleToggle(value._id)}
                type="checkbox"
                checked={Checked.indexOf(value._id) === -1 ? false : true}
            />&nbsp;&nbsp;
            <span>{value.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </React.Fragment>
    ))

    return (
        <div>
            <Collapse defaultActiveKey={['0']} >
                <Panel header="Fuetures" key="1">
                    {renderCheckboxLists()}
                </Panel>
            </Collapse>
        </div>
    )
} 

export default CheckBox;
