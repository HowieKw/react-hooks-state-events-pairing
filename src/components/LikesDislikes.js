

function LikesDislikes({ likes, dislikes, newVotes }) {
    return(
        <>
            <button name="+" onClick={newVotes}>{likes} 👍</button>

            <button name="-" onClick={newVotes}>{dislikes} 👎</button>
        </>
    );
}

export default LikesDislikes;