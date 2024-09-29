import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/slices/exampleSlice";
const PageA = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.example.value)

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    if (state === 0) return
    dispatch(decrement())
  }

  return (
    <div className="text-center">
      <h3>Page A</h3>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{state}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  )
}

export default PageA