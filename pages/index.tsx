import Image from "next/image";
import localImage from "../public/mountains.jpg";

const HomePage = () => {
  const remoteImage = "https://images.unsplash.com/photo-1525824236856-8c0a31dfe3be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVyZmFsbHxlbnwwfHwwfHw%3D";

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
          // blurDataURL={`data:image/jpeg:base64,${remoteImage}`} automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </section>

      <section>
        <h2>2. Remote Images (without onload blur)</h2>
        <Image
          src={remoteImage}
          alt="Picture of the author"
          width={400}
          height={500}
        />
      </section>

      <section>
        <h2>3. Remote Images (with onload bluring)</h2>
        <div style={{ display: "flex;" }}>
          <Image
            src={remoteImage}
            alt="Picture of the author"
            blurDataURL={`data:image/jpeg:base64,${remoteImage}`}
            placeholder="blur"
            width={200}
            height={250}
          />
          <Image
            src={remoteImage}
            alt="Picture of the author"
            blurDataURL={`data:image/jpeg:base64,${remoteImage}`}
            placeholder="blur"
            width={200}
            height={250}
          />
          <Image
            src={remoteImage}
            alt="Picture of the author"
            blurDataURL={`data:image/jpeg:base64,${remoteImage}`}
            placeholder="blur"
            width={200}
            height={250}
          />
          <Image
            src={remoteImage}
            alt="Picture of the author"
            blurDataURL={`data:image/jpeg:base64,${remoteImage}`}
            placeholder="blur"
            width={200}
            height={250}
          />
          <Image
            src={remoteImage}
            alt="Picture of the author"
            blurDataURL={`data:image/jpeg:base64,${remoteImage}`}
            placeholder="blur"
            width={200}
            height={250}
          />
        </div>
      </section>

      <section>
        <h2>4. Remote Images (Responsive layout type)</h2>
        <Image
          src={remoteImage}
          alt="Picture of the author"
          blurDataURL={`data:image/jpeg:base64,${remoteImage}`}
          placeholder="blur"
          layout="responsive"
          width={400}
          height={500}
        />
      </section>
    </div>
  );
};

export default HomePage;
