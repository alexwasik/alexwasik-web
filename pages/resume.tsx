import React from 'react';
import Head from 'next/head';
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
        <Head>
          <title>Alex Wasik - Resume</title>
          <meta name='description' content='Alex Wasik - Resume' />
          <meta name='keywords' content='alex wasik, software, developer, software developer, resume' />
          <meta name='robots' content='index, follow' />
          <meta name='DC.title' content='Alex Wasik - Resume' />
        </Head>    
        <Viewer
            theme="dark"
            fileUrl='/assets/resume.pdf'
            plugins={[
                defaultLayoutPluginInstance,
            ]}
        />
      </Worker>
  );
};

export default Resume;
