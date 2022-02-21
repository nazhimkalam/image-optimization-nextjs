import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import localImage from "../public/mountains.jpg";

const HomePage = ({ imageProps }: any) => {
  return (
    <div style={{ margin: "2pc 5pc" }}>
      <h1>Image Optimization using NextJs</h1>
      <section>
        <h2>1. Using local images</h2>
        <Image
          src={localImage}
          alt="Picture of the author"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL={imageProps.blurDataURL} automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </section>

      <section>
        <h2>2. Remote Images (without onload blur)</h2>
        <Image
          src={imageProps.remoteImage}
          alt="Picture of the author"
          width={400}
          height={500}
        />
      </section>

      <section>
        <h2>3. Remote Images (with onload bluring)</h2>
        <div style={{ display: "flex" }}>
          <Image
            src={imageProps.remoteImage}
            alt="Picture of the author"
            blurDataURL={imageProps.blurDataURL}
            placeholder="blur"
            width={200}
            height={250}
          />
          <Image
            src={imageProps.remoteImage}
            alt="Picture of the author"
            blurDataURL={imageProps.blurDataURL}
            placeholder="blur"
            width={200}
            height={250}
          />
          <Image
            src={imageProps.remoteImage}
            alt="Picture of the author"
            blurDataURL={imageProps.blurDataURL}
            placeholder="blur"
            width={200}
            height={250}
          />
          <Image
            src={imageProps.remoteImage}
            alt="Picture of the author"
            blurDataURL={imageProps.blurDataURL}
            placeholder="blur"
            width={200}
            height={250}
          />
          <Image
            src={localImage}
            alt="Picture of the author"
            placeholder="blur"
            width={200}
            height={250}
          />
        </div>
      </section>

      <section>
        <h2>4. Remote Images (Responsive layout type)</h2>
        <Image
          src={imageProps.remoteImage}
          alt="Picture of the author"
          blurDataURL={imageProps.blurDataURL}
          placeholder="blur"
          layout="responsive"
          width={400}
          height={500}
        />
      </section>

      <section>
        <h2>5. Local Images (Quality of the images [1-100])</h2>
        <div>
          <p>Image with the quality set to its lowest (1)</p>
          <Image
            src={localImage}
            alt="Picture of the author"
            width={800}
            height={500}
            quality={1}
          />
        </div>
        <div>
          <p>Image with the quality set to its maximum (100)</p>
          <Image
            src={localImage}
            alt="Picture of the author"
            width={800}
            height={500}
            quality={100}
          />
        </div>
      </section>

      <section>
        <h2>6. Remote Images (onLoadComplete)</h2>
        <Image
          src={imageProps.remoteImage}
          alt="Picture of the author"
          blurDataURL={imageProps.blurDataURL}
          placeholder="blur"
          layout="responsive"
          width={400}
          onLoadingComplete={(image) => {
            console.log(image);
          }}
          height={500}
        />
      </section>
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const remoteImage =
  "https://images.unsplash.com/photo-1525824236856-8c0a31dfe3be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVyZmFsbHxlbnwwfHwwfHw%3D";
  const { base64, img } = await getPlaiceholder(remoteImage, { size: 10 });

  return {
    props: {
      imageProps: {
        ...img,
        blurDataURL: base64,
        remoteImage
      },
    },
  };
};
