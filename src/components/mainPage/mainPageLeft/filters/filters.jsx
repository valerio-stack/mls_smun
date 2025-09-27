import { useState, useEffect, useRef, createContext, useContext } from "react"
import FiltersDropdown from "./filtersDropdown"


export let activeFilter_obj = createContext()
export default function Filters() {
    let [activeFilter, set_activeFilter] = useState('none')

    return (
        <activeFilter_obj.Provider value={{value: activeFilter, setter: set_activeFilter}}>
            <section className="filter">
                <section className="filter_left">
                    <FiltersDropdown title="Deadline" orientation="left" dropdownOptions={['Sooner', 'Later']}/>
                    <FiltersDropdown title="Subject" orientation="left" dropdownOptions={['Art & cultures', 'Biology', 'Chemistry', 'Coding & AI', 'Economy', 'English', 'Geography', 'History', 'Indonesian', 'Informatics', 'Javanese', 'Math', 'Pancasila education', 'Physical education', 'Physics', 'Religion', 'Sociology']}/>
                </section>

                <section className="filter_right">
                    <FiltersDropdown title="Status" orientation="right" dropdownOptions={['Ongoing', 'Finished', 'Overdue']}/>
                </section>
                
                <div className="filter_mask"></div>
            </section>
        </activeFilter_obj.Provider>
    )
}