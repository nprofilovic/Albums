import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import albumData from '../../api/albumData';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    
    state = {
        albums: []
    }

    componentWillMount() {
        this.fetchAlbum();
        
    }
    fetchAlbum = async () => {
        const response = await albumData.get('/music_albums');
        this.setState({ albums: response.data})
    }
    renderAlbums() {
        return this.state.albums.map((album) =>
            <AlbumDetail key={album.title} data={album} />
        )
    }
    render() {
       console.log(this.state.data);
       
        
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}



export default AlbumList
