import React from 'react';

const MiniChartsSection = () => {
    return ( 
        <div className="row">
            <div className="col-md-4 col-lg-3 is-light-text mb-4">
                <div className="card grid-card is-card-dark">
                    <div className="card-heading mb-3">
                        <div className="is-dark-text-light letter-spacing text-small">Vistas del Producto</div>
                    </div>
                    <div className="card-value pt-4 text-x-large">3.7k
                        <span className="text-medium pl-2 is-dark-text-light">vistas</span>
                    </div>
                </div>
            </div>
            <div className="col-md-8 col-lg-9 is-light-text mb-4">
                <div className="card is-card-dark chart-card">
                    <div className="row full-height">
                        <div className="col-sm-4 full height">
                            <div className="chart-container full-height">
                                Grafico 1
                            </div>
                        </div>
                        <div className="col-sm-4 full-height border-left border-right  ">
                            <div className="chart-container full-height  ">
                                Grafico 2
                            </div>
                        </div>
                        <div className="col-sm-4 full-height  ">
                            <div className="chart-container full-height  ">
                                Grafico 3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MiniChartsSection;