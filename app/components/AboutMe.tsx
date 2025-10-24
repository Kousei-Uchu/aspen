/* eslint-disable react/no-unescaped-entities */
export default function AboutMe() {
    const age = getAge();

    function getAge() {
        const birthDate = new Date('2010-11-10');
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

  return (
    <>
    <section className="about-me-section">
        <div className="about-me-text-container">
            <h2 className="about-me-heading">About Me</h2>
            <p className="about-me-text">
                Hello! I'm Sorren, a {age}-year-old enthusiast from Australia with a passion for technology, programming, and photography, among many other things. I have a focus on diversity, but I love to make anything and everything. When I'm not coding or taking photos, I'm usually messing around online. Welcome to my personal website, where I display all of my works!
            </p>
        </div>
        <img
            src="/Sorren.png"
            alt="Sorren's Profile Picture"
            width={300}
            height={300}
            className="about-me-profile-pic"
        />
    </section>
    </>
  );
}