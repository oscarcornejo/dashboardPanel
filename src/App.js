import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import KpiSection from './components/KpiSection';
import MiniChartsSection from './components/MiniChartsSection';
import ChartSection from './components/ChartsSection';

function App() {
  return (
    <Fragment>
      <Navbar />
          <div className="container-fluid pr-5 pl-5 pt-5 pb-5">
            {/* KPI Sección */}
            <KpiSection />

            {/* KPI + Mini Graficos Sección */}
            <MiniChartsSection />

            {/* Graficos Sección */}
            <ChartSection />
        </div>
    </Fragment>
  );
}

export default App;
