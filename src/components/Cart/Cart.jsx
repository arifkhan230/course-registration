
import PropTypes from 'prop-types';

const Cart = ({ selectedCourses, totalCredit, remainingCredit, totalPrice }) => {

    return (
        <div className='p-6'>
            <h3 className='text-lg font-bold text-[#2F80ED] border-b-2 pb-4'>Credit Hour Remaining {remainingCredit} hr</h3>
            <h3 className='text-3xl font-bold pt-4 pb-5'> Course Name</h3>
            <div className='mt-3 pb-4'>
                {
                    selectedCourses.map((item, idx) => (
                        <h3 className='text-lg mb-2 ' key={item.id} >{idx + 1} {item?.course_name}</h3>
                    ))
                }
            </div>
            <h3 className='text-lg font-medium border-b-2 border-t-2 pt-4 pb-4'>Total Credit Hour : {totalCredit} hr </h3>
            <h3 className='text-xl font-semibold pt-4'>Total Price: {totalPrice} USD</h3>


        </div>
    );
};

Cart.propTypes = {
    selectedCourses: PropTypes.array,
    totalCredit: PropTypes.number,
    remainingCredit: PropTypes.number,
    totalPrice: PropTypes.number

};

export default Cart;