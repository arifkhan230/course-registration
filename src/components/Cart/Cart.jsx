
import PropTypes from 'prop-types';

const Cart = ({selectedCourses}) => {
    // console.log(selectedCourses)
    return (
        <div>
            <h3 className='text-3xl font-bold border-b-2'> Course Name</h3>
            
            {
                selectedCourses.map((item,idx) => ( 
                <h3 className='text-lg mt-4' key={item.id} >{idx+1} {item?.course_name}</h3>
                    ))
            }


        </div>
    );
};

Cart.propTypes = {
    selectedCourses : PropTypes.array
    
};

export default Cart;