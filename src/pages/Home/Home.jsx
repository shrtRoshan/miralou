import HeroImage from '../../assets/images/hero.png'
import Rectangle1 from '../../assets/images/Rectangle.png'

export const  Home =() => {
  return (
    <div>
      <div className='relative flex items-center'>
      <img src={HeroImage} alt="" srcset="" />
      <div className='absolute w-full'>
        <div className="container mx-auto grid gap-8">
          <h1 className='decoration--gray-700 text-6xl max-w-lg font-bold'>Scandinavian Supremacy</h1>
          <p className='w-96'>At miralou we have turned traditional skin care ingredients lists on its head</p>
          <button className='bg-yellow-300 px-84 w-64 h-16'>Buy Now</button>
        </div>
      </div>
    </div>
    <div className="flex p-28">
      <div className='grid'>
      <img src={Rectangle1} alt="" />
      <button className='bg-zinc-300 w-52 justify-self-center h-14 -my-9 '>For Women</button>
      </div>
    </div>
    <div className="grid justify-items-center px-48 ">
      <h1 className='font-serif decoration--grey-800 text-5xl'>New Arrivals</h1>
      <p className='my-4'>Lorem ipsum Sint necessitatibus alias voluptatum odit blanditiis 
      minima laboriosam numquam ipsa provident quaerat corporis accusamus, adipisci 
      esse, perferendis earum. Accusamus rerum nesciunt et.</p>
    </div>
    </div>
    
  )
}
