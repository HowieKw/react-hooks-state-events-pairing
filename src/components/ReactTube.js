import video from "../data/video.js";
import VideoLink from "./VideoLink";
import Stats from "./Stats";
import Comments from "./Comments"

import { useState } from "react";

// ReactTube
// ├───Video.js
// └───Stats.js
//     ├───LikesDislikes
//     └───Comments
//          └────CommentsColumn?




function ReactTube() {
  console.log("Here's your data:", video);

  const [controlUpVotes, setUpControlVotes] = useState(video.upvotes);
  const [controlDownVotes, setDownControlVotes] = useState(video.downvotes);
  const [commentView, setCommentView] = useState(false);


  //Handles increase in likes and dislikes
  //Passed to Stats then LikesDislikes
  function handleVotes(e) {
    if(e.target.name === "+") {
      const newLikes = controlUpVotes + 1;
      return setUpControlVotes(newLikes);
    } else {
      const newDislikes = controlDownVotes + 1;
      return setDownControlVotes(newDislikes);
    }
  }


  function handleCommentToggle() {
    setCommentView(!commentView);
  }

  return (
    <>  
      <VideoLink 
        video={video.embedUrl} 
        title={video.title} 
          />
      <Stats 
        views={video.views} 
        uploadDate={video.createdAt}
        likes={controlUpVotes}
        dislikes={controlDownVotes}
        handleVotes={handleVotes}
        />

      <br></br>

    <div className="App">
      <button onClick={handleCommentToggle}>Hide Comments</button>
      </div>
      { commentView ? null : <Comments comments={video.comments} /> }
      </>
      
  );
}

export default ReactTube;
