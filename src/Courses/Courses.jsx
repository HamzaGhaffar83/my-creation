import React from 'react';
import '../Courses/Courses.css';

export default function Courses() {
  return (
    <div>
        <div className='container4'>
            <h3 className='text text-center'>Our Popular Courses</h3>
            <div>
                <ul className='list d-flex'>
                    <li className='list-item'><a href='#home'><span>All Categories</span></a></li>
                    <li className='list-item'><a href='#home'>Web Design</a></li>
                    <li className='list-item'><a href='#home'>Copy Writing</a></li>
                    <li className='list-item'><a href='#home'>Ui/Ux Design</a></li>
                    <li className='list-item'><a href='#home'>Marketing</a></li>
                    <li className='list-item'><a href='#home'>Coding</a></li>
                    <li className='list-item'><a href='#home'>Buisness</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
