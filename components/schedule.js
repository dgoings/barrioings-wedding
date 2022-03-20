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
      <div className="sch_left">
        <div className="sch_date">
          June 24, 2022
        </div>
        <div className="sch_day">
          Friday
        </div>
      </div>
      <div className="sch_right">
        <div className="sch_time">
          6:00pm <span className="bullet_spacer">•</span><span className="sch_time_header">Cocktail hour</span>
        </div>
        <div className="sch_desc">
          Everything is happening at a single venue. We'll start with drinks and appetizers
        </div>
        <div className="sch_location">
          The Freighthouse
        </div>
      </div>
      <div className="sch_left hidden"></div>
      <div className="sch_right">
        <div className="sch_time">
          7:00pm <span className="bullet_spacer">•</span><span className="sch_time_header">Dinner</span>
        </div>
        <div className="sch_desc">
          That's right, we're going straight into dinner.
        </div>
      </div>
      <div className="sch_left hidden"></div>
      <div className="sch_right">
        <div className="sch_time">
          8:00pm <span className="bullet_spacer">•</span><span className="sch_time_header">Ceremony</span>
        </div>
        <div className="sch_desc">
          We'll make it official while everyone is digesting.
        </div>
      </div>
      <div className="sch_left hidden"></div>
      <div className="sch_right">
        <div className="sch_time">
          8:20pm <span className="bullet_spacer">•</span><span className="sch_time_header">Desserts & Coffee</span>
        </div>
        <div className="sch_desc">
          Let's eat cake and get caffeinated!
        </div>
      </div>
      <div className="sch_left hidden"></div>
      <div className="sch_right">
        <div className="sch_time">
          8:35pm <span className="bullet_spacer">•</span><span className="sch_time_header">Let's Party</span>
        </div>
        <div className="sch_desc">
          Dance time
        </div>
      </div>
      <div className="sch_left hidden"></div>
      <div className="sch_right">
        <div className="sch_time">
          11:00pm <span className="bullet_spacer">•</span><span className="sch_time_header">Venue closes</span>
        </div>
        <div className="sch_desc">
          You don't have to go home but you can't stay here
        </div>
        <div className="sch_location">
          TBD
        </div>
      </div>
      <div className="sch_left">
        <div className="sch_date">
          June 25, 2022
        </div>
        <div className="sch_day">
          Saturday
        </div>
      </div>
      <div className="sch_right">
        <div className="sch_time">
          10:00am <span className="bullet_spacer">•</span><span className="sch_time_header">Brunch/picnic</span>
        </div>
        <div className="sch_desc">
          Hang out with us the following morning and reminisce
        </div>
        <div className="sch_location">
          TBD
        </div>
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
          padding-left: 5px;
        }
        .sch_desc {
          margin-top: 12px;
          margin-bottom: 10px;
        }
        .sch_location {
          color: grey;
          text-transform: uppercase;
          font-size: 14px;
        }
        .sch_location:before {
          content: '\e55f';
          font-family: 'Material Icons';
          color: rgb(255,219,166);
          margin-right: 5px;
        }
      `}</style>
    </div>
  )
}
