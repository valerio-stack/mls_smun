import { useState, useRef, useEffect, createContext, useContext } from "react"
import Navbar from "../navbar/navbar"
import MainPageLeft from "./mainPageLeft/mainPageLeft"
import MainPageRight from "./mainPageRight/mainPageRight"
import { get_assignmentTimeStatus, get_assignmentStatus } from "./mainPageLeft/assignment/functions/assignmentDateFunctions"

export let isMinimized_obj = createContext()
export let assignments_obj = createContext()
export default function MainPage() {
    let [isMinimized, set_isMinimized] = useState(false)

    let assignments_arr = [
        { title: "Biology Module Page 16", type: 'QUIZ', date: '2025-09-15T08:30', dueDate: '2025-09-29T10:00',  subject: 'Biology', isDone: false },
        { title: "Art and Culture Module Page 16", type: 'EVAL', date: '2025-09-16T09:15', dueDate: '2025-09-22T14:45',  subject: 'Art & cultures', isDone: true },
        { title: "Mathematics Page 22 (Bupena Airlangga)", type: 'EXAM', date: '2025-09-17T07:45', dueDate: '2025-09-30T11:30',  subject: 'Math', isDone: false },
        { title: "Pancasila education Module Page 10", type: 'PHOTO', date: '2025-09-18T10:20', dueDate: '2025-10-1T15:10',  subject: 'Pancasila education', isDone: true },
        { title: "English Module Page 12", type: 'PHOTO', date: '2025-09-19T08:10', dueDate: '2025-09-25T09:50',  subject: 'English', isDone: true },
        { title: "Informatics Page 18 (BSE)", type: 'PHOTO', date: '2025-09-20T13:40', dueDate: '2025-09-26T16:25',  subject: 'Informatics', isDone: true },
        { title: "Informatics Page 25 (Airlangga)", type: 'PHOTO', date: '2025-09-21T09:55', dueDate: '2025-09-28T23:15',  subject: 'Informatics', isDone: false },
        { title: "Indonesian Module Page 30", type: 'PHOTO', date: '2025-09-22T11:35', dueDate: '2025-09-28T14:05',  subject: 'Indonesian', isDone: true },
        { title: "Physics Module Page 14", type: 'PHOTO', date: '2025-09-23T10:45', dueDate: '2025-09-29T13:20',  subject: 'Physics', isDone: false },
        { title: "Chemistry Module Page 20", type: 'PHOTO', date: '2025-09-24T08:25', dueDate: '2025-09-30T10:40',  subject: 'Chemistry', isDone: false },
        { title: "Economics Module Page 19", type: 'PHOTO', date: '2025-09-25T14:00', dueDate: '2025-10-01T17:30',  subject: 'Economy', isDone: true },
        { title: "History Page 27 (Erlangga)", type: 'PHOTO', date: '2025-09-26T09:05', dueDate: '2025-10-02T11:50',  subject: 'History', isDone: true },
        { title: "Geography Page 21 (BSE)", type: 'PHOTO', date: '2025-09-27T13:15', dueDate: '2025-09-27T21:35',  subject: 'Geography', isDone: false },
        { title: "Informatics Module Page 11", type: 'PHOTO', date: '2025-09-28T10:50', dueDate: '2025-10-04T12:40',  subject: 'Informatics', isDone: true },
        { title: "Art and Culture Module Page 15", type: 'PHOTO', date: '2025-09-29T08:20', dueDate: '2025-10-05T09:45',  subject: 'Art & cultures', isDone: true }
    ]

    let [assignments, set_assignments] = useState(() => {
        return assignments_arr.sort((a,b) => {     
            let timeStatus_a = get_assignmentTimeStatus(a.dueDate) 
            let assignmentStatus_a = get_assignmentStatus(timeStatus_a, a.isDone) 
            let timeStatus_b = get_assignmentTimeStatus(b.dueDate) 
            let assignmentStatus_b = get_assignmentStatus(timeStatus_b, b.isDone) 
            let order = { overdue: -1, ongoing: 0, finished: 1 } 

            if (assignmentStatus_a === assignmentStatus_b) { return new Date(a.dueDate) - new Date(b.dueDate) }
            else { return order[assignmentStatus_a] - order[assignmentStatus_b] }
        })
    }) // this is temporary, I want to do it in the fetch function


    let [shownAssignments, set_shownAssignments] = useState([])
    let [isFilterOn, set_isFilterOn] = useState(false)

    // jobs: 
    // 2. use real datas for the right_top statistics panel
    // 3. do something to make different subjects look different, whether with emoji, icon, or whatever



    return (
        <isMinimized_obj.Provider value={{value: isMinimized, setter: set_isMinimized}}>
            <assignments_obj.Provider value={{
                assignments: {value: assignments, setter: set_assignments}, 
                shownAssignments: {value: shownAssignments, setter: set_shownAssignments}, 
                isFilterOn: {value: isFilterOn, setter: set_isFilterOn}
            }}
            >
                <Navbar/>

                <div className="mainPageContainer" style={{gridTemplateColumns: isMinimized ? "95% 5%" : "61.5% 38.5%"}}>
                    <MainPageLeft/>
                    <MainPageRight/>
                    <div className="mainPageMask"></div>
                </div>
            </assignments_obj.Provider>
        </isMinimized_obj.Provider>
    )
}