import data from '@/service/about.json'
import { dataTimeLine } from './timeline'
import Particles from '@/app/components/particles'
import { Avatar } from '@/app/components/avatar/avatar'
export default function About() {
  return (
    <>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <main className="w-full sm:w-[1024px] mr-3 mt-24 min-h-[80vh] mx-auto animate-title">
        <article className='flex flex-col gap-3 '>
        <h3 className= "w-full text-white text-4xl font-semibold font-['Inter'] leading-loose ">{data.title}</h3>
        <ul>
          {[
            {
              text:"Desenvolvedor de interfaces e APis",
              icon:" 👨‍💻"
            },
            {
              text:"Formado em analise e desenvolvimento de sistemas",
              icon:"📚"
            },
            {
              text:"interesse em desenvolvimento frontend/backend",
              icon:"👨‍💻"
            }
          ].map(({text,icon})=>{
            return(
              <>
                <li className='flex items-center gap-2'>
                 {icon && <p>{icon}</p>}
                  <p className="w-full text-white/95 text-xl font-normal font-['Inter'] leading-loose">{text}</p>
                </li>
              </>
            )
          })}
        </ul>
        <section className='w-full sm:w-[640px] flex gap-2 items-center justify-start flex-wrap'>
            {data.languages.map(({url}) => {
              return (
                <Avatar.Img url={url} alt='' key={url} />
              )
            })}
          </section>
        <section id='timeline'  className={`relative max-w-[1200px] my-24 mx-auto`}>
         {dataTimeLine.map(({smallText,text,title},index)=>{
          const lengthDataTime = dataTimeLine.length
          return(
            <>
            <div id='container' className={`py-2 px-2 relative sm:w-1/2 w-full ${index % 2 === 0?"sm:left-0":"sm:left-1/2"}`}>
             <div className={`hidden sm:block w-12 h-12  absolute rounded-full bg-white ${index % 2 === 0? '-right-6':'-left-6'} top-8   z-10`}></div>
             <div id='text-box' className='py-5 px-7 bg-zinc-950 relative rounded-md text-base flex flex-col gap-2'>
               <h2 className='text-2xl'>{title}</h2>
               <small className='text-sm'>{smallText}</small>
               <p>{text}</p>
             </div>
           </div>
           {index <= lengthDataTime && (
              <div key={`bar-${index}`} className={`hidden sm:flex w-[0.8px] h-full bg-white mx-auto absolute top-0  ${index % 2 === 0? 'left-1/2' : 'right-1/2'}`}     />
           )}
           </>
          )
         })}
        </section>
        </article>

      </main>
    </>
  )
}