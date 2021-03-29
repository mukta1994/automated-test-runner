import React, { useEffect } from 'react';

const TestCase = (props) => {

    const { testCase, runAllTests, callStoreStatusInArray } = props;

    useEffect(() => {
        if (runAllTests === "All")
            runTestCase();
    }, [runAllTests]);

    //Run testcase
    const runTestCase = () => {
        props.callStoreStatusInArray({ description: testCase.description, testStatus: "Running" })
        testCase.run(function (testResult) {
            //called to add or update status to testcase 
            callStoreStatusInArray({ description: testCase.description, testStatus: testResult ? "Passed" : "Failed" })
        });
    }

    //onClick={runTestCase}
    return <div className="test">
        <div>{testCase.description} </div>
        <div> {testCase.status ? testCase.status : "Not started"}</div>
        <br />
    </div>
}

export default TestCase;
