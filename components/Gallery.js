
<div className="gallery">
  <Image src="/images/classroom1.jpg" alt="Classroom 1" width={150} height={100} />
  <Image src="/images/classroom2.jpg" alt="Classroom 2" width={150} height={100} />
</div>



import Image from 'next/image';

export default function Gallery() {
  return (
    <section id="gallery">
      <h1>Gallery</h1>
      <Image
        src="/images/rawabi.jpg"
        alt="Profile photo"
        width={200}
        height={200}
      />
      <p>
        Hello! I am [Umar Muqthar], an enthusiastic teacher...
      </p>
    </section>
  );
}