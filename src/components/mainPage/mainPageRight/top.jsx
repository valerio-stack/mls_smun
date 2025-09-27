import { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


export default function MainPageRight_top() {
    let chartRef = useRef(null)
    const data = [75, 25];

    useEffect(() => {
        new Chart(
            chartRef.current,
            {
                type: 'doughnut',
                data: {
                    datasets: [
                        {
                            label: '  Assignment completion',
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
                            <h2>70%</h2>
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
                            <h2>7/9</h2>
                        </section>
                    </div>

                    <div className="bottomStats_container">
                        <section className="bottomStats_topContainer">
                            <i className="fa-solid fa-xmark"></i>
                            <p>Due</p>
                        </section>

                        <section className="bottomStats_bottomContainer">
                            <h2>2</h2>
                        </section>
                    </div>
                </section>
            </div>
        </section>
    )
}