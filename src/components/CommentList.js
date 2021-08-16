

function CommentList({ user, comment }) {
    return(
        <>
            <h3 className="App">{user}</h3>
            <div>{comment}</div>

        </>
    )
}

export default CommentList;