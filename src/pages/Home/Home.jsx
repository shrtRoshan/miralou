import HeroImage from '../../assets/images/hero.png'

export const  Home =() => {
  return (
    <div className='relative flex items-center'>
      <img src={HeroImage} alt="" srcset="" />
      <div className='absolute w-full'>
        <div className="container mx-auto">
          <h1>Scandinavian Supremacy</h1>
        </div>
        
      </div>
    </div>
  )
}
