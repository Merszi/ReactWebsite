import React from 'react';
import './OurService.css';
import TypeWriter from './TypeWriter';

function ServicePage() {
    const servicesData = [
      {
        title: "Dog Boarding",
        description: "Trust us with your dog's comfort when life takes you away. Our spacious accommodations, personalized care, and dedicated staff ensure a homely, enjoyable stay for your furry family member.",
        icon: "fas fa-home",
      },
      {
        title: "Dog Training",
        description: "Unlock your dog's potential with expert training. From basic obedience to advanced skills, our trainers use positive reinforcement, strengthening the bond between you and your canine companion.",
        icon: "fas fa-graduation-cap",
      },
      {
        title: "Pet Grooming",
        description: "Indulge your pet with our top-notch grooming services. From baths to trims, our skilled groomers ensure your furry friend looks and feels fabulous. Elevate their well-being with our spa-like treatments.",
        icon: "fas fa-cut",
      },
      {
        title: "Community",
        description: "Join our lively community! Attend events, workshops, and playdates to connect with fellow dog lovers. Share experiences and let your dog socialize in a safe, supervised environment.",
        icon: "fas fa-dog",
      },{
        title: "Private Training",
        description: "For personalized attention, opt for private training sessions tailored to your dog's needs. Address behavior issues, advanced training, or specific concerns in a one-on-one setting.",
        icon: "fas fa-paw",
      },{
        title: "Doggy Daycare",
        description: "Elevate your dog's day with our supervised care. Play, stimulation, and socializing guarantee a happy and tired pup. Enroll your furry friend for a joyful and secure experience.",
        icon: "fas fa-sun",
      },
    ];
  
    return (
      <div className="Services">
        <div className="effectText">
            <TypeWriter text ={'  At Paws & Play, we offer a comprehensive range of services designed to meet the unique needs of every dog.'}/>
        </div>
        <section id="services" className="section services-section">
            <div className="service-cards">
              {servicesData.map((service, index) => (
                <div className="service-card" key={index}>
                  <i className={service.icon}></i>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
        </section>
      </div>
    );
  }

export default ServicePage;
