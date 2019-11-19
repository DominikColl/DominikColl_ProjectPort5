//export to export functions

// export so it can be used in home 
export const artistClickk = async (artist) => {
    console.log('from infoArtist');
    ///2.0/?method=artist.getinfo&artist=Cher&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json
    const res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
    const data = await res.json();
    //if data results exist
    let r = await data;
    console.log(r);
}
export const loadArtistDetail = async (mbid) => {
    // let albumArray = [];
    const res = await fetch(`//ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=${mbid}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
    const data = await res.json();
    return await data;
}
export const loadAlbumDetail = async (mbid) => {
    // let albumArray = [];
    const res = await fetch(`//ws.audioscrobbler.com/2.0/?method=album.getinfo&mbid=${mbid}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
    const data = await res.json();
    return await data;
}
///2.0/?method=user.getinfo&user=rj&api_key=YOUR_API_KEY&format=json
export const loadSongDetail = async (mbid) => {
    // let albumArray = [];
    const res = await fetch(`//ws.audioscrobbler.com/2.0/?method=track.getInfo&mbid=${mbid}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
    const data = await res.json();
    return await data;
}