import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'
import Spinner from './shared/Spinner'

function FeedbackList() {
    const { feedback, isLoading } = useContext(FeedbackContext);
    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No Feedback Yet</p>
    }
    return isLoading ? <Spinner /> :
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
}

export default FeedbackList