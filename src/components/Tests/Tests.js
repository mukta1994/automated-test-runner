import React, { useState } from 'react';
import TestCase from "./Test";
import TestCaseResult from "./Result";
import Container from 'react-bootstrap/Container';
import TestActions from './Action';


const TestCases = (props) => {

    const [runAllTests, setRunAllTests] = useState("No");
    const [testCases, setTestCases] = useState(props.tests)
    const [isDisabled, setIsDisabled] = useState(false);
    const executedCasesCount = (testCases.filter(item => (item.status === 'Passed' || item.status === 'Failed')).length);

    //whenever test runs set the status or update the status depending on test progress
    const storeStatusInArray = (statusInfo) => {
        setTestCases(testCases => (addOrUpdateStatusInTestCases(testCases, statusInfo)));
    }

    //add or update status to testCases
    const addOrUpdateStatusInTestCases = (testCasesArray, statusInfo) => {
        return testCasesArray.map(item => item.description === statusInfo.description ? ({ ...item, status: statusInfo.testStatus }) : item)
    }

    //hide or show buttons depending on no. of executed cases count
    const buttonHideOrShow = () => {
        return executedCasesCount === testCases.length
    }

    //all testcases will run on click of this button. To avoid running of testcase on load of component runAllTests variable is set
    const runAllTestsOnClick = () => {
        setRunAllTests("All");
        setIsDisabled(true);
    }

    return <Container className="tests-container">
        {/* Testcase result section */}
        <TestCaseResult resultArray={testCases}></TestCaseResult>

        {/* Buttons for actions "Run testcases" and "Reset" */}
        <TestActions buttonVisibility={() => buttonHideOrShow()} runTestsOnClick={() => runAllTestsOnClick()} enableButton={isDisabled}></TestActions>

        {/* looping through testcases for every testcase child component is created */}
        <div className="tests-section">
            {testCases.map((test, index) => {
                return <div key={index}>
                    <TestCase testCase={test} runAllTests={runAllTests} callStoreStatusInArray={(testInfo) => storeStatusInArray(testInfo)}></TestCase>
                </div>
            })
            }
        </div>
    </Container>

}

export default TestCases;





