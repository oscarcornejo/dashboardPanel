import React from 'react';

const KpiSection = () => {
    return (

        <div className="row ">
            <div className="col-lg-3 col-sm-6 is-light-text mb-4">
                <div className="card grid-card is-card-dark">
                    <div className="card-heading  ">
                        <div className="is-dark-text-light letter-spacing text-small  ">Ingresos Totales</div>
                    </div>
                    <div className="card-value pt-4 text-x-large">
                        <span className="text-large pr-1">$</span>32.71k
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 is-light-text mb-4">
                <div className="card grid-card is-card-dark">
                    <div className="card-heading  ">
                        <div className="is-dark-text-light letter-spacing text-small">Ingresos de Amazon</div>
                        <div className="card-heading-brand">
                            <i className="fa fa-amazon text-large"></i>
                        </div>
                    </div>
                    <div className="card-value pt-4 text-x-large">
                        <span className="text-large pr-1">$</span>23.61k
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 is-light-text mb-4">
                <div className="card grid-card is-card-dark">
                    <div className="card-heading  ">
                        <div className="is-dark-text-light letter-spacing text-small">Ingresos de PayPal</div>
                        <div className="card-heading-brand">
                            <i className="fa fa-paypal text-large logo-adjust"></i>
                        </div>
                    </div>
                    <div className="card-value pt-4 text-x-large">
                        <span className="text-large pr-1">$</span>5.2k
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 is-light-text mb-4  ">
                <div className="card grid-card is-card-dark">
                    <div className="card-heading">
                        <div className="is-dark-text-light letter-spacing text-small  ">Ingresos de Etsy</div>
                        <div className="card-heading-brand">
                            <i className="fa fa-etsy text-medium"></i>
                        </div>
                    </div>
                    <div className="card-value pt-4 text-x-large">
                        <span className="text-large pr-1">$</span>3.9k
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default KpiSection;