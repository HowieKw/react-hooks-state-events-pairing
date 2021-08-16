

function VideoLink({ video, title }) {
  
    return (
      <div className="App">
        <iframe
        width="919"
        height="525"
        src={video}
        frameBorder="0"
        allowFullScreen
        title={title}
        />
          <h1>{title}</h1>
      </div>
    );
    
  }


export default VideoLink;