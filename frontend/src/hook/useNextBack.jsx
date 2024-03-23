import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, playing, rest, selectPlayMusic, theLast } from "../redux/musicSlice"

function useNextBack(musicLength){

    const musicId = useSelector(selectPlayMusic)
    const dispatch=useDispatch()
    const back = () => {
        if (musicId === 1) {
          dispatch(theLast(musicLength.length))
          dispatch(playing())
        }
        else {
          dispatch(decrement())
          dispatch(playing())
        }
      }

      const next = () => {
        if (musicId == musicLength.length) {
          dispatch(theLast(1))
          dispatch(playing())
        }
        else {
          dispatch(increment())
          dispatch(playing())
        }
      }  

return [back, next]      
}

export default useNextBack