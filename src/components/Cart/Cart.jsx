
import PropTypes from 'prop-types';

const Cart = ({selectedCourses,totalCredit}) => {
    console.log(totalCredit)
    return (
        <div>
            <h3 className='text-3xl font-bold border-b-2'> Course Name</h3>
            
            {
                selectedCourses.map((item,idx) => ( 
                <h3 className='text-lg mt-4' key={item.id} >{idx+1} {item?.course_name}</h3>
                    ))
            }

            <h3 className='text-lg font-medium'>Total Credit Hour : {totalCredit}</h3>


        </div>
    );
};

Cart.propTypes = {
    selectedCourses : PropTypes.array,
    totalCredit : PropTypes.number
    
};

export default Cart;