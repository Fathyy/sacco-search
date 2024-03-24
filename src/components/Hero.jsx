import styles from '../style';
import { investment } from '../assets';

const Hero = () => {
    
  return (
    <section id="home" className={`flex md:flex-row
    flex-col ${styles.paddingY}`}>
        <div className={`flex:1 ${styles.flexStart}
            flex-col xl:px-0 sm:px-16 px-6 w-[60%]`}>
            <div className="">
            <h1 className='font-semibold ss:text-[52px]
            text-[32px] ss:leading-[60px] leading-[35px]'>All in one platform to help you find information about Saccos near you</h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Find new SACCOs, build investment  plans and find a community you can be part of</p>
            </div>    
        </div>

        <div className={`flex-1 flex ${styles.flexCenter}
        md:my-0 my-10`}>
        <img src={investment} alt="" className='w-[100%]
        h-[100%]' />
      </div>
    </section>
    
  )
}

export default Hero