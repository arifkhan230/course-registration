import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Home = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([])
    const [totalCredit, setTotalCredit] = useState(0)
    const [remainingCredit, setRemainingCredit] = useState(20)
    const [totalPrice,setTotalPrice] = useState(0)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handleSelect = (course) => {
        const isSelected = selectedCourses.find(item => item.id === course.id)
        if (isSelected) {
            return alert('already booked')
        }
        else {
            const newSelectedCourse = [...selectedCourses, course];
            setSelectedCourses(newSelectedCourse);

            let credit = course.credit;
            const newCredit = credit + totalCredit;
            let remaining = remainingCredit - credit;
            let total = parseFloat(course.price);
            let newTotal = total + totalPrice;

            if(newCredit > 20){
                return alert('credit finished')
            }
            else{
                setTotalCredit(newCredit)
                setRemainingCredit(remaining)
                setTotalPrice(newTotal)
            }

           

            

        }

    }

    return (
        <div className="flex flex-col-reverse lg:flex-row max-w-[1440px] mx-auto gap-6">
            {/* Card container */}
            <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    courses.map(course => <Card
                        key={course.id}
                        course={course}
                        handleSelect={handleSelect}
                        
                    ></Card>)
                }

            </div>

            {/* cart container */}
            <div className="w-1/3">
                <Cart 
                selectedCourses={selectedCourses}
                totalCredit={totalCredit}
                remainingCredit={remainingCredit}
                totalPrice={totalPrice}
                ></Cart>
            </div>

        </div>
    );
};

export default Home;