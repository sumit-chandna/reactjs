import { useState } from 'react';
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import feedbackData from './data/FeedbackData';
function App() {
    const [feedback, setFeedback] = useState(feedbackData)
    const deleteFeedback = (id) => {
        if (window.confirm('Are You Sure?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }
    return (
        <>
            <Header />
            {/* <Header bgColor='red' textColor='blue'/> */}
            <div className="container">
                <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
            </div>
        </>
    );
}

export default App;