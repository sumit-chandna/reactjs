import React, { useState } from 'react';
import Button from '../shared/Button';
import Card from '../shared/Card';
import RatingSelect from './RatingSelect';
function FeedbackForm({ handleAdd }) {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text Must be atleast 10 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text: text,
                rating: rating
            }
            handleAdd(newFeedback);
            setText('')
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How Would You Rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className='input-group'>
                    <input type="text" placeholder='Write a review' onChange={handleTextChange} value={text} />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm