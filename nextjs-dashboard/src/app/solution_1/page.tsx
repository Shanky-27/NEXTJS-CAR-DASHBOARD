"use client";

import { Container } from 'react-bootstrap';
import Image from 'next/image';
import k1 from './k1.jpeg';
import k2 from './k2.jpeg';
import k3 from './k3.jpeg';
import k4 from './k4.jpeg';

const imageContainerStyle: React.CSSProperties = {
  overflow: 'hidden',
  borderRadius: '10px',
  transition: 'transform 0.3s ease',
  display: 'inline-block',
  margin: '10px',
  flex: '1 1 300px', // Adjusted for smaller layout
};

const imageStyle: React.CSSProperties = {
  objectFit: 'cover' as 'cover', // Explicitly cast as 'cover'
  width: '100%',
};

const contentStyle: React.CSSProperties = {
  padding: '0 20px',
  flex: '1 1 auto', // Allow text to fill the remaining space
};

const rowStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  marginBottom: '40px',
};

const headingStyle: React.CSSProperties = {
  fontSize: '2rem',
  marginBottom: '20px',
};

const subHeadingStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  margin: '15px 0',
};

const textStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
};


export default function Page() {
  return (
    <Container>
      <h1 style={headingStyle}>Solution 1: Reduce Carbon Emission</h1>

      <div style={rowStyle}>
        <div style={imageContainerStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Image 
            src={k1} 
            alt="Kaalink Device Overview"
            layout="responsive"
            width={300}
            height={300}
            style={imageStyle}
          />
        </div>
        <div style={contentStyle}>
          <p style={textStyle}>
            To combat carbon emissions, we recommend using the Kaalink device. This innovative solution helps monitor and optimize vehicle emissions, significantly impacting environmental health. By providing real-time data and insights, the device connects seamlessly with your vehicle's system, allowing drivers to make informed decisions. Kaalink empowers users to not only understand their carbon footprint but also encourages eco-friendly driving habits, thereby promoting a cleaner, more sustainable future. Additionally, the device integrates with various platforms, enabling users to access their data from anywhere, fostering a proactive approach to emissions management.
          </p>
        </div>
      </div>

      <h2 style={subHeadingStyle}>Advantages of Using Kaalink:</h2>
      <ul style={textStyle}>
        <li>Real-time emission tracking to help users stay aware of their environmental impact and adjust their behavior accordingly.</li>
        <li>Data-driven insights for eco-friendly driving, enabling users to adapt their habits for better efficiency and sustainability.</li>
        <li>Enhanced fuel efficiency through tailored suggestions that optimize routes and driving patterns, ultimately saving money.</li>
        <li>Promotes sustainable practices by encouraging users to reduce their carbon footprint and contribute to a healthier planet through actionable strategies.</li>
      </ul>

      <div style={rowStyle}>
        <div style={contentStyle}>
          <p style={textStyle}>
            The Kaalink device is not just about tracking emissions; it also provides users with actionable insights. By analyzing driving patterns and behaviors, it suggests optimal routes and driving styles that can lead to significant fuel savings and reduced carbon footprints. For instance, the device may recommend smoother driving techniques or alternative routes that consume less fuel. This dual approach not only enhances the driving experience but also fosters a more environmentally conscious mindset among users, making sustainability a core part of their daily routines.
          </p>
        </div>
        <div style={imageContainerStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Image 
            src={k2}
            alt="Kaalink Device in Action"
            layout="responsive"
            width={300}
            height={300}
            style={imageStyle}
          />
        </div>
      </div>

      <h2 style={subHeadingStyle}>How It Works:</h2>
      <p style={textStyle}>
        The Kaalink device connects to your vehicle's system, providing a comprehensive overview of emissions and performance metrics. Here’s a demonstration of its operation:
      </p>

      <h3 style={subHeadingStyle}>1. Carbon Collection</h3>
      <p style={textStyle}>
        The Kaalink device employs advanced sensors to monitor the exhaust gases emitted by the vehicle. These sensors collect real-time data on carbon emissions, helping to quantify the vehicle's environmental impact. By continuously analyzing the emissions, the device can identify trends and anomalies, ensuring that users are always aware of their vehicle’s performance in relation to environmental standards. This level of monitoring not only informs users but also drives them to engage in behaviors that lead to lower emissions.
      </p>

      <h3 style={subHeadingStyle}>2. Data Processing</h3>
      <p style={textStyle}>
        Once the data is collected, it is transmitted to the Kaalink mobile app, where it undergoes sophisticated analysis. The app processes the data to provide insights, such as emission levels compared to safe standards, driving habits that contribute to high emissions, and actionable tips for improvement. Users can track their progress over time, fostering a sense of achievement as they work towards reducing their carbon footprint. This personalized feedback loop encourages users to take consistent actions that lead to meaningful change.
      </p>

      <h3 style={subHeadingStyle}>3. Kaalink Ink Preparation</h3>
      <p style={textStyle}>
        Kaalink also offers a unique feature: the Kaalink ink, which is derived from carbon emissions captured by the device. The ink is prepared through a sustainable process where the collected carbon is purified and transformed into eco-friendly ink. This innovative approach not only reduces waste but also promotes creativity by allowing users to engage with their emissions in a novel way. By integrating art and technology, Kaalink inspires users to reflect on their environmental impact through creative expression.
      </p>
      <p style={textStyle}>
        The Kaalink ink is non-toxic and environmentally safe, making it an excellent choice for artists and enthusiasts alike. The ink can be used in various mediums, from traditional painting to digital art, encouraging a broader audience to engage in eco-friendly art while supporting sustainable practices. This feature not only fosters creativity but also sparks conversations about sustainability in art and beyond.
      </p>

      <div style={rowStyle}>
        <div style={imageContainerStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Image 
            src={k3}
            alt="Kaalink App Interface"
            layout="responsive"
            width={300}
            height={300}
            style={imageStyle}
          />
        </div>
        <div style={contentStyle}>
          <p style={textStyle}>
            The mobile app provides a user-friendly interface, displaying real-time data and trends. Users can visualize their emission reductions and fuel savings over time, encouraging sustainable driving habits. The app also features notifications and alerts that keep users informed about their performance, as well as personalized suggestions for improvement based on driving habits and vehicle performance metrics. By gamifying the experience, Kaalink turns sustainability into a rewarding journey, motivating users to reach their goals.
          </p>
        </div>
      </div>

      <h2 style={subHeadingStyle}>Kaalink Ink Drawing:</h2>
      <p style={textStyle}>
        The Kaalink ink can be used to create stunning artwork that highlights the intersection of technology and sustainability. By using eco-friendly materials, Kaalink not only reduces carbon footprints but also inspires creativity in promoting sustainable practices. This feature aims to raise awareness about environmental issues through artistic expression, transforming a scientific concept into a visually engaging narrative. Artists and creators can use Kaalink ink to tell their stories, making their art a powerful tool for advocacy.
      </p>

      <div style={rowStyle}>
        <div style={contentStyle}>
          <p style={textStyle}>
            The Kaalink ink showcases how we can turn environmental challenges into artistic opportunities. This innovative approach not only serves to raise awareness about carbon emissions but also fosters a culture of sustainability through art. By encouraging individuals to use their creativity to engage with environmental issues, Kaalink promotes a deeper connection between technology, art, and ecological responsibility. This cultural shift not only empowers artists but also resonates with audiences, making them active participants in the conversation about our planet's future.
          </p>
        </div>
        <div style={imageContainerStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Image 
            src={k4}
            alt="Drawing Made with Kaalink Ink"
            layout="responsive"
            width={300}
            height={300}
            style={imageStyle}
          />
        </div>
      </div>
    </Container>
  );
}
