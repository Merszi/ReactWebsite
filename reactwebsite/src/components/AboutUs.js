import React from "react";
import "./AboutStyles.css";

const Section = ({ title, content }) => (
  <section className="about-section">
    <h1>{title}</h1>
    <p>{content}</p>
  </section>
);

const AboutUs = () => (
  <div className="about-container">
    <Section
      title="Our Mission"
      content="Our mission is simple—to provide a nurturing and enriching environment for dogs to thrive physically, mentally, and socially. We believe in fostering strong bonds between pets and their owners through positive reinforcement, education, and personalized attention."
    />
    <Section
      title="Expert Training"
      content="Our team of certified trainers is committed to bringing out the best in every dog. Using science-backed positive reinforcement techniques, we tailor training programs to suit individual needs. Whether it's basic obedience, agility, or behavior modification, our goal is to empower both dogs and their owners for a harmonious relationship."
    />
    <Section
      title="Premium Boarding Experience"
      content="When life takes you away, rest assured that your canine companion is in good hands at our upscale boarding facility. Our spacious accommodations, personalized care plans, and a team of dedicated staff ensure your dog feels right at home, receiving the love and attention they deserve."
    />
    <Section
      title="Community Connection"
      content="Beyond training and boarding, Paws & Play is a vibrant community of dog enthusiasts. Join us for events, workshops, and playdates to share experiences, learn from each other, and watch your dogs build lasting friendships in a safe and supervised environment."
    />
    <Section
      title="Committed to Excellence"
      content="Paws & Play is more than a service; it's a commitment to excellence in every aspect of canine care. Our passionate and caring staff goes above and beyond to create a positive and enriching experience for both dogs and their owners."
    />
  </div>
);

export default AboutUs;
