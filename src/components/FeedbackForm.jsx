import React from 'react'
import Card from '../shared/Card'

import { useState } from 'react'
function FeedbackForm() {
    const [text, setText] = useState('');
    const handleTextChange = (e) => {
        setText(e.target.value);
    }
    return (
        <Card>
            <form >
                <h2>How Would You Rate your service with us?</h2>
                <div className='input-group'>
                    <input type="text" placeholder='Write a review' onChange={handleTextChange} value={text} />
                </div>
                <button type='submit'>Send</button>
            </form>
        </Card>
    )
}

export default FeedbackForm