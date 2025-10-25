import Image from 'next/image';

export default function Testimonials() {
  return (
    <section id="testimoni">
      <h1>Testimonials</h1>
       <Image
        src="/images/moemaldives.jpg"
        alt="Profile photo"
        width={200}
        height={200}
      />
      <p>
        Hello! I am [Your Name], an enthusiastic teacher.......
      </p>
    </section>
  );
}




