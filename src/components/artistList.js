import React from 'react';
import {Link} from 'react-router-dom';

const ArtistsList = (props) => {

    console.log(props)

    const list = ({allArtists}) =>{
        if(allArtists){
            return allArtists.map((data)=>{

                const style= {
                    background: `url('/images/covers/${data.cover}.jpg') no-repeat`
                }

                return(
                    <Link key={data.id} to={'/artist/${data.id}'} className="artist_item" style={style}>
                        <div>{data.name}</div>
                    </Link>
                )
            })
        }
        
    }


    return(
        <div className="artists_list">
            <h4>Browse the Artists</h4>
            {list(props)}
        </div>
    )   
}

export default ArtistsList;

/*
var a = 10
var b = "i am "+a;

var b ="i am ${a}"
*/