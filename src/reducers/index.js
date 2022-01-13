import { combineReducers } from "redux"

const songsReducer = () => {
    return [
        {
            title: "Spaceship",
            duration: "3:47"
        },
        {
            title: "Excuses",
            duration: "2:00"
        },
        {
            title: "Shakira!",
            duration: "3:45"
        },
        {
            title: "Macarena",
            duration: "4:02"
        }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === "SONG_SELECTED"){
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})