import React, {useState, useEffect} from 'react';
import Sketch from 'react-p5';
import * as ml5 from 'ml5';

function App() {

  useEffect(() => {
  }, [])

  const [video, setVideo] = useState(null);
  // const [poseNet, setPoseNet] = useState(null);

  const setup = async (p5, canvasParentRef) => {
    p5.createCanvas(640, 480)
    const init = p5.createCapture(p5.VIDEO);
    init.hide();
    setVideo(init)
    ml5.poseNet(init, () => console.log('posenet rdy'))
    // poseNet.on('pose', (poses) => console.log(poses))
  }

  const draw = (p5) => {
    p5.image(video, 0, 0);
  }

  return (
    <div className="App">
      <Sketch setup={setup} draw={draw}/>
    </div>
  );
}

export default App;
