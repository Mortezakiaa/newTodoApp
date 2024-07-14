export type THeaderTitle = {text:string}
const HeaderTitle: React.FC<THeaderTitle> = ({text})=> {
  return (
    <div className="p-4 text-2xl text-white shadow rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800">
    <h1 className="pl-2 font-bold">{text}</h1>
  </div>
  )
}
export default HeaderTitle