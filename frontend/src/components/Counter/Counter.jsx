import { useEffect } from 'react';
import $ from 'jquery';
import './Counter.css';
import 'font-awesome/css/font-awesome.min.css';


const Counter = () => {
    useEffect(() => {
        $('.counter-value').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                },
            }
            );
        });
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="counter">
                        <div className="counter-icon">
                        <i className="fa fa-globe" aria-hidden="true"></i>
                        </div>
                        <span className="counter-value">1963</span>
                        <h3>Goal</h3>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="counter purple">
                        <div className="counter-icon">
                            <i className="fa fa-rocket"></i>
                        </div>
                        <span className="counter-value">1854</span>
                        <h3>Amount Donated</h3>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="counter blue">
                        <div className="counter-icon">
                            <i className="fa fa-rocket"></i>
                        </div>
                        <span className="counter-value">1854</span>
                        <h3>Amount Left</h3>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="counter green">
                        <div className="counter-icon">
                            <i className="fa fa-rocket"></i>
                        </div>
                        <span className="counter-value">1854</span>
                        <h3>Donaters</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;