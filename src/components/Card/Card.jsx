import { FiDollarSign,  FiBookOpen } from 'react-icons/fi';
import PropTypes from 'prop-types';

const Card = ({ course, handleSelect }) => {
    const { img, course_name, details, price, credit } = course;
    // console.log(course)

    return (
        <div>
            <div className='border-2 p-4 rounded-xl bg-white'>
                <img className='w-full' src={img} alt="" />
                <h3 className='text-xl font-semibold mt-4 mb-2'>{course_name}</h3>
                <p className='text-[#1C1B1B99] font-normal'>{details}</p>
                <div className='flex justify-between mt-4'>
                    <div className='flex items-center gap-3'>
                        <h3><FiDollarSign></FiDollarSign></h3>
                        <p className='text-lg font-medium text-[#1C1B1B99]'>Price: {price}</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h3><FiBookOpen></FiBookOpen></h3>
                        <p className='text-lg font-medium text-[#1C1B1B99]'>Credit: {credit}</p>
                    </div>
                </div>
                <button onClick={() => handleSelect(course)} className='btn btn-primary w-full mt-4 mb-2'>select</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    course: PropTypes.object,
    handleSelect: PropTypes.func

};

export default Card;