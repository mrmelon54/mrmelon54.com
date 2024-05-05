<script lang="ts">
  function updateWeeks() {
    let biWeek = document.getElementById("s-sch").value == "bi-weekly";
    if (biWeek) {
      document.getElementById("week-wrap").style.display = "none";
      document.getElementById("biweek-wrap").style.display = "block";
    } else {
      document.getElementById("week-wrap").style.display = "block";
      document.getElementById("biweek-wrap").style.display = "none";
    }
  }

  // time worked separated by day in minutes
  function getWeekTimes() {
    let biWeek = document.getElementById("s-sch").value == "bi-weekly";
    let timesA = document.querySelectorAll("#week-a-times input[type=time]");
    let timesB = document.querySelectorAll("#week-b-times input[type=time]");
    if (!biWeek) {
      timesA = document.querySelectorAll("#week-times input[type=time]");
      timesB = timesA;
    }
    let times = [...timesA, ...timesB].map(x => x.value);
    let out = new Array(14);
    console.log(out);
    console.log(times);
    for (let i = 0; i < times.length / 2; i++) {
      out[i] = diff(times[i * 2], times[i * 2 + 1]);
    }
    console.log(out);
    return out;
  }

  // https://stackoverflow.com/a/10804367
  function diff(start, end) {
    if (start == "" || end == "") return 0;

    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);

    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0) hours = hours + 24;

    return hours + minutes / 60;
  }

  let outYear: number = 0;
  let outMonth: number = 0;
  let outWeek: number = 0;
  let outHour: number = 0;

  function calculate() {
    let value = parseInt(document.getElementById("s-val").value);
    let per = document.getElementById("s-per").value;
    let times = getWeekTimes();

    const week2month = 52 / 12;
    const month2week = 1 / week2month;

    // hours per week is average of two weeks for A+B split weeks
    let hoursPerWeek = times.reduce((a, b) => a + b) / 2;
    switch (per) {
      case "year":
        outYear = value;
        outMonth = value / 12;
        outWeek = value / 52;
        outHour = value / 52 / hoursPerWeek;
        break;
      case "month":
        outYear = value * 12;
        outMonth = value;
        outWeek = value * month2week;
        outHour = (value * month2week) / hoursPerWeek;
        break;
      case "week":
        outYear = value * 52;
        outMonth = value * week2month;
        outWeek = value;
        outHour = value / hoursPerWeek;
        break;
      case "hour":
        outYear = value * hoursPerWeek * 52;
        outMonth = value * hoursPerWeek * week2month;
        outWeek = value * hoursPerWeek;
        outHour = value;
        break;
    }
  }

  window.addEventListener("load", function () {
    updateWeeks();
  });
</script>

<h1>Salary Calculator</h1>

<label>
  Salary: <input type="number" min="1" step="1" name="salary" id="s-val" /> per
  <select name="per" id="s-per">
    <option value="year">year</option>
    <option value="month">month</option>
    <option value="week">week</option>
    <option value="hour">hour</option>
  </select>
</label>

<br />

<label>
  Schedule:
  <select name="sch" id="s-sch" on:change={() => updateWeeks()}>
    <option value="weekly">Weekly</option>
    <option value="bi-weekly">Bi-Weekly</option>
  </select>
</label>

<div id="week-wrap">
  <h1>Week</h1>
  <ul id="week-times">
    <li>Monday from <input type="time" /> to <input type="time" /></li>
    <li>Tuesday from <input type="time" /> to <input type="time" /></li>
    <li>Wednesday from <input type="time" /> to <input type="time" /></li>
    <li>Thursday from <input type="time" /> to <input type="time" /></li>
    <li>Friday from <input type="time" /> to <input type="time" /></li>
    <li>Saturday from <input type="time" /> to <input type="time" /></li>
    <li>Sunday from <input type="time" /> to <input type="time" /></li>
  </ul>
</div>

<div id="biweek-wrap" style="display: none">
  <h1>Week A</h1>
  <ul id="week-a-times">
    <li>Monday from <input type="time" /> to <input type="time" /></li>
    <li>Tuesday from <input type="time" /> to <input type="time" /></li>
    <li>Wednesday from <input type="time" /> to <input type="time" /></li>
    <li>Thursday from <input type="time" /> to <input type="time" /></li>
    <li>Friday from <input type="time" /> to <input type="time" /></li>
    <li>Saturday from <input type="time" /> to <input type="time" /></li>
    <li>Sunday from <input type="time" /> to <input type="time" /></li>
  </ul>
  <h1>Week B</h1>
  <ul id="week-b-times">
    <li>Monday from <input type="time" /> to <input type="time" /></li>
    <li>Tuesday from <input type="time" /> to <input type="time" /></li>
    <li>Wednesday from <input type="time" /> to <input type="time" /></li>
    <li>Thursday from <input type="time" /> to <input type="time" /></li>
    <li>Friday from <input type="time" /> to <input type="time" /></li>
    <li>Saturday from <input type="time" /> to <input type="time" /></li>
    <li>Sunday from <input type="time" /> to <input type="time" /></li>
  </ul>
</div>
<div>
  <button on:click={() => calculate()}>Calculate</button>
</div>
<div>
  <ul>
    <li>Yearly: {outYear}</li>
    <li>Monthly: {outMonth}</li>
    <li>Weekly: {outWeek}</li>
    <li>Hourly: {outHour}</li>
  </ul>
</div>
