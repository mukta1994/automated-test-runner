import React, { useState } from 'react';
import TestCase from "./Test";
import TestCaseResult from "./Result";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


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
        if (testCasesArray.findIndex(item => item.description === statusInfo.description) === -1)
            return [...testCasesArray, { description: statusInfo.description, status: statusInfo.testStatus }]
        else {
            return testCasesArray.map(item => item.description === statusInfo.description ? { ...item, status: statusInfo.testStatus } : item)
        }
    }


    //when reset button is triggered reset all statuses to "not started"
    const resetTestCases = (statusInfo) => {
        setIsDisabled(false)
        setRunAllTests("No")
        return setTestCases(testCasesArray => testCasesArray.map(item => ({ ...item, status: statusInfo })))
    }

    return <Container className="tests-container">
        {/* Testcase result section */}
        <TestCaseResult resultArray={testCases}></TestCaseResult>

        {/* Buttons for actions "Run testcases" and "Reset" */}
        <div className="run-button">
            <Button disabled={isDisabled} className={`${executedCasesCount === testCases.length ? "hidden" : "show"}`} onClick={() => { setRunAllTests("all"); setIsDisabled(true) }}>Run test cases</Button>
            <Button className={`${executedCasesCount !== testCases.length ? "hidden" : "show"}`} onClick={() => resetTestCases("Not started")}>Reset</Button>
        </div>

        {/* looping through testcases for every testcase child component is created */}
        <div className="tests-section">
            {testCases.map((test, index) => {
                return <div key={index}>
                    <TestCase testCase={test} runAllTests={runAllTests} callStoreStatusInArray={(testDescription, testPassed) => storeStatusInArray(testDescription, testPassed)}></TestCase>
                </div>
            })
            }
        </div>
    </Container>

}

export default TestCases;





