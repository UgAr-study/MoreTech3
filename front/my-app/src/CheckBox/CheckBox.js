import React, { useState } from 'react'
import { Checkbox, Collapse, Row, Col  } from 'antd';

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

    // console.log(listAll);


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
    // console.log(list);

    const [Checked, setChecked] = useState([])
/*
    const handleToggle = (value) => {

        var curFeat = [];

        const currentIndex = Checked.indexOf(value._id);
        const newChecked = [...Checked];

        if (currentIndex === -1) {
            newChecked.push(value._id)
            curFeat.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
            curFeat.splice(currentIndex, 1)
        }

        // console.log("Update");
        // console.log(newChecked);

        setChecked(newChecked)
        props.handleFilters(curFeat)
        //update this checked information into Parent Component 

    }
*/

    const handleToggle = (value) => {

        var curFeat = [];

        const currentIndex = Checked.indexOf(value._id);
        const newChecked = [...Checked];

        newChecked.map(f => {
            curFeat.push(f);
        })

        if (currentIndex === -1) {
            newChecked.push(value._id)
            curFeat.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
            curFeat.splice(currentIndex, 1)
        }

        console.log("Update");
        console.log(newChecked);

        setChecked(newChecked)
        props.handleFilters(curFeat)
        //update this checked information into Parent Component 

    }

    const renderCheckboxLists = () => list && list.map((value, index) => (
        <React.Fragment key={index}>
        <Checkbox.Group style={{ width: '120px'}} onChange={() => handleToggle(value)}>
            <Row>
            <Checkbox
                onChange={() => handleToggle(value)}
                checked={Checked.indexOf(value._id) === -1 ? false : true}
            />
            {/* <Col span={8}>
                <Checkbox value="A">A</Checkbox>
            </Col>
            <Col span={8}>
                <Checkbox value="B">B</Checkbox>
            </Col>
            <Col span={8}>
                <Checkbox value="C">C</Checkbox>
            </Col>
            <Col span={8}>
                <Checkbox value="D">D</Checkbox>
            </Col>
            <Col span={8}>
                <Checkbox value="E">E</Checkbox>
            </Col> */}
            <span>{value.name}</span>
            </Row>
        </Checkbox.Group>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </React.Fragment>
    ))

    return (
        <div className="forfilters">
                <Collapse defaultActiveKey={['0']}  >
                    <Panel header="Features" key="1">
                        {renderCheckboxLists()}
                    </Panel>
                </Collapse>
        </div>
    )
} 

export default CheckBox;
