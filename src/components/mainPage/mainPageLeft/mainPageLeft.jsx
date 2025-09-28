import { useState, useRef, useEffect, createContext, useContext } from "react"
import Filters from "./filters/filters"
import Assignment from "./assignment/assignment"
import { isMinimized_obj as isMinimized_obj_import } from "../mainPage"
import { assignments_obj as assignments_obj_import } from "../mainPage"


export default function MainPageLeft() {
    let isMinimized_obj = useContext(isMinimized_obj_import)
    let assignments_obj = useContext(assignments_obj_import)

    // fetch('http://localhost:3000/assignmentsList', {
    //     method: 'GET'
    // }) 
    //     .then((rawRes) => res.json())
    //     .then((res) => console.log(res))


    return (  
        <section className="mainPage_left" style={{paddingRight: isMinimized_obj.value && "105px"}}>
            <Filters/>

            <section className="assignmentsContainer" style={{padding: isMinimized_obj.value && "16.5px 15px"}}>
                { assignments_obj.isFilterOn.value === false ?
                    assignments_obj.assignments.value.map((assignment, index) => 
                        <Assignment 
                            title={assignment.title} 
                            type={assignment.type} 
                            date={assignment.date}
                            dueDate={assignment.dueDate}
                            isDone={assignment.isDone}
                        />
                    )
                    :
                    assignments_obj.shownAssignments.value.map((assignment, index) => 
                        <Assignment 
                            title={assignment.title} 
                            type={assignment.type} 
                            date={assignment.date}
                            dueDate={assignment.dueDate}
                            isDone={assignment.isDone}
                        />
                    )
                }
            </section>
        </section>
    )
}