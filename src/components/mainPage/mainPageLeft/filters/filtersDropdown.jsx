import { useState, useEffect, useRef, useContext } from "react";
import { assignments_obj as assignments_obj_import } from "../../mainPage";
import { activeFilter_obj as activeFilter_obj_import } from "./filters";
import { get_assignmentStatus, get_assignmentTimeStatus } from "../assignment/functions/assignmentDateFunctions";
import { useTransition, animated } from '@react-spring/web'
import SpringTransition from "../../../../assets/components/springTransition";
import UpsideDownArrow from "../../../../assets/components/upsideDownArrow";


export default function FiltersDropdown(props) {
    let assignments_obj = useContext(assignments_obj_import) // from mainPageLeft.jsx, contain various states
    let activeFilter_obj = useContext(activeFilter_obj_import) // from filters.jsx, show the active filters, but not the dropdown options
    let [dropdownStatus, set_dropdownStatus] = useState(false) // whether this current dropdown is active or not
    let [chosenOption, set_chosenOption] = useState(null)


    useEffect(() => {
        if (activeFilter_obj.value === props.title) { set_dropdownStatus(true) }
        else { set_dropdownStatus(false) }
    },[activeFilter_obj.value]) // if this filter is active, then show its dropdown


    useEffect(() => {
        if (chosenOption !== null) { assignments_obj.isFilterOn.setter(true) }
        else { assignments_obj.isFilterOn.setter(false) }
    },[chosenOption]) // if the filter is used, make the isFilterOn state true, it will change the displayed state from the original one to a new one, so that it doesn't mess with the original state



    
    return (
        <button className="filter_filters">
            <div 
                className="filters_text" 
                onClick={() => {
                    /* making sure i can only open 1 dropdown menu at a time */
                    activeFilter_obj.setter((prev) => {
                        if (prev !== props.title) { return props.title }
                        else { return "none" }
                    })
                }}
            >
                <p>{props.title}</p>
                <UpsideDownArrow fontSize="11.5px" state={dropdownStatus}/>
            </div>

            {/* ---------------------------------------------- */}

            { dropdownStatus === true &&
                <div 
                    className="dropdown" 
                    style={{
                        left: (props.orientation === "left" ? 0 : false),
                        right: (props.orientation === "right" ? 0 : false)
                    }}
                >
                    { props.dropdownOptions.map((optionTitle, index) => 
                        <div 
                            className="dropdownOption" 
                            onClick={() => {
                                set_dropdownStatus(false)
                                activeFilter_obj.setter(false)
                                set_chosenOption(optionTitle)

                                /* sort logic, according to what filter is active */
                                if (props.title === 'Deadline') {
                                    assignments_obj.shownAssignments.setter(( 
                                        [...assignments_obj.assignments.value].sort((a,b) => {
                                            let dueDate_a = new Date(a.dueDate)
                                            let dueDate_b = new Date(b.dueDate)
                                            
                                            if (optionTitle === 'Sooner') {
                                                
                                                if (dueDate_a < dueDate_b) { return -1 }
                                                else if (dueDate_a > dueDate_b) { return 1 }
                                                else { return 0 }
                                            }
                                            else if (optionTitle === 'Later') {
                                                
                                                if (dueDate_a > dueDate_b) { return -1 }
                                                else if (dueDate_a < dueDate_b) { return 1 }
                                                else { return 0 }
                                            }
                                        }))
                                    )
                                } if (props.title === 'Subject') {
                                    assignments_obj.shownAssignments.setter(((prev) => 
                                        [...assignments_obj.assignments.value].filter((each) => each.subject === optionTitle)
                                    ))
                                } if (props.title === 'Status') {
                                    assignments_obj.shownAssignments.setter(((prev) => 
                                        [...assignments_obj.assignments.value].filter((each) => {
                                            let timeStatus = get_assignmentTimeStatus(each.dueDate)
                                            let status = get_assignmentStatus(timeStatus, each.isDone)

                                            if (optionTitle === 'Ongoing') { return status === 'ongoing' } 
                                            else if (optionTitle === 'Finished') { return status === 'finished' }
                                            else if (optionTitle === 'Overdue') { return status === 'overdue' }
                                        })
                                    ))
                                }
                            }}

                            style={(() => {
                                /* darken the option if the school subject is not present */
                                if (props.title === 'Subject') {
                                    let assignmentValues = Object.values(assignments_obj.assignments.value)
                                    let assignmentSubjects_arr = assignmentValues.map((each) => each.subject)
                                    // assignmentSubjects_arr is just the assignments array but only the subjects
                                    
                                    if (assignmentSubjects_arr.includes(optionTitle) === false) {
                                        return {
                                            filter: 'brightness(90%)',
                                            color: 'rgba(255, 255, 255, 0.3)',
                                            pointerEvents: 'none'
                                        }
                                    }
                                }

                                /* slightly darken the option if this option is active */
                                if (chosenOption === optionTitle) {
                                    return {
                                        backgroundColor: 'rgba(59, 79, 89, 1)' ,
                                        pointerEvents: 'none'
                                    }
                                }
                            })()}
                        >
                            <div className="dropdownOption_left">
                                {optionTitle}
                            </div>

                            <div className="dropdownOption_right">
                                { chosenOption === optionTitle &&
                                    <i 
                                        className="fa-solid fa-xmark" 
                                        style={{pointerEvents: 'auto'}}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            set_chosenOption(null)
                                            assignments_obj.isFilterOn.setter(false)
                                            set_dropdownStatus(false)
                                        }}
                                    >
                                    </i>
                                }
                            </div>
                        </div>
                    )}

                    <SpringTransition state={dropdownStatus} duration={80} type="fade">
                        <div className="dropdown_clickBox" onClick={() => set_dropdownStatus(false)}/>
                    </SpringTransition>
                </div>
            }
        </button>
    )
}