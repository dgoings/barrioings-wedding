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
          7:30pm <span className="bullet_spacer">•</span><span className="sch_time_header">Desserts and drinks</span>
        </div>
        <div className="sch_desc">
          A social pop-in gathering for all wedding guests the evening before. Stop by and stay as long as you'd like!
        </div>
        <div className="sch_location">
          Lin Goings' House
          <br />704 Patricia Avenue
          <br />Ann Arbor, MI, 48104
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
          5:00pm <span className="bullet_spacer">•</span><span className="sch_time_header">Cocktail hour</span>
        </div>
        <div className="sch_desc">
          Everything is happening at a single venue. We'll start with drinks and appetizers.
        </div>
        <div className="sch_location">
          The Freighthouse
        </div>
      </div>
      <div className="sch_left hidden"></div>
      <div className="sch_right">
        <div className="sch_time">
          5:45pm <span className="bullet_spacer">•</span><span className="sch_time_header">Dinner</span>
        </div>
        <div className="sch_desc">
          That's right, we're going straight into dinner. Hope you ate a light lunch.
        </div>
      </div>
      <div className="sch_left hidden"></div>
      <div className="sch_right">
        <div className="sch_time">
          6:30pm <span className="bullet_spacer">•</span><span className="sch_time_header">Desserts & Coffee</span>
        </div>
        <div className="sch_desc">
          Let's eat sugar and get caffeinated!
        </div>
      </div>
      <div className="sch_left hidden"></div>
      <div className="sch_right">
        <div className="sch_time">
          6:45pm <span className="bullet_spacer">•</span><span className="sch_time_header">Ceremony</span>
        </div>
        <div className="sch_desc">
          We'll make it official while everyone is digesting.
        </div>
      </div>
      <div className="sch_left hidden"></div>
      <div className="sch_right">
        <div className="sch_time">
          7:15pm <span className="bullet_spacer">•</span><span className="sch_time_header">Let's Party</span>
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
          You don't have to go home but you can't stay here.
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
          11:00am <span className="bullet_spacer">•</span><span className="sch_time_header">Brunch/picnic</span>
        </div>
        <div className="sch_desc">
          Hang out with us the following morning and reminisce. Bagels, donuts, and coffee provided.
        </div>
        <div className="sch_location">
          Elizabeth & Dylan's House
          <br />703 Collegewood St.
          <br />Ypsilanti, MI, 48197
        </div>
      </div>
      <div className="sch_left hidden"></div>
      <div className="sch_right">
        <div className="sch_time">
          6:00pm <span className="bullet_spacer">•</span><span className="sch_time_header">A2 Summer Festival</span>
        </div>
        <div className="sch_desc">
          Join us at the Canopy installation at Ann Arbor's downtown outdoor summer festival.
          <br />This isn't an exclusive event for our wedding, we'll be hanging out with the masses.
        </div>
        <div className="sch_location">
          915 E. Washington Street
          <br />Ann Arbor, MI 48109
        </div>
      </div>
      <div className="sch_left hidden"></div>
      <div className="sch_right">
        <div className="sch_time">
          8:30pm <span className="bullet_spacer">•</span><span className="sch_time_header"><a href="https://a2sf.org/events/ladama/">LADAMA concert</a></span>
        </div>
        <div className="sch_desc">
          Join us for a public concert at Ann Arbor's downtown outdoor summer festival.
          <br />This isn't an exclusive event for our wedding, we'll be hanging out with the masses.
        </div>
        <div className="sch_location">
          915 E. Washington Street
          <br />Ann Arbor, MI 48109
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
