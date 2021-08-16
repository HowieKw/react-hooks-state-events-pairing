import LikesDislikes from "./LikesDislikes";



function Stats({ views, uploadDate, likes, dislikes, handleVotes }) {
    return (
      <body>
        <div className="App">
          {views} Views | Uploaded {uploadDate}
          </div>

        <br></br>

        <div className="App">

            <LikesDislikes 
                likes={likes}
                dislikes={dislikes}
                newVotes={handleVotes}
                />
        </div>
      </body>
    );
  }


export default Stats;