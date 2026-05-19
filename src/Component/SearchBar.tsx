import { Search } from 'lucide-react'


interface SearchBarProps{
  city:string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather:()=>void;
}

const SearchBar = ({
  city,
  setCity,
  getWeather,


}:SearchBarProps ) => {
  return (
    <div className='flex items-center bg-gray-100 rounded-full px-4 py-3 '>
      <input type="text" 
      placeholder='search city......' 
      value={city}
      onChange={(e)=>setCity(e.target.value)}
      className='bg-transparent outline-none w-full'
      />
      <Search  onClick={getWeather} className='cursor-pointer text-gray-500'/>

    </div>
  )
}

export default SearchBar