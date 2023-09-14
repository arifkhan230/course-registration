
import PropTypes from 'prop-types';

const Card = ({ course }) => {
    const { img, course_name, details, price, credit } = course;
    console.log(typeof course)

    console.log(course)

    return (
        <div>
            <div className='border-2 h-[402px] w-[312px] p-4 rounded-xl'>
                <img src={img} alt="" />
                <h3 className='text-xl font-semibold mt-4 mb-2'>{course_name}</h3>
                <p><small>{details}</small></p>
                <div className='flex justify-between'>
                    <p>Price: {price}</p>
                    <p>Credit: {credit}</p>
                </div>
                <button className='btn btn-primary w-full mt-4'>select</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    course: PropTypes.object

};

export default Card;