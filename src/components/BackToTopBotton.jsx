import './BackToTopBotton.css'

export default function BackToTopBotton({titleRef}){

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return(
        <div onClick={() => scrollToSection(titleRef)} className='BackToTopBottonWrapper'>
            <img src='/arrow.png' className='BackToTopBottonarrow'/>
        </div>
    )
}