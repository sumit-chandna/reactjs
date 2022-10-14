import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import AboutIconLink from './components/AboutIconLink';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from './components/FeedbackStats';
import Header from "./components/Header";
import Post from './components/Post';
import feedbackData from './data/FeedbackData';
import AboutPage from './pages/AboutPage';

function App() {
    const [feedback, setFeedback] = useState(feedbackData)
    const deleteFeedback = (id) => {
        if (window.confirm('Are You Sure?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }
    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
                        </>
                    } >
                    </Route>
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/post/*' element={<Post />} />
                </Routes>
                <AboutIconLink />
            </div>
        </Router>
    );
}

export default App;