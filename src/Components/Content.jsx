import React, { useState, useEffect } from "react";
import axios from 'axios';
const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);
  

  return [playing, toggle];
};

const Content = ({ url }) => {
  const [playing, toggle] = useAudio(url);
  const [audiofile , setAudioFile] = useState()

  axios.get('')
    .then((res) => {
        console.log(res);
        setAudioFile(res)
    }).catch((error) => {
        console.log(error)
    });

  return (
    <div>
      <div style={{marginLeft:"500px",marginTop:"100px"}} > <audio
                controls
                src={audiofile}>
               
               
            </audio></div>
      <div style={{marginLeft:"650px",marginTop:"100px"}}>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
      </div>
    </div>
  );
};

export default Content;