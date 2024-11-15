"use client";

import { Container } from 'react-bootstrap';
import Image from 'next/image';
import oddEven1 from './oddEven1.jpeg';
import oddEven2 from './oddEven2.jpeg';
import oddEven3 from './oddEven3.jpeg';
import oddEven4 from './oddEven4.jpeg';

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

export default function OddEvenPage() {
  return (
    <Container>
      <h1 style={headingStyle}>Implementing Odd-Even Vehicle Usage for a Cleaner Environment</h1>

      <div style={rowStyle}>
        <div style={contentStyle}>
          <p style={textStyle}>
            The odd-even vehicle usage scheme is a practical approach aimed at reducing traffic congestion and lowering carbon emissions in urban areas. By allowing vehicles with odd and even number plates to operate on alternate days, cities can effectively decrease the number of cars on the road, leading to improved air quality and reduced pollution levels. This strategy not only helps mitigate traffic issues but also encourages the use of public transportation and carpooling.
          </p>
        </div>
        <div style={imageContainerStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Image 
            src={oddEven1} 
            alt="Odd-Even Vehicle Scheme Overview"
            layout="responsive"
            width={300}
            height={300}
            style={imageStyle}
          />
        </div>
      </div>

      <h2 style={subHeadingStyle}>Benefits of the Odd-Even Scheme:</h2>
      <ul style={textStyle}>
        <li>Significantly reduces traffic congestion during peak hours.</li>
        <li>Improves air quality by decreasing the number of vehicles on the road.</li>
        <li>Encourages carpooling and the use of public transportation.</li>
        <li>Promotes awareness about sustainable transportation practices among the public.</li>
      </ul>

      <div style={rowStyle}>
        <div style={imageContainerStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Image 
            src={oddEven2} 
            alt="Traffic Flow Improvement"
            layout="responsive"
            width={300}
            height={300}
            style={imageStyle}
          />
        </div>
        <div style={contentStyle}>
          <p style={textStyle}>
            One of the most immediate benefits of implementing an odd-even vehicle usage scheme is the reduction in traffic flow. By limiting the number of vehicles on the road, cities can experience smoother traffic patterns, leading to shorter travel times and less frustration for drivers. This change can also result in lower fuel consumption, as vehicles can maintain consistent speeds rather than idling in traffic.
          </p>
        </div>
      </div>

      <h2 style={subHeadingStyle}>How It Works:</h2>
      <p style={textStyle}>
        The odd-even scheme operates by designating specific days for vehicles with odd and even number plates. For instance, vehicles with odd numbers may operate on odd days, while even-numbered vehicles are allowed on even days. Exemptions can be made for emergency vehicles, public transport, and specific circumstances to ensure that the system is both fair and efficient.
      </p>

      <h3 style={subHeadingStyle}>1. Implementation</h3>
      <p style={textStyle}>
        To implement the scheme effectively, cities need to create public awareness campaigns that inform residents about the rules and benefits of the odd-even system. Signage should be clear, and technology such as mobile apps can be used to remind drivers of the current regulations and provide updates on any changes. Law enforcement agencies should also be involved to ensure compliance.
      </p>

      <h3 style={subHeadingStyle}>2. Public Engagement</h3>
      <p style={textStyle}>
        Engaging the public is crucial for the success of the odd-even scheme. Community events, workshops, and social media campaigns can help raise awareness about the environmental benefits and encourage residents to participate. Highlighting stories of individuals who have embraced carpooling or public transport can inspire others to follow suit.
      </p>

      <div style={rowStyle}>
        <div style={contentStyle}>
          <p style={textStyle}>
            By fostering a culture of cooperation and environmental responsibility, cities can ensure that the odd-even vehicle usage scheme is embraced by the community, leading to long-term benefits for both the environment and urban living conditions.
          </p>
        </div>
        <div style={imageContainerStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Image 
            src={oddEven3}
            alt="Community Engagement for Odd-Even Scheme"
            layout="responsive"
            width={300}
            height={300}
            style={imageStyle}
          />
        </div>
      </div>

      <h2 style={subHeadingStyle}>Looking Ahead:</h2>
      <p style={textStyle}>
        The odd-even vehicle usage scheme represents a small yet impactful step toward sustainable urban transport. As cities continue to grow and the challenges of climate change escalate, innovative solutions like this become essential. By promoting reduced vehicle usage, cities can make strides toward a healthier environment, less congestion, and improved quality of life for all residents.
      </p>

      <div style={rowStyle}>
        <div style={imageContainerStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Image 
            src={oddEven4} 
            alt="Future of Urban Transport"
            layout="responsive"
            width={300}
            height={300}
            style={imageStyle}
          />
        </div>
        <div style={contentStyle}>
          <p style={textStyle}>
            By continuing to explore innovative transportation policies and encouraging community involvement, we can pave the way for cleaner, more efficient cities. The odd-even scheme not only benefits the environment but also enhances urban living by promoting a culture of sustainability and cooperation among residents.
          </p>
        </div>
      </div>
    </Container>
  );
}
