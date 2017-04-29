import React, { Component } from 'react';
import moment from 'moment';

import './SkillToolTip.scss';

class SkillToolTip extends Component {
    constructor() {
        super();
        this.onHover = this.handleHover.bind(this);
    }
    handleHover() {
        var tooltips = document.querySelectorAll('.skill-tool-tip .tooltip');

        window.onmousemove = function (e) {
            var x = (e.clientX + 20) + 'px',
                y = (e.clientY) + 'px';
            for (var i = 0; i < tooltips.length; i++) {
                tooltips[i].style.top = y;
                tooltips[i].style.left = x;
            }
        };
    }
    getDateDiff() { // automatically convert 13 months to 1 year, 1 month
        var dateFrom = this.props.duration.usedFrom;
        var dateTo = this.props.duration.usedTo;
        var showDuration = this.props.duration.showDuration;
        var altText = this.props.duration.hideDurationText;

        if (!showDuration) return altText;

        // use date today if 'Present'
        if (dateTo === 'Present') {
            dateTo = moment().format('DD-MMMM-YYYY');
        }

        dateFrom = moment(dateFrom, 'DD-MMMM-YYYY').format();
        dateTo = moment(dateTo, 'DD-MMMM-YYYY').format();

        var diff = moment(dateTo).diff(dateFrom, 'months');
        var monthStr = 'month';
        var yearStr = 'year';

        // if more than 12 months then convert to year, months
        if (diff > 12) {
            var month = diff % 12;
            var year = Math.floor((diff - month) / 12);

            if (month > 1) monthStr = 'months';
            if (year > 1) yearStr = 'years';

            // if no months (24/12)
            if (month === 0) {
                diff = year + ' ' + yearStr;
            } else {
                diff = year + ' ' + yearStr + ', ' + month + ' ' + monthStr;
            }
        } else {
            // else just return months
            if (diff > 1) {
                monthStr = 'months';
            }

            diff = diff + ' ' + monthStr;
        }

        return diff;
    }
    render() {
        var diff = this.getDateDiff();

        var skillName = this.props.name;
        var skillImg = this.props.image;
        var showDuration = this.props.duration.showDuration;
        var altText = this.props.duration.hideDurationText;
        return (
            <div className="skill-tool-tip"
                onMouseMove={() => this.onHover(skillName)}>
                <div className="skills__logo">
                    <img src={skillImg} alt={skillName} />
                </div>
                <div className="skills__name">
                    <h4>{skillName}</h4>
                </div>
                {
                    !showDuration && !altText ? '' : (
                        <div className="tooltip">
                            <div className="tooltip__title">{skillName}</div>
                            <div className="tooltip__content">
                                {/*From: {dateFrom}<br />
                                To: {dateTo !== 'Present' ? dateTo : dateNow}<br/>*/}
                                {diff}
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default SkillToolTip;
