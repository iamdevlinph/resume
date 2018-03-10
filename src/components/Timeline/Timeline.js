import React from 'react';

import './timeline.css';

class TimelineComponent extends React.Component {
  render() {
    return (
      <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
        <ul className="timeline">
          <li className="timeline-item">
            <div className="timeline-info">
              <span>March 12, 2016</span>
            </div>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <h3 className="timeline-title">Event Title</h3>
              <p>Nullam vel sem. Nullam vel sem.</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-info">
              <span>March 23, 2016</span>
            </div>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <h3 className="timeline-title">Event Title</h3>
              <p>Nullam vel sem. Nullam vel sem.</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default TimelineComponent;
