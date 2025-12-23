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
        <h1 style={styles.title}>Current Time for Sorren</h1>
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
    background: 'linear-gradient(to right, #F6F6F6, #98EDA9)',
    fontFamily: 'Segoe UI, Roboto, sans-serif',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '16px',
    padding: '40px 60px',
    textAlign: 'center',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
    color: '#333',
  },
  date: {
    margin: '10px 0',
    fontSize: '1.2rem',
    color: '#555',
  },
  time: {
    margin: '10px 0',
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#222',
  },
};

export default SydneyTime;
