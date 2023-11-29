import data from '@/service/about.json'
import Image from 'next/image'
export default function About() {
  return (
    <>
      <main className="w-full sm:w-[640px] mt-24 h-[80vh] mx-auto ">
        <article className='flex flex-col gap-3'>
          <h1 className="text-white font-medium text-2xl mb-8 tracking-tighter">{data.title}</h1>
          {data.texts.slice(0, 2).map(({ content, type }, index) => {
            if (type === 'title') {
              return (
                <h1 className="text-white font-medium text-xl mb-8 tracking-tighter">{content}</h1>
              )
            } else {
              return (
                <p className='text-white/75 leading-relaxed text-lg'>{content}</p>
              )
            }
          })}
          <section className='w-full sm:w-[640px] flex gap-2 items-center justify-start flex-wrap'>
            {data.languages.map(({url},index) => {
              return (
                <Image key={index} src={url} alt='' width={50} height={50} />
              )
            })}
          </section>
        </article>

      </main>
    </>
  )
}