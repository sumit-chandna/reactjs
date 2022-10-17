import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([{
        id: 1,
        text: 'This is feedback item One',
        rating: 4
    },
    {
        id: 2,
        text: 'This is feedback item Two',
        rating: 8
    },
    {
        id: 3,
        text: 'This is feedback item Three',
        rating: 9
    }])
    const deleteFeedback = (id) => {
        if (window.confirm('Are You Sure?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }
    const updateFeedback = (id, updFeedback) => {
        setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updFeedback } : item)));
    }
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext;