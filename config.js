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
  logoUrl: 'src/assets/images/logo.png',
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
      title: 'Full Cycle Bookkeeping for Individuals & Businesses',
      icon: <Icon icon={openBook} />,
      content: 'We will take care of your day to day bookkeeping needs so you can spend time on making important business decisions. We can help with: maintaining General Ledgers, creating journal entries, monthly reconciliation of bank records, credit cards, accounts receivable, accounts payable, and data entry.'
    },
    {
      title: 'Income Tax Filing',
      icon: <Icon icon={calculatorIcon} />,
      content: 'We keep up with the latest in CRA tax legislation and file your tax returns by utilizing applicable tax strategies to reduce costs, increase profitability, and maximize tax efficiency.'
    },
    {
      title: 'Payroll Processing',
      icon: <Icon icon={dollarOutlined} />,
      content: 'We run your employee payrolls, file payroll taxes, maintain employee payroll records and prepare monthly reports.'
    },
    {
      title: 'Invoice Processing',
      icon: <Icon icon={sharpReceiptLong} />,
      content: 'We will help you manage your supplier invoices by ensuring adequate receipt of the invoice, payment to the supplier, and record-keeping using a general ledger which will free up your time for important business decisions and will help you increase your cash flow.'
    },
    {
      title: 'Financial Statements',
      icon: <Icon icon={dollarOutlined} />,
      content: 'We assist in the preparation of monthly/annual financial statements such as a Balance Sheet and Income Statement for sole-proprietorships or other small businesses.'
    }
  ]
};
