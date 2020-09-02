import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    // set the state with a currentVideo property, the value set to empty for now until cliked, then add video to player
    // set this.state to equal the videos title
    // debugger;
    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData

    // this.onVideoTitleClick = this.onVideoTitleClick.bind(this);
    // this.state = {videoList: props};
    };
  }

  // make an onClick method
  onVideoTitleClick(video) {
    console.log(video);
    // event.target.textContent gives title
    this.setState({
      currentVideo: video
    });
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.currentVideo}/></h5></div>
          </div>
          <div className="col-md-5">
            <div ><h5><em>videoList</em><VideoList
              onVideoTitleClick={this.onVideoTitleClick.bind(this)}
              videos={this.state.videoList} /></h5></div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

// window.App = App;



// when clicked, adds the video cliked to the VideoPLayer
// currentVideo = this.state.currentVideo;


// create a object
// change currentVideo to the one that is clicked


// var currentVideo = this.state.videoList[0];

// for (var i = 1; i < this.state.videoList.length; i++) {
//   // console.log('VideoListEntry #' + i + this.state.videoList[i].snippet.title);
//   // console.log('Video Title Clicked ' + this.state.currentVideosTitle);
//   // check if each title in video list matches the title that was clicked
//   if (this.state.videoList[i].snippet.title === this.state.currentVideosTitle) {
//     currentVideo = this.state.videoList[i];
//   }
// }






// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
