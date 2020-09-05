import React, { useState, useEffect } from 'react';
import logo from './logo1.png';
import './App.css';
import Cart from './components/Cart/Cart';
import CourseData from './CourseData.json';
import Course from './components/Course/Course';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer/Footer';

function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(CourseData)
  }, []);
  // console.log(courses)
  const [cart, setCart] = useState([]);
  const handleEnrollButton = (course) => {
    console.log('clicked', course);
    const newCart = [...cart, course];
    setCart(newCart);
  };
  return (
    <div className="App">
      <div style={{borderBottom:"1px dotted #ff00ac"}} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
      <Container>
      <div>
        <ul>
          {
            courses.map(course => <Course handleEnrollButton={handleEnrollButton} course={course} key={course.id}></Course> )
          }
        </ul>
      </div>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
