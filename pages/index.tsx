import Image from 'next/image'
import localImage from '../public/mountains.jpg'


const HomePage = () => {
  return (
    <div style={{ margin: '2pc 5pc' }}>
      <h1>Image Optimization using NextJs</h1>
      <section>
        <h2>1. Using local images</h2>
        <Image
          src={localImage}
          alt="Picture of the author"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </section>

      <section></section>

    </div>
  )
}

export default HomePage