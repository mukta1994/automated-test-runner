import React, { useEffect } from 'react';


const TestCase = (props) => {//testcase

    const { testCase, runAllTests, callStoreStatusInArray } = props;

    useEffect(() => {
        if (runAllTests === "all")
            runTestCase();
    }, [runAllTests]);

    //Run test case
    const runTestCase = () => {//runTestCase
        props.callStoreStatusInArray({ description: testCase.description, testStatus: "Running" })
        testCase.run(function (testResult) {
            //called to add or update status to testcase 
            callStoreStatusInArray({ description: testCase.description, testStatus: testResult ? "Passed" : "Failed" })
        });
    }

    return <div className="test" onClick={runTestCase}>
        <div>{testCase.description} </div>
        <div> {testCase.status? testCase.status : "Not started"}</div>
        <br />
    </div>
}

export default TestCase;