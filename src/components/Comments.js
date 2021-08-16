import CommentList from "./CommentList";

function Comments({ comments }) {
    console.log(comments)

    return(
        
        <body>
        <hr></hr>
            <h2 className="App">Comments</h2>
                <div className="App">
                    {comments.map((com) => 
                    <CommentList
                    user={com.user}
                    comment={com.comment}
                    />
                )}
                </div>
        </body>
    );
}

export default Comments;