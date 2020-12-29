import React from 'react'
import { Icon } from '@iconify/react';
import pytorchIcon from '@iconify/icons-logos/pytorch';
import reactIcon from '@iconify/icons-logos/react';
import tensorflowIcon from '@iconify/icons-logos/tensorflow';
import phoenixIcon from '@iconify/icons-logos/phoenix';
import iotPlatform from '@iconify/icons-carbon/iot-platform';
import openBook from '@iconify-icons/entypo/open-book';
import calculatorIcon from '@iconify-icons/bi/calculator';
import dollarOutlined from '@iconify-icons/ant-design/dollar-outlined';
import sharpReceiptLong from '@iconify-icons/ic/sharp-receipt-long';

export default {
  authorName: 'A.S. Accounting',
  heading: 'Professional Accounting Services',
  // social
  socialLinks: [
    // {
    //   icon: 'fa-github',
    //   name: 'Github',
    //   url: 'https://github.com/amishpatel1994',
    // },
    // {
    //   icon: 'fa-linkedin',
    //   name: 'Linkedin',
    //   url: 'https://www.linkedin.com/in/amish-patel-a558a364/',
    // },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:asbookkeepersgta@gmail.com',
    },
    {
      icon: 'fa-phone',
      name: "Call Aashna",
      url: 'tel:4163035720',
    },
    {
      icon: 'fa-phone',
      name: "Call Sonal",
      url: 'tel:6472325491',
    },
    {
      icon: 'fa-instagram',
      name: 'Instagram',
      url: 'https://www.instagram.com/pennies_to_bills/'
    }
  ],
  services: [
    {
      title: 'Bookkeeping for Individuals/Businesses',
      icon: <Icon icon={openBook} />
    },
    {
      title: 'Personal Tax Returns',
      icon: <Icon icon={calculatorIcon} />
    },
    {
      title: 'Payroll Processing',
      icon: <Icon icon={dollarOutlined} />
    },
    {
      title: 'Invoice Processing',
      icon: <Icon icon={sharpReceiptLong} />
    },
  ],
  projects: [
    {
      title: 'Spaced Repetition',
      description: 'Built to keep track of review tasks using the concept of spaced repetition',
      date: 'Aug 2020',
      type: 'Chrome Extension - Personal Project',
      mainIcon: <Icon icon={reactIcon} />,
      gitLink: 'https://github.com/amishpatel1994/SpacedRepetition',
      demoLink: 'https://chrome.google.com/webstore/detail/spacedrepetition/iplpbaappjaabjkaihgjhlkimfolcdgp',
      memoriesLink: '',
      skills: ['reactjs', 'chrome-extension', 'reactstrap', 'css']
    },
    {
      title: 'Hyperparameter Analysis for Image Captioning',
      description: 'Conducted experiments with two different architectures for image captioning: CNN-based enoder + Attention-based LSTM Decoder and CNN encoder + Transformer Decoder',
      date: 'Feb 2020 - Apr 2020',
      type: 'Deep Learning - Research Project',
      mainIcon: <Icon icon={pytorchIcon} />,
      gitLink: 'https://github.com/aravindvarier/Image-Captioning-Pytorch',
      demoLink: '',
      memoriesLink: '',
      skills: ['pyTorch', 'CNN', 'LSTM', 'Attention', 'Transformers']
    },
    {
      title: 'Github Stats',
      description: 'Web application that shows all the repositories watched by a particular user',
      date: 'Feb 2020',
      type: 'Web Application - Personal Project',
      mainIcon: <Icon icon={phoenixIcon} />,
      gitLink: 'https://github.com/amishpatel1994/githubstats',
      demoLink: '',
      memoriesLink: '',
      skills: ['Phoenix', 'Elixir']
    },
    {
      title: 'Bitcoin Price Prediction',
      description: 'Performed time-series forecasting using BiDirectional LSTM network',
      date: 'Dec 2019',
      type: 'Deep Learning - Research Project',
      mainIcon: <Icon icon={tensorflowIcon} />,
      gitLink: 'https://github.com/amishpatel1994/BitcoinPricePrediction',
      demoLink: 'https://github.com/amishpatel1994/BitcoinPricePrediction/blob/master/price_prediction.ipynb',
      memoriesLink: '',
      skills: ['Tensorflow', 'LSTM']
    },
    {
      title: 'MuscleMix',
      description: 'Generates randomized workouts based on the muscle groups you want to work on for the day',
      date: 'Dec 2018 - Sep 2019',
      type: 'React Native - Personal Project',
      mainIcon: <Icon icon={reactIcon} />,
      gitLink: '',
      demoLink: 'https://apps.apple.com/gb/app/muscle-mix/id1457276561?fbclid=IwAR3S7pHQlEjSTgZnCoTdnK_v6LR-qofYPS3XqkECrj4NDprV8ceDCN14X_g',
      memoriesLink: 'https://www.linkedin.com/feed/update/urn:li:activity:6580622501087457280/',
      skills: ['React Native', 'Redux-Saga']
    },
    {
      title: 'Voice',
      description: 'Sign to Speech Translation glove performed using accelerometer+flex sensors, phone, and arduino',
      date: 'May 2016 - Apr 2017',
      type: 'Wearable - Fourth Year Design Project',
      mainIcon: <Icon icon={iotPlatform} />,
      gitLink: 'https://github.com/3browns1asian',
      demoLink: '',
      memoriesLink: 'https://www.instagram.com/p/BR9naG8hIhAOkGfl6r8rRErU1wbpI9ZIAJ8gP80/',
      skills: ['Arduino', 'Android Development', 'Machine Learning', 'sklearn', 'flask']
    }
  ]
};
