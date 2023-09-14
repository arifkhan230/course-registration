import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Home = () => {
    const [courses,setCourses] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div>
            <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                courses.map(course => <Card key={course.id} course = {course}></Card>)
            }
           
            </div>
            
        </div>
    );
};

export default Home;