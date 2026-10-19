"use client";

import React, { useState, useEffect } from 'react';

const SydneyTime: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const sydneyTime = now.toLocaleTimeString('en-AU', {
        timeZone: 'Australia/Sydney'
      });
      const sydneyDate = now.toLocaleDateString('en-AU', {
        timeZone: 'Australia/Sydney',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      setTime(sydneyTime);
      setDate(sydneyDate);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Current Time for Aspen</h1>
        <p style={styles.date}>{date}</p>
        <p style={styles.time}>{time}</p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #29402E 0%, #3F5743 55%, #985B3A 85%, #C58A4A 100%)',
    fontFamily: 'Segoe UI, Roboto, sans-serif',
  },
  card: {
    backgroundColor: 'rgba(232, 201, 138, 0.92)',
    borderRadius: '16px',
    padding: '40px 60px',
    textAlign: 'center',
    boxShadow: '0 8px 24px rgba(41,64,46,0.45)',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
    color: '#5A3A29',
  },
  date: {
    margin: '10px 0',
    fontSize: '1.2rem',
    color: '#985B3A',
  },
  time: {
    margin: '10px 0',
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#5A3A29',
  },
};

export default SydneyTime;
