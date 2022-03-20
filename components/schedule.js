export default function Schedule() {
  return (
    <div className="schedule">
      <div className="sch_left">
        <div className="sch_date">
          June 23, 2022
        </div>
        <div className="sch_day">
          Thursday
        </div>
      </div>
      <div className="sch_right">
        <div className="sch_time">
          4:00pm <span className="bullet_spacer">•</span><span className="sch_time_header">Some stuff happens</span>
        </div>
        <div className="sch_desc">
          We're still figuring it out
        </div>
        <div className="sch_location">
          TBD
        </div>
      </div>
      <div className="sch_left hidden">

      </div>

      <style jsx>{`
        div {
          position: relative;
        }
        .schedule {
          display: grid;
          grid-template-columns: 1fr 2fr;
          max-width: 500px;
          margin: auto;
          text-align: left;
        }

        .sch_left {
          border-right: 1px solid rgb(255,219,166);
        }
        .sch_left.hidden div {
          color: transparent;
          user-select: none;
        }
        .sch_date {
          font-size: 15px;
          color: black;
        }
        .sch_day {
          color: rgb(255,219,166);
        }

        .sch_right {
          padding: 0 0 0 20px;
          margin-bottom: 25px;
        }
        .sch_time {
          color: hsl(35, 100%, 72%);
        }
        .sch_time:before {
          content: '';
          display: block;
          width: 7px;
          height: 7px;
          border-radius: 100%;
          background-color: hsl(35, 100%, 85%);
          position: absolute;
          top: 4px;
          left: -26px;
          border: 2px solid white;
        }
        .sch_time span.bullet_spacer {
          font-size: 16px;
          line-height: 0px;
          margin: 0 3px;
        }
        .sch_time span.sch_time_header {
          color: black;
          text-decoration: none;
          text-transform: uppercase;
        }
        .sch_desc {
          margin-top: 12px;
          margin-bottom: 10px;
        }
        .sch_location {
          color: grey;
          text-transform: uppercase;
          font-size: 12px;
          margin-top: 5px;
        }
        .sch_location:before {
          content: '\e096';
          font-family: simple-line-icons;
          font-size: 10px;
          color: rgb(255,219,166);
          margin-right: 5px;
        }
      `}</style>
    </div>
  )
}
