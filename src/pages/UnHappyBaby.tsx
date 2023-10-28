import { useNavigate } from 'react-router-dom'

const UnHappyBaby = () => {
  const navigate = useNavigate()
  return (
    <div className=" h-screen w-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <p className="text-3xl font-roboto ">
        {' '}
        как жаль малыша, он остался без пёсика 😭
      </p>
      <p className="text-2xl m-1 "> вернись и попробуй ещё раз</p>
      <button
        className="py-1 m-1  border-2 rounded-lg border-black bg-white hover:bg-cyan-200 px-[30px] duration-300 "
        onClick={() => navigate(-1)}
      >
        назад
      </button>
    </div>
  )
}
export default UnHappyBaby
