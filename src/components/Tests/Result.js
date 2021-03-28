import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

const Result = (props) => {
    const { resultArray } = props;
    const totalTestCases = resultArray.length;
    const statusArray = ['Passed', 'Failed', 'Running']

    const getStatusCount = (status) => {
        return (resultArray.filter(item => item.status === status)).length
    }
   

    //calculated
    const statusPercCalculation = (status) => {
        return (getStatusCount(status) * 100) / totalTestCases
    }

    return <div className="result-bar">
    <div className="results">
        {statusArray.map((status, index) => {
            return <div  key={index}>
                {`${status + ":" + getStatusCount(status)}`}/{totalTestCases}
            </div>
        })
        }
         </div>

        <div className="final-result">{getStatusCount('Passed') + getStatusCount('Failed') === totalTestCases ? "Executed all tests" : ""}</div>

        <ProgressBar>
            <ProgressBar striped variant="success" now={statusPercCalculation('Passed')} key={1} label="Success" />
            <ProgressBar striped variant="danger" now={statusPercCalculation('Failed')} key={2} label="Failed" />
            <ProgressBar variant="warning" now={statusPercCalculation('Running')} key={3} label="Running" />
        </ProgressBar>
    </div>
}

export default Result;