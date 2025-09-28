import { useState, useEffect, useRef, useContext } from 'react';
import Chart from 'chart.js/auto';
import { assignments_obj as assignments_obj_import } from '../mainPage';
import { get_assignmentTimeStatus, get_assignmentStatus } from '../mainPageLeft/assignment/functions/assignmentDateFunctions';


export default function MainPageRight_top() {
    let assignments_obj = useContext(assignments_obj_import)
    let assignmentsCount = assignments_obj.assignments.value.length
    let assignmentsFinishedCount = assignments_obj.assignments.value.filter((each) => {
        let assignmentStatus = get_assignmentStatus(get_assignmentTimeStatus(each.dueDate), each.isDone)
        return assignmentStatus === 'finished'
    }).length
    let chartRef = useRef(null)


    let finishedPercentage = Math.round( ((assignmentsFinishedCount / assignmentsCount) * 100), 2 )
    let unfinishedPercentage = Math.round( (( (assignmentsCount - assignmentsFinishedCount) / assignmentsCount) * 100), 2 )
    let data = [finishedPercentage, unfinishedPercentage];

    useEffect(() => {
        new Chart(
            chartRef.current,
            {
                type: 'doughnut',
                data: {
                    datasets: [
                        {
                            label: '  Assignment completion (%)',
                            data: data,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    cutout: '50%',
                    plugins: {
                        legend: {display: false},
                        title: {display: false}
                    },
                    backgroundColor: ['rgba(0, 183, 255, 1)', 'gray']
                }
            }
        )
    },[])



    return (
        <section className="top">
            <canvas className="chart" ref={chartRef}></canvas>
            <div className="stats">

                <section className="topStats">
                    <div className="topStats_container">
                        <section className="topsStats_topContainer">
                            <i className="fa-solid fa-bars-progress"></i>
                            <p>Assignment Completion</p>
                        </section>

                        <section className="topStats_bottomContainer">
                            <h2>{`${finishedPercentage}%`}</h2>
                        </section>
                    </div>
                </section>

                <section className="bottomStats">
                    <div className="bottomStats_container">
                        <section className="bottomStats_topContainer">
                            <i className="fa-solid fa-check"></i>
                            <p>Completed</p>
                        </section>

                        <section className="bottomStats_bottomContainer">
                            <h2>{`${assignmentsFinishedCount}/${assignmentsCount}`}</h2>
                        </section>
                    </div>

                    <div className="bottomStats_container">
                        <section className="bottomStats_topContainer">
                            <i className="fa-solid fa-xmark"></i>
                            <p>Due</p>
                        </section>

                        <section className="bottomStats_bottomContainer">
                            <h2>{`${assignmentsCount - assignmentsFinishedCount}`}</h2>
                        </section>
                    </div>
                </section>
            </div>
        </section>
    )
}