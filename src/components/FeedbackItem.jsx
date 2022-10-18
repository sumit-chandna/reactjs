import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';

function FeedbackItem({ item }) {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <button className='close' onClick={() => deleteFeedback(item.id)}>
                <FaTimes color='purple' />
            </button>
            <button className='edit' >
                <FaEdit color='purple' onClick={() => editFeedback(item)} />
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}
export default FeedbackItem