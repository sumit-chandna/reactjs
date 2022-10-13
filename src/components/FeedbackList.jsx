import React from 'react'
import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
function FeedbackList({ feedback, deleteFeedback }) {
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }
    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div key={item.id} initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <FeedbackItem key={item.id} item={item} deleteFeedback={deleteFeedback} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
    // return (
    //     <div className='feedback-list'>
    //         {feedback.map((item) => {
    //             return <FeedbackItem key={item.id} item={item} deleteFeedback={deleteFeedback} />
    //         })}
    //     </div>
    // )
}

export default FeedbackList