import { useLocation } from "react-router-dom"

const Success = () => {

  const location = useLocation()
  console.log(location)
  return (
    <div>
      Payment Successfull
    </div>
  )
}

export default Success
