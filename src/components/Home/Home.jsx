import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Home = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([])
    const [totalCredit, setTotalCredit] = useState(0)
    const [remainingCredit, setRemainingCredit] = useState(20)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handleSelect = (course) => {
        const isSelected = selectedCourses.find(item => item.id === course.id)
        if (isSelected) {
            return toast('You already booked this course')
        }
        else {
            let credit = course.credit;
            const newCredit = credit + totalCredit;
            let remaining = remainingCredit - credit;
            let total = parseFloat(course.price);
            let newTotal = total + totalPrice;

            if (newCredit > 20) {
                return toast('Your credit hour is finished')
            }
            else {
                setTotalCredit(newCredit)
                setRemainingCredit(remaining)
                setTotalPrice(newTotal)

                const newSelectedCourse = [...selectedCourses, course];
                setSelectedCourses(newSelectedCourse);
            }
        }

    }

    return (
        <div className="flex flex-col-reverse lg:flex-row max-w-[1440px] mx-auto gap-6 mt-8 pb-12">
            {/* Card container */}
            <div className="w-full px-4 lg:px-0 lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    courses.map(course => <Card
                        key={course.id}
                        course={course}
                        handleSelect={handleSelect}
                    ></Card>)
                }
                <ToastContainer></ToastContainer>
            </div>
            {/* cart container */}
            <div className="w-full md:w-2/3 md:mx-auto px-4 lg:mx-auto lg:w-1/4">
                <div className="bg-white border-2 rounded-xl">
                    <Cart
                        selectedCourses={selectedCourses}
                        totalCredit={totalCredit}
                        remainingCredit={remainingCredit}
                        totalPrice={totalPrice}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;