import { useState, useEffect, useRef, useContext } from "react";
import { assignments_obj as assignments_obj_import } from "../../mainPage";
import SpringTransition from "../../../../assets/components/springTransition";
import { get_assignmentTimeStatus, get_assignmentStatus } from "./functions/assignmentDateFunctions";


export default function Assignment(props) {
    let assignment_obj = useContext(assignments_obj_import)
    let [expandableStatus, set_expandableStatus] = useState(false)


    let assignmentTimeStatus = (() => {
        let timeStatus = get_assignmentTimeStatus(props.dueDate)
        if (timeStatus.value > 0) { return`${timeStatus.value} ${timeStatus.unit}`} 
        else { return 'Overdue' }   
    })() // days, hours, mins

    let assignmentStatus = (() => {
        let status = get_assignmentStatus(get_assignmentTimeStatus(props.dueDate), props.isDone)
        if (status === 'ongoing') { return 'ongoing' }
        else if (status === 'finished') { return 'finished' }
        else if (status === 'overdue') { return 'overdue' }
    })() // ongoing, finished, overdue


    let ongoingLabelColor = 'rgb(138, 223, 81)'
    let finishedLabelColor = 'rgba(99, 99, 99, 1)'
    let overdueLabelColor = 'rgba(244, 121, 121, 1)'
    function get_assignmentLabelColor() {
        if (assignmentStatus === 'ongoing') { return {backgroundColor: ongoingLabelColor} }
        else if (assignmentStatus === 'finished') { return {backgroundColor: finishedLabelColor} }
        else { return {backgroundColor: overdueLabelColor} }
    }



    return (
        <>
            {
                <div 
                    className="assignment" 
                    style={{
                        color: (assignmentStatus === 'finished') && 'rgba(255, 255, 255, 0.4)'
                    }}>
                    <section className="assignment_top" onClick={() => set_expandableStatus((prev) => !prev)}>
                        <div 
                            className="assignment_dueDate"
                            style={get_assignmentLabelColor()}
                        >
                            {assignmentTimeStatus}
                        </div>
                        
                        <div className="assignmentInfo">
                            <section className="assignmentInfo_title">
                                <section className="assignmentInfo_title__left">
                                    <h3>{props.title}</h3>
                                </section>

                                <section className="assignmentInfo_title__right">
                                    <p>{props.type ? props.type : 'X'}</p>
                                </section>
                            </section>

                            <section className="assignmentInfo_description">
                                <p>14/36 done</p>
                                <p>|</p>
                                <p style={{whiteSpace: "pre-wrap"}}>{(() => {
                                    let [date, time] = props.dueDate.split('T')
                                    return `${date}  ·  ${time}`
                                })()}</p>
                            </section>
                        </div>
                    </section>


                    <section className="assignment_bottom" style={{padding: expandableStatus ? undefined : 0}}>
                        { expandableStatus &&
                            <div className="assignment_expandable">
                                <div className="dividerLine"></div>

                                <p 
                                    style={{color: (assignmentStatus === 'finished' || assignmentStatus === 'overdue') && 'rgba(255, 255, 255, 0.4)'}}
                                >
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quia impedit minus dolor fugiat omnis quae officia libero suscipit. Repudiandae atque illum aliquid blanditiis est voluptatum deserunt pariatur impedit mollitia.
                                </p>
                                

                                { props.type === 'PHOTO' &&
                                    <button
                                        style={{
                                            backgroundColor: (assignmentStatus === 'finished' || assignmentStatus === 'overdue') && 'gray',
                                            pointerEvents: (assignmentStatus === 'finished' || assignmentStatus === 'overdue') && 'none'
                                        }}
                                    >
                                        + upload
                                    </button>
                                }

                                { props.type !== 'PHOTO' &&
                                    <button
                                        style={{
                                            backgroundColor: (assignmentStatus === 'finished' || assignmentStatus === 'overdue') && 'gray',
                                            pointerEvents: (assignmentStatus === 'finished' || assignmentStatus === 'overdue') && 'none'
                                        }}
                                    >
                                        Enter
                                    </button>
                                }
                            </div>
                        }
                    </section>

                    <div 
                        className="assignment_colorLabel"
                        style={get_assignmentLabelColor()}
                    />
                </div>  
            }
        </>
    )
}