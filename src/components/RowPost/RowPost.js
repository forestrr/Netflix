import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'

function RowPost(props) {
    const [urlid,setUrlid]=useState('')
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data)
            setMovies(response.data.results)
        }).catch(err=>{
           // alert('network error')
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie =(id)=>{
          console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
           if(response.data.results.length!==0){
               setUrlid(response.data.results[0])
           }else{
               console.log('Array Empty')
           }
        })
      }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall? 'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
                        
            )}
            </div>
       { urlid &&    <YouTube opts={opts} videoId={urlid.key}/>}
        </div>
    )
}

export default RowPost 