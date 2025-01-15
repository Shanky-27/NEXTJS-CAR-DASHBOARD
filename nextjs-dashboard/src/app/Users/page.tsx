'use client';
import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faChargingStation,
  faGasPump,
  faGear,
  faHandRock,
} from '@fortawesome/free-solid-svg-icons';
import { ProgressBar } from 'react-bootstrap';
type CarData = {
  Name: string;
  'Car model': string;
  'Transmission type': string;
  'fuel type': string;
  min: number;
  max: number;
  Average: number;
  emission: number;
};
const getProgressBarVariant = (value: number, max: number) => {
  const percentage = (value / max) * 100;
  if (percentage < 33) return 'success'; // Low
  if (percentage < 66) return 'warning'; // Mid
  return 'danger'; // High
};
const renderFuelIcon = (fuel: string) => {
  switch (fuel) {
    case 'petrol':
      return <FontAwesomeIcon icon={faGasPump} />;
    case 'diesel':
      return <FontAwesomeIcon icon={faCar} />;
    case 'ev':
      return <FontAwesomeIcon icon={faChargingStation} />;
    default:
      return null;
  }
};
const renderTransmissionIcon = (transmission: string) => {
  return transmission === 'auto' ? (
    <FontAwesomeIcon icon={faGear} />
  ) : (
    <FontAwesomeIcon icon={faHandRock} />
  );
};

export default function Page() {
  const [carData, setCarData] = useState<CarData[]>([]); // Use the defined type
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Book1.xlsx');
        if (!response.ok) throw new Error('Failed to fetch the file');
        const data = await response.arrayBuffer();
        const workbook = XLSX.read(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData: CarData[] = XLSX.utils.sheet_to_json(worksheet);
        console.log(jsonData); // Log to check the data structure
        setCarData(jsonData);
      } catch (error) {
        console.error('Error fetching or processing the Excel file:', error);
        setError((error as Error).message);
      }
    };
    fetchData();
  }, []);
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <div className='table-responsive'>
        <table className='table border mb-0'>
          <thead className='fw-semibold'>
            <tr className='align-middle table-light dark:table-dark'>
              <th>Name</th>
              <th>Car Model</th>
              <th>Transmission Type</th>
              <th>Fuel Type</th>
              <th>Min</th>
              <th>Max</th>
              <th>Average</th>
              <th>Emission</th>
            </tr>
          </thead>
          <tbody>
            {carData.length > 0 ? (
              carData.map((car, index) => (
                <tr key={index} className='align-middle'>
                  <td>{car.Name}</td>
                  <td>{car['Car model']}</td>
                  <td>
                    <div className='d-flex align-items-center'>
                      {renderTransmissionIcon(car['Transmission type'])}
                      <span className='ms-2'>{car['Transmission type']}</span>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      {renderFuelIcon(car['fuel type'])}
                      <span className='ms-2'>{car['fuel type']}</span>
                    </div>
                  </td>
                  <td>{car.min}</td>
                  <td>{car.max}</td>
                  <td>
                    {typeof car.Average === 'number' && !isNaN(car.Average) ? (
                      <ProgressBar
                        now={(car.Average / 20) * 100} // Assuming max average is 20
                        variant={getProgressBarVariant(car.Average, 20)}
                        label={`${car.Average}`}
                      />
                    ) : (
                      <span>{car.Average || 'N/A'}</span>
                    )}
                  </td>
                  <td>
                    <ProgressBar
                      now={(car.emission / 100) * 100} // Assuming max emission is 100 for visualization
                      variant={getProgressBarVariant(car.emission, 100)}
                      label={`${car.emission}`}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className='text-center'>
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
