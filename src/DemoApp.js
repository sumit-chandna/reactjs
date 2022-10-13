function App() {
    const title = 'Blog Post';
    const body = 'Blog post body';

    const comments = [
        { id: 1, text: 'Comment One' },
        { id: 2, text: 'Comment Two' },
        { id: 3, text: 'Comment Three' }
    ];

    const showComments = true;
    const loading = false;
    if (loading) return <h1>Loading....</h1>

    const commentBlock = <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
            {comments.map((comment, index) => (
                <li key={comment.id}>{comment.text}</li>
            ))}
        </ul>
    </div>
    return (
        <div className="container">
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>

            {showComments && commentBlock}

        </div>
    );
}

export default App;