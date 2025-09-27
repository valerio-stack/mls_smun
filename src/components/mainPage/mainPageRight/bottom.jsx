import { useState, useEffect, useRef } from 'react';


export default function MainPageRight_bottom() {
    return (
        <section className="bottom">
            { [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22].map((_, i) => {
                i = i + 1

                return (
                <div className='student'>
                    <section className='student_left'>
                        <h3 className='student_rank'>{i}</h3>
                        <img className='student_pfp' src="https://i.pinimg.com/736x/7b/d5/ef/7bd5eff30108c725f64aa8dad224fce7.jpg" alt="" />
                        <h3 className='student_name'>Valerio Harvey</h3>
                    </section>

                    <section className='student_right'>
                        <h3 className='student_class'>X-E1</h3>
                        <h3 className='student_grade'>94.2</h3>
                    </section>
                </div>
            )})}
        </section>
    )
}