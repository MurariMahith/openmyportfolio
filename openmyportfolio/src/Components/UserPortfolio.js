import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserPortfolio() {
  const { id } = useParams();

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchUserData();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : userData ? (
        <div>
          {/* Display user data */}
          <p>{JSON.stringify(userData)}</p>
          {/* Add more data fields as needed */}
        </div>
      ) : (
        <p>No data found for ID: {id}</p>
      )}
    </div>
  );
}

export default UserPortfolio;
