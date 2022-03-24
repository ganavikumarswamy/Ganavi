// import React from 'react'
// import ReactAudioPlayer from 'react-audio-player';

// function Content() {
 
//   axios
//   .get(`/users`, {})
//   .then(res => {
//       const data = res.data
//       console.log(data)

//   })
//   .catch((error) => {
//       console.log(error)
//   })



//   return (
//     <div style={{marginLeft:"500px",marginTop:"100px"}}>
//       <ReactAudioPlayer
//       url
//     src="https://www.youtube.com/watch?v=9KaMsGSxGno"
//     autoPlay
//     controls
//   />
//     <div style={{padding:"20px"}}>
//       Domian:
//       <button 
//       // onClick={() => handleEditClick(todo)}
//       >Edit</button>
//             <button 
//             // onClick={() => handleDeleteClick(todo.id)}
//             >Delete</button>
//     </div>
//     <div style={{padding:"20px"}}>
//       Language: hello
//       <button 
//       // onClick={() => handleEditClick(todo)}
//       >Edit</button>
//             <button 
//             // onClick={() => handleDeleteClick(todo.id)}
//             >Delete</button>
//     </div>
//     <div style={{padding:"20px"}}>
//      Gender:
//      <button 
//       // onClick={() => handleEditClick(todo)}
//       >Edit</button>
//             <button 
//             // onClick={() => handleDeleteClick(todo.id)}
//             >Delete</button>
//     </div>
//     </div>
//   )
// }

// export default Content













// import React, { useEffect, useState } from "react"
// import ReactAudioPlayer from 'react-audio-player';

// const Content = () => {
//   const [users, setUsers] = useState([])

//   const fetchData = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data)
//       })
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])
//   console.log(fetchData)
//   return (
//     <div>
//       <ReactAudioPlayer
//       url
//     src="https://www.youtube.com/watch?v=9KaMsGSxGno"
//     autoPlay
//     controls
//   />
//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.id}>{user.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default Content



// import React, { useState, useEffect } from "react";
// import ReactAudioPlayer from 'react-audio-player';

// const Content = ({ url }) => {
//   const [data, setData] = useState("");
  

//   return (
//     <div  style={{marginLeft:"500px",marginTop:"100px"}}>
//         <ReactAudioPlayer
//        url
//    src="https://www.youtube.com/watch?v=9KaMsGSxGno"
//     autoPlay
//     controls
//     // onClick={toggle}>{playing ? "Pause" : "Play"}
  
//   />
  
//     </div>
//   );
// };

// export default Content;


// import React, { useEffect ,useState} from 'react'
// // import Header from '../header/Header';
// // import "./home.css"
// import axios from 'axios';

// export default function Content(){

//     const [audiofile , setAudioFile] = useState()
 

   
    
//     const Player = ({ url }) => {
//       const [playing, toggle] = (null);


//     return (
//         <div  style={{marginLeft:"500px",marginTop:"100px"}}>
//             {/* <Header /> */}
//             {/* <form action="http://localhost:8000/songs/upload" method="post" enctype="multipart/form-data">
//                 <h1>File Upload</h1>
//                 <input id="file" type="file" accept="audio/*" name='file' />
//                 <input type="submit" />
//             </form> */}

//             <audio
//                 controls
//                 src={audiofile}>
               
               
//             </audio>
//             <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
//         </div>
//     )
//           }
    
// }






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