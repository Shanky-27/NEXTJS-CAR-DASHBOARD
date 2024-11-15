"use client";

import { Container } from 'react-bootstrap';
import Image from 'next/image';
import evImage1 from './ev1.jpeg';
import evImage2 from './ev2.jpeg';
import evImage3 from './ev3.jpeg';
import evImage4 from './ev4.jpeg';

const imageContainerStyle = {
  overflow: 'hidden',
  borderRadius: '10px',
  transition: 'transform 0.3s ease',
  display: 'inline-block',
  margin: '10px',
  flex: '1 1 300px',
};

const imageStyle = {
  objectFit: 'cover',
  width: '100%',
};

const contentStyle = {
  padding: '0 20px',
  flex: '1 1 auto',
};

const rowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  marginBottom: '40px',
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
};

const subHeadingStyle = {
  fontSize: '1.5rem',
  margin: '15px 0',
};

const textStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
};

export default function ElectricVehiclePage() {
  return (
    <Container>
      <h1 style={headingStyle}>Embrace Electric Vehicles for a Sustainable Future</h1>

      <div style={rowStyle}>
        <div style={contentStyle}>
          <p style={textStyle}>
            Transitioning to electric vehicles (EVs) is one of the most effective ways to reduce carbon emissions and combat climate change. Unlike traditional petrol, diesel, or CNG vehicles, EVs produce zero tailpipe emissions, contributing to cleaner air and a healthier planet. By making the switch to electric, we can significantly lower our carbon footprint and promote sustainable transportation solutions.
          </p>
        </div>
        <div style={imageContainerStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Image 
            src={evImage1} 
            alt="Electric Vehicle Overview"
            layout="responsive"
            width={300}
            height={300}
            style={imageStyle}
          />
        </div>
      </div>

      <h2 style={subHeadingStyle}>Benefits of Electric Vehicles:</h2>
      <ul style={textStyle}>
        <li>Zero tailpipe emissions, drastically reducing air pollution.</li>
        <li>Lower operating costs compared to petrol and diesel vehicles due to reduced fuel and maintenance expenses.</li>
        <li>Government incentives and rebates for EV purchases, promoting wider adoption.</li>
        <li>Quieter operation, contributing to less noise pollution in urban areas.</li>
      </ul>

      <div style={rowStyle}>
        <div style={imageContainerStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Image 
            src={evImage2} 
            alt="Electric Vehicle Charging"
            layout="responsive"
            width={300}
            height={300}
            style={imageStyle}
          />
        </div>
        <div style={contentStyle}>
          <p style={textStyle}>
            Electric vehicles not only benefit individual drivers but also play a crucial role in reducing national carbon emissions. By decreasing the demand for fossil fuels, we can contribute to a more sustainable energy system. Charging infrastructure for EVs is rapidly expanding, making it easier than ever to find convenient charging stations, whether at home, work, or along travel routes.
          </p>
        </div>
      </div>

      <h2 style={subHeadingStyle}>How EVs Reduce Carbon Emissions:</h2>
      <p style={textStyle}>
        The shift from fossil fuel-powered vehicles to electric vehicles has a profound impact on our carbon emissions. By utilizing renewable energy sources for electricity, such as solar or wind power, we can achieve near-zero emissions in the transportation sector. This transformation not only addresses climate change but also fosters energy independence and innovation.
      </p>

      <h3 style={subHeadingStyle}>1. Energy Efficiency</h3>
      <p style={textStyle}>
        Electric motors are significantly more efficient than internal combustion engines. While traditional engines convert only about 20% of the fuel's energy into usable power, EVs can convert over 60% of the electrical energy from the grid to power at the wheels. This efficiency leads to lower overall energy consumption and reduced greenhouse gas emissions.
      </p>

      <h3 style={subHeadingStyle}>2. Renewable Energy Integration</h3>
      <p style={textStyle}>
        Charging electric vehicles with renewable energy sources allows us to minimize the environmental impact even further. As the grid becomes greener with more solar and wind installations, the overall emissions associated with EV usage decrease. This transition not only helps in combating climate change but also promotes job creation in the renewable energy sector.
      </p>

      <div style={rowStyle}>
        <div style={contentStyle}>
          <p style={textStyle}>
            As technology advances, battery storage solutions are improving, allowing for longer ranges and quicker charging times. With ongoing innovations in EV technology, we can expect even greater efficiency and sustainability in the future, making electric vehicles a viable option for all drivers.
          </p>
        </div>
        <div style={imageContainerStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Image 
            src={evImage3}
            alt="Electric Vehicle Technology"
            layout="responsive"
            width={300}
            height={300}
            style={imageStyle}
          />
        </div>
      </div>

      <h2 style={subHeadingStyle}>Making the Switch:</h2>
      <p style={textStyle}>
        Transitioning to an electric vehicle is not just a personal choice; it's a collective effort towards a sustainable future. Each individual who chooses an EV contributes to a larger movement aimed at reducing reliance on fossil fuels and minimizing environmental impact. As more drivers make this switch, the demand for cleaner energy solutions will increase, leading to a positive feedback loop that benefits everyone.
      </p>

      <div style={rowStyle}>
        <div style={imageContainerStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Image 
            src={evImage4}
            alt="Electric Vehicle in Urban Area"
            layout="responsive"
            width={300}
            height={300}
            style={imageStyle}
          />
        </div>
        <div style={contentStyle}>
          <p style={textStyle}>
            The future of transportation is electric, and by embracing this change, we can create a healthier planet for generations to come. Join the movement towards sustainable mobility by choosing electric vehicles and advocating for cleaner, greener alternatives to traditional fossil fuel-powered cars.
          </p>
        </div>
      </div>
    </Container>
  );
}
