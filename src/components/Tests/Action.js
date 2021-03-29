import React from 'react';
import Button from 'react-bootstrap/Button';

const TestActions = (props) => {

    const { buttonVisibility, runTestsOnClick, enableButton } = props;

    //onClick={runTestCase}
    return <div className="run-button">
        <Button disabled={enableButton} className={`${buttonVisibility() ? "hidden" : "show"}`} onClick={() => runTestsOnClick()}>Run test cases</Button>
        <Button className={`${buttonVisibility() ? "show" : "hidden"}`} onClick={() => window.location.reload(false)}>Reset</Button>
    </div>
}

export default TestActions;