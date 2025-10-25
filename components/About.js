import Image from 'next/image';

export default function About() {
  return (
    <section id="about">
      <h1>About Me</h1>
      <Image
        src="/images/profile.jpg"
        alt="Umar Muqthar Profile"
        width={190}
        height={230}
      
      
      />
      <p>
        Hello! I'm <strong>Umar Muqthar</strong>, an experienced <strong>IGCSE Computer Science teacher</strong> with over <strong>8 years</strong> of international teaching experience in the Maldives, Bahrain, and India.
      </p>
      <p>
        I specialize in delivering engaging, curriculum-aligned lessons and developing students' computational thinking, problem-solving abilities, and programming skills. My teaching approach emphasizes creativity, collaboration, and real-world applications.
      </p>
      <p>
        Qualified with a <strong>Master of Computer Application</strong> and a <strong>Bachelor of Computer Science</strong>, I am passionate about making computer science accessible and inspiring the next generation of tech leaders.
      </p>
      <p>
        <em>Let's build the future together—one line of code at a time!</em>
      </p>
    </section>
  );
}