import './App.css';
import Banner from './Banner/Banner';
import Class from './Class/Class';
import Courses from './Courses/Courses';
import CoursesCategories from './CoursesCategories/Courses-Categories';
import Download from './Download/Download';
import Mentors from './Mentors/Mentors';
import Navigation from './Navigation/Navigation';
import Partner from './Partner/Partner';
import Platform from './Platform/Platform';
import Stories from './Stories/Stories';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
    <Navigation />
    <Banner />
    <Partner />
    <Class />
    <Courses />
    <CoursesCategories />
    <Mentors />
    <Platform />
    <Stories />
    <Download />
    <Footer />
    </>
  );
}

export default App;
