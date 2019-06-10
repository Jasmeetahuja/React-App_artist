import React,{Component} from 'react';
import Banner from '../components/banner';
import ArtistsList from '../components/artistList';
 
const URL_ARTISTS = "http://localhost:6004/artists";

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            artists:''
        }
    }

    componentDidMount(){
        fetch(URL_ARTISTS,{
            method:'GET'
        })
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                artists:json
            })
        })
    }
    
    render(){
        return(
            <div>
                <Banner></Banner>
                <ArtistsList allArtists={this.state.artists}></ArtistsList>
            </div>
        )
    }
}

export default Home;

/*
function add(a,b){
    return a+b
}

var add= (a,b) =>  a+b
*/
