import { createSlice } from '@reduxjs/toolkit';

const musicSilce = createSlice({
    name: 'music',
    initialState:{
        play:false,
        play_music:1,
    },

    reducers : {
        increment: (state)=>{
            state.play_music+=1
        },
        decrement:(state)=>{
            state.play_music-=1
        },
        rest:(state)=>{
            state.play_music=1
        },
        setPlay:(state)=>{
            state.play=!state.play
        },
        playing:(state)=>{
            state.play=true
        },
        theLast:(state, action)=>{
            state.play_music=action.payload
            state.play=true
        },
        
    },
});

export const {increment, decrement, rest, setPlay, playing, plays, theLast}=musicSilce.actions;
export const selectPlay=(state)=>state.music.play;
export const selectPlayMusic=(state)=>state.music.play_music;
export default musicSilce.reducer;