import React from 'react'
import Image from 'next/image';
const page = () => {
    return (
        <div className="courses-container">
    
          <section className="courses-header">
            <h1>Courses Categories</h1>
          </section>
    
          <section className="courses-grid">
            <div className="course-item">
              <img src="/img 5.jfif" alt="Web Design" className="course-image" />
              <div className="course-info">
                <h3>Web Design</h3>
                <p>49 Courses</p>
              </div>
            </div>
    
            <div className="course-item">
              <img src="/img 6.jfif" alt="Graphic Design" className="course-image" />
              <div className="course-info">
                <h3>Graphic Design</h3>
                <p>49 Courses</p>
              </div>
            </div>
    
            <div className="course-item">
              <img src="/img 3.jfif" alt="Video Editing" className="course-image" />
              <div className="course-info">
                <h3>Video Editing</h3>
                <p>49 Courses</p>
              </div>
            </div>
    
            <div className="course-item">
              <img src="/img 4.jfif" alt="Online Marketing" className="course-image" />
              <div className="course-info">
                <h3>Online Marketing</h3>
                <p>49 Courses</p>
              </div>
            </div>
          </section>
          </div>

      );
    };
    
    export default page;