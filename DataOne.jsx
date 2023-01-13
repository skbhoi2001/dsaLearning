import React from 'react';
import dsaData from './dsa.json';
import { useState } from 'react';
import Styles from './styles/Home.module.css';

const DataOne = () => {
  const [data, setData] = useState(dsaData);
  return (
    <div className={Styles.dataContainer}>
      {data?.map((item) => {
        return (
          <div className={Styles.dataC1}>
            <div className={Styles.topicName}>{item?.topic}</div>
            <a
              target='_blank'
              className={Styles.redirectButton}
              href={item?.url}
            >
              Redirect
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default DataOne;
