import { useState, useRef, useEffect, createContext, useContext } from "react"
import Filters from "./filters/filters"
import Assignment from "./assignment/assignment"
import { isMinimized_obj as isMinimized_obj_import } from "../mainPage"
import { get_assignmentTimeStatus, get_assignmentStatus } from "./assignment/functions/assignmentDateFunctions"


export let assignments_obj = createContext()
export default function MainPageLeft() {
    let isMinimized_obj = useContext(isMinimized_obj_import)
    let assignments_arr = [
        { title: "Biology Module Page 16", type: 'QUIZ', date: '2025-09-15T08:30', dueDate: '2025-09-20T10:00',  subject: 'Biology', isDone: false },
        { title: "Art and Culture Module Page 16", type: 'EVAL', date: '2025-09-16T09:15', dueDate: '2025-09-22T14:45',  subject: 'Art & cultures', isDone: false },
        { title: "Mathematics Page 22 (Bupena Airlangga)", type: 'EXAM', date: '2025-09-17T07:45', dueDate: '2025-09-23T11:30',  subject: 'Math', isDone: false },
        { title: "Pancasila education Module Page 10", type: 'AS', date: '2025-09-18T10:20', dueDate: '2025-09-24T15:10',  subject: 'Pancasila education', isDone: true },
        { title: "English Module Page 12", type: 'AS', date: '2025-09-19T08:10', dueDate: '2025-09-25T09:50',  subject: 'English', isDone: false },
        { title: "Informatics Page 18 (BSE)", type: 'AS', date: '2025-09-20T13:40', dueDate: '2025-09-26T16:25',  subject: 'Informatics', isDone: true },
        { title: "Informatics Page 25 (Airlangga)", type: 'AS', date: '2025-09-21T09:55', dueDate: '2025-09-27T23:15',  subject: 'Informatics', isDone: false },
        { title: "Indonesian Module Page 30", type: 'AS', date: '2025-09-22T11:35', dueDate: '2025-09-28T14:05',  subject: 'Indonesian', isDone: true },
        { title: "Physics Module Page 14", type: 'AS', date: '2025-09-23T10:45', dueDate: '2025-09-29T13:20',  subject: 'Physics', isDone: true },
        { title: "Chemistry Module Page 20", type: 'AS', date: '2025-09-24T08:25', dueDate: '2025-09-30T10:40',  subject: 'Chemistry', isDone: true },
        { title: "Economics Module Page 19", type: 'AS', date: '2025-09-25T14:00', dueDate: '2025-10-01T17:30',  subject: 'Economy', isDone: true },
        { title: "History Page 27 (Erlangga)", type: 'AS', date: '2025-09-26T09:05', dueDate: '2025-10-02T11:50',  subject: 'History', isDone: true },
        { title: "Geography Page 21 (BSE)", type: 'AS', date: '2025-09-27T13:15', dueDate: '2025-09-27T21:35',  subject: 'Geography', isDone: false },
        { title: "Informatics Module Page 11", type: 'AS', date: '2025-09-28T10:50', dueDate: '2025-10-04T12:40',  subject: 'Informatics', isDone: true },
        { title: "Art and Culture Module Page 15", type: 'AS', date: '2025-09-29T08:20', dueDate: '2025-10-05T09:45',  subject: 'Art & cultures', isDone: true }
    ]

    let [assignments, set_assignments] = useState(assignments_arr.sort((a,b) => { 
        let timeStatus_a = get_assignmentTimeStatus(a.dueDate) 
        let assignmentStatus_a = get_assignmentStatus(timeStatus_a, a.isDone) 
        let timeStatus_b = get_assignmentTimeStatus(b.dueDate) 
        let assignmentStatus_b = get_assignmentStatus(timeStatus_b, b.isDone) 
        let order = { overdue: -1, ongoing: 0, finished: 1 } 

        return order[assignmentStatus_a] - order[assignmentStatus_b]
    })) // this is temporary, I want to do this directly from sql

    // fetch('http://localhost:3000/assignmentsList', {
    //     method: 'GET'
    // }) 
    //     .then((rawRes) => res.json())
    //     .then((res) => console.log(res))

    let [shownAssignments, set_shownAssignments] = useState([])
    let [isFilterOn, set_isFilterOn] = useState(false)

    // jobs: 
    // 2. use real datas for the right_top statistics panel
    // 3. do something to make different subjects look different, whether with emoji, icon, or whatever



    return (
        <assignments_obj.Provider value={{assignments: {value: assignments, setter: set_assignments}, shownAssignments: {value: shownAssignments, setter: set_shownAssignments}, isFilterOn: {value: isFilterOn, setter: set_isFilterOn}}}>
            <section className="mainPage_left" style={{paddingRight: isMinimized_obj.value && "105px"}}>
                <Filters/>

                <section className="assignmentsContainer" style={{padding: isMinimized_obj.value && "16.5px 15px"}}>
                    { isFilterOn === false ?
                        assignments.map((assignment, index) => 
                            <Assignment 
                                title={assignment.title} 
                                type={assignment.type} 
                                date={assignment.date}
                                dueDate={assignment.dueDate}
                                isDone={assignment.isDone}
                            />
                        )
                        :
                        shownAssignments.map((assignment, index) => 
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
        </assignments_obj.Provider>
    )
}