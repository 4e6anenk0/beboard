/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Apply chart themes



am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.maskBullets = false;

var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
var yAxis = chart.yAxes.push(new am4charts.CategoryAxis());

xAxis.dataFields.category = "weekday";
yAxis.dataFields.category = "hour";

xAxis.renderer.grid.template.disabled = true;
xAxis.renderer.minGridDistance = 40;
xAxis.renderer.opposite = true;

yAxis.renderer.grid.template.disabled = true;
yAxis.renderer.inversed = true;
yAxis.renderer.minGridDistance = 30;

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "weekday";
series.dataFields.categoryY = "hour";
series.dataFields.value = "value";
series.sequencedInterpolation = true;
series.defaultState.transitionDuration = 3000;

var columnTemplate = series.columns.template;
columnTemplate.strokeWidth = 2;
columnTemplate.strokeOpacity = 1;
columnTemplate.stroke = am4core.color("#ffffff");
columnTemplate.width = am4core.percent(100);
columnTemplate.height = am4core.percent(100);

var bullet = series.bullets.push(new am4charts.LabelBullet());
bullet.label.text = "{fmt}%";


series.heatRules.push({
  target: columnTemplate,
  property: "fill",
  min: am4core.color("#ffffff"),
  max: am4core.color("#007bff")
});



chart.data = [
	{
		"hour": "2009-01",
		"weekday": "1",
		"value": 1,
		"fmt": 1 * 100 / 1 
	},
	{
		"hour": "2009-02",
		"weekday": "1",
		"value": 1,
		"fmt": 1 * 100 / 1 
	},
	{
		"hour": "2009-03",
		"weekday": "1",
		"value": 1,
		"fmt": 1 * 100 / 1 
	},
	{
		"hour": "2009-04",
		"weekday": "1",
		"value": 1,
		"fmt": 1 * 100 / 1 
	},
	{
		"hour": "2009-05",
		"weekday": "1",
		"value": 1,
		"fmt": 1 * 100 / 1 
	},
	{
		"hour": "2009-06",
		"weekday": "1",
		"value": 1,
		"fmt": 1 * 100 / 1 
	},
	{
		"hour": "2009-07",
		"weekday": "1",
		"value": 1,
		"fmt": 1 * 100 / 1 
	},
	{
		"hour": "2009-08",
		"weekday": "1",
		"value": 1,
		"fmt": 1 * 100 / 1 
	},
	{
		"hour": "2009-09",
		"weekday": "1",
		"value": 1,
		"fmt": 1 * 100 / 1 
	},
	{
		"hour": "2009-10",
		"weekday": "1",
		"value": 1,
		"fmt": 1 * 100 / 1 
	},
	{
		"hour": "2009-11",
		"weekday": "1",
		"value": 1,
		"fmt": 1 * 100 / 1 
	},
	{
		"hour": "2009-12",
		"weekday": "1",
		"value": 1,
		"fmt": 1 * 100 / 1 
	},
	{
		"hour": "2010-01",
		"weekday": "1",
		"value": 1,
		"fmt": 1 * 100 / 1 
	},
	{
		"hour": "2010-02",
		"weekday": "1",
		"value": 1,
		"fmt": 1 * 100 / 1 
	},
	{
		"hour": "2010-03",
		"weekday": "1",
		"value": 1,
		"fmt": 1 * 100 / 1 
	},
	
	


	{
		"hour": "2009-01",
		"weekday": "2",
		"value": 0.36,
		"fmt": 0.36 * 100 / 1
	},
	{
		"hour": "2009-02",
		"weekday": "2",
		"value": 0.20,
		"fmt": 0.20 * 100 / 1
	},
	{
		"hour": "2009-03",
		"weekday": "2",
		"value": 0.30,
		"fmt": 0.30 * 100 / 1
	},
	{
		"hour": "2009-04",
		"weekday": "2",
		"value": 0.33,
		"fmt": 0.33 * 100 / 1
	},
	{
		"hour": "2009-05",
		"weekday": "2",
		"value": 0.26,
		"fmt": 0.26 * 100 / 1
	},
	{
		"hour": "2009-06",
		"weekday": "2",
		"value": 0.46,
		"fmt": 0.46 * 100 / 1
	},
	{
		"hour": "2009-07",
		"weekday": "2",
		"value": 0.46,
		"fmt": 0.46 * 100 / 1
	},
	{
		"hour": "2009-08",
		"weekday": "2",
		"value": 0.35,
		"fmt": 0.35 * 100 / 1
	},
	{
		"hour": "2009-09",
		"weekday": "2",
		"value": 0.40,
		"fmt": 0.40 * 100 / 1
	},
	{
		"hour": "2009-10",
		"weekday": "2",
		"value": 0.31,
		"fmt": 0.31 * 100 / 1
	},
	{
		"hour": "2009-11",
		"weekday": "2",
		"value": 0.24,
		"fmt": 0.24 * 100 / 1
	},
	{
		"hour": "2009-12",
		"weekday": "2",
		"value": 0.26,
		"fmt": 0.26 * 100 / 1
	},
	{
		"hour": "2010-01",
		"weekday": "2",
		"value": 0.52,
		"fmt": 0.52 * 100 / 1
	},
	{
		"hour": "2010-02",
		"weekday": "2",
		"value": 0.19,
		"fmt": 0.19 * 100 / 1
	},
	{
		"hour": "2010-03",
		"weekday": "2",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	
	


	{
		"hour": "2009-01",
		"weekday": "3",
		"value": 0.45,
		"fmt": 0.45 * 100 / 1
	},
	{
		"hour": "2009-02",
		"weekday": "3",
		"value": 0.33,
		"fmt": 0.33 * 100 / 1
	},
	{
		"hour": "2009-03",
		"weekday": "3",
		"value": 0.38,
		"fmt": 0.38 * 100 / 1
	},
	{
		"hour": "2009-04",
		"weekday": "3",
		"value": 0.25,
		"fmt": 0.25 * 100 / 1
	},
	{
		"hour": "2009-05",
		"weekday": "3",
		"value": 0.24,
		"fmt": 0.24 * 100 / 1
	},
	{
		"hour": "2009-06",
		"weekday": "3",
		"value": 0.28,
		"fmt": 0.28 * 100 / 1
	},
	{
		"hour": "2009-07",
		"weekday": "3",
		"value": 0.26,
		"fmt": 0.26 * 100 / 1
	},
	{
		"hour": "2009-08",
		"weekday": "3",
		"value": 0.29,
		"fmt": 0.29 * 100 / 1
	},
	{
		"hour": "2009-09",
		"weekday": "3",
		"value": 0.37,
		"fmt": 0.37 * 100 / 1
	},
	{
		"hour": "2009-10",
		"weekday": "3",
		"value": 0.22,
		"fmt": 0.22 * 100 / 1
	},
	{
		"hour": "2009-11",
		"weekday": "3",
		"value": 0.20,
		"fmt": 0.20 * 100 / 1
	},
	{
		"hour": "2009-12",
		"weekday": "3",
		"value": 0.27,
		"fmt": 0.27 * 100 / 1
	},
	{
		"hour": "2010-01",
		"weekday": "3",
		"value": 0.27,
		"fmt": 0.27 * 100 / 1
	},
	{
		"hour": "2010-02",
		"weekday": "3",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-03",
		"weekday": "3",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	


	{
		"hour": "2009-01",
		"weekday": "4",
		"value": 0.40,
		"fmt": 0.40 * 100 / 1
	},
	{
		"hour": "2009-02",
		"weekday": "4",
		"value": 0.06,
		"fmt": 0.06 * 100 / 1
	},
	{
		"hour": "2009-03",
		"weekday": "4",
		"value": 0.30,
		"fmt": 0.30 * 100 / 1
	},
	{
		"hour": "2009-04",
		"weekday": "4",
		"value": 0.33,
		"fmt": 0.33 * 100 / 1
	},
	{
		"hour": "2009-05",
		"weekday": "4",
		"value": 0.10,
		"fmt": 0.10 * 100 / 1
	},
	{
		"hour": "2009-06",
		"weekday": "4",
		"value": 0.18,
		"fmt": 0.18 * 100 / 1
	},
	{
		"hour": "2009-07",
		"weekday": "4",
		"value": 0.20,
		"fmt": 0.20 * 100 / 1
	},
	{
		"hour": "2009-08",
		"weekday": "4",
		"value": 0.22,
		"fmt": 0.22 * 100 / 1
	},
	{
		"hour": "2009-09",
		"weekday": "4",
		"value": 0.21,
		"fmt": 0.21 * 100 / 1
	},
	{
		"hour": "2009-10",
		"weekday": "4",
		"value": 0.24,
		"fmt": 0.24 * 100 / 1
	},
	{
		"hour": "2009-11",
		"weekday": "4",
		"value": 0.22,
		"fmt": 0.22 * 100 / 1
	},
	{
		"hour": "2009-12",
		"weekday": "4",
		"value": 0.10,
		"fmt": 0.10 * 100 / 1
	},
	{
		"hour": "2010-01",
		"weekday": "4",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-02",
		"weekday": "4",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-03",
		"weekday": "4",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	


	{
		"hour": "2009-01",
		"weekday": "5",
		"value": 0.45,
		"fmt": 0.45 * 100 / 1
	},
	{
		"hour": "2009-02",
		"weekday": "5",
		"value": 0.26,
		"fmt": 0.26 * 100 / 1
	},
	{
		"hour": "2009-03",
		"weekday": "5",
		"value": 0.07,
		"fmt": 0.07 * 100 / 1
	},
	{
		"hour": "2009-04",
		"weekday": "5",
		"value": 0.15,
		"fmt": 0.15 * 100 / 1
	},
	{
		"hour": "2009-05",
		"weekday": "5",
		"value": 0.08,
		"fmt": 0.08 * 100 / 1
	},
	{
		"hour": "2009-06",
		"weekday": "5",
		"value": 0.21,
		"fmt": 0.21 * 100 / 1
	},
	{
		"hour": "2009-07",
		"weekday": "5",
		"value": 0.22,
		"fmt": 0.22 * 100 / 1
	},
	{
		"hour": "2009-08",
		"weekday": "5",
		"value": 0.19,
		"fmt": 0.19 * 100 / 1
	},
	{
		"hour": "2009-09",
		"weekday": "5",
		"value": 0.35,
		"fmt": 0.35 * 100 / 1
	},
	{
		"hour": "2009-10",
		"weekday": "5",
		"value": 0.24,
		"fmt": 0.24 * 100 / 1
	},
	{
		"hour": "2009-11",
		"weekday": "5",
		"value": 0.10,
		"fmt": 0.10 * 100 / 1
	},
	{
		"hour": "2009-12",
		"weekday": "5",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-01",
		"weekday": "5",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-02",
		"weekday": "5",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-03",
		"weekday": "5",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	


	{
		"hour": "2009-01",
		"weekday": "6",
		"value": 0.36,
		"fmt": 0.36 * 100 / 1
	},
	{
		"hour": "2009-02",
		"weekday": "6",
		"value": 0.26,
		"fmt": 0.26 * 100 / 1
	},
	{
		"hour": "2009-03",
		"weekday": "6",
		"value": 0.15,
		"fmt": 0.15 * 100 / 1
	},
	{
		"hour": "2009-04",
		"weekday": "6",
		"value": 0.17,
		"fmt": 0.17 * 100 / 1
	},
	{
		"hour": "2009-05",
		"weekday": "6",
		"value": 0.12,
		"fmt": 0.12 * 100 / 1
	},
	{
		"hour": "2009-06",
		"weekday": "6",
		"value": 0.15,
		"fmt": 0.15 * 100 / 1
	},
	{
		"hour": "2009-07",
		"weekday": "6",
		"value": 0.20,
		"fmt": 0.20 * 100 / 1
	},
	{
		"hour": "2009-08",
		"weekday": "6",
		"value": 0.25,
		"fmt": 0.25 * 100 / 1
	},
	{
		"hour": "2009-09",
		"weekday": "6",
		"value": 0.24,
		"fmt": 0.24 * 100 / 1
	},
	{
		"hour": "2009-10",
		"weekday": "6",
		"value": 0.12,
		"fmt": 0.12 * 100 / 1
	},
	{
		"hour": "2009-11",
		"weekday": "6",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-12",
		"weekday": "6",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-01",
		"weekday": "6",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-02",
		"weekday": "6",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-03",
		"weekday": "6",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	


	
	{
		"hour": "2009-01",
		"weekday": "7",
		"value": 0.36,
		"fmt": 0.36 * 100 / 1
	},
	{
		"hour": "2009-02",
		"weekday": "7",
		"value": 0.26,
		"fmt": 0.26 * 100 / 1
	},
	{
		"hour": "2009-03",
		"weekday": "7",
		"value": 0.15,
		"fmt": 0.15 * 100 / 1
	},
	{
		"hour": "2009-04",
		"weekday": "7",
		"value": 0.10,
		"fmt": 0.10 * 100 / 1
	},
	{
		"hour": "2009-05",
		"weekday": "7",
		"value": 0.06,
		"fmt": 0.06 * 100 / 1
	},
	{
		"hour": "2009-06",
		"weekday": "7",
		"value": 0.09,
		"fmt": 0.09 * 100 / 1
	},
	{
		"hour": "2009-07",
		"weekday": "7",
		"value": 0.22,
		"fmt": 0.22 * 100 / 1
	},
	{
		"hour": "2009-08",
		"weekday": "7",
		"value": 0.12,
		"fmt": 0.12 * 100 / 1
	},
	{
		"hour": "2009-09",
		"weekday": "7",
		"value": 0.21,
		"fmt": 0.21 * 100 / 1
	},
	{
		"hour": "2009-10",
		"weekday": "7",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-11",
		"weekday": "7",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-12",
		"weekday": "7",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-01",
		"weekday": "7",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-02",
		"weekday": "7",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-03",
		"weekday": "7",
		"value": 0,
		"fmt": 0 * 100 / 1
	},




	{
		"hour": "2009-01",
		"weekday": "8",
		"value": 0.31,
		"fmt": 0.31 * 100 / 1
	},
	{
		"hour": "2009-02",
		"weekday": "8",
		"value": 0.33,
		"fmt": 0.33 * 100 / 1
	},
	{
		"hour": "2009-03",
		"weekday": "8",
		"value": 0.23,
		"fmt": 0.23 * 100 / 1
	},
	{
		"hour": "2009-04",
		"weekday": "8",
		"value": 0.15,
		"fmt": 0.15 * 100 / 1
	},
	{
		"hour": "2009-05",
		"weekday": "8",
		"value": 0.10,
		"fmt": 0.10 * 100 / 1
	},
	{
		"hour": "2009-06",
		"weekday": "8",
		"value": 0.09,
		"fmt": 0.09 * 100 / 1
	},
	{
		"hour": "2009-07",
		"weekday": "8",
		"value": 0.14,
		"fmt": 0.14 * 100 / 1
	},
	{
		"hour": "2009-08",
		"weekday": "8",
		"value": 0.12,
		"fmt": 0.12 * 100 / 1
	},
	{
		"hour": "2009-09",
		"weekday": "8",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-10",
		"weekday": "8",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-11",
		"weekday": "8",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-12",
		"weekday": "8",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-01",
		"weekday": "8",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-02",
		"weekday": "8",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-03",
		"weekday": "8",
		"value": 0,
		"fmt": 0 * 100 / 1
	},




	{
		"hour": "2009-01",
		"weekday": "9",
		"value": 0.31,
		"fmt": 0.31 * 100 / 1
	},
	{
		"hour": "2009-02",
		"weekday": "9",
		"value": 0.33,
		"fmt": 0.33 * 100 / 1
	},
	{
		"hour": "2009-03",
		"weekday": "9",
		"value": 0.15,
		"fmt": 0.15 * 100 / 1
	},
	{
		"hour": "2009-04",
		"weekday": "9",
		"value": 0.05,
		"fmt": 0.05 * 100 / 1
	},
	{
		"hour": "2009-05",
		"weekday": "9",
		"value": 0.10,
		"fmt": 0.10 * 100 / 1
	},
	{
		"hour": "2009-06",
		"weekday": "9",
		"value": 0.31,
		"fmt": 0.31 * 100 / 1
	},
	{
		"hour": "2009-07",
		"weekday": "9",
		"value": 0.14,
		"fmt": 0.14 * 100 / 1
	},
	{
		"hour": "2009-08",
		"weekday": "9",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-09",
		"weekday": "9",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-10",
		"weekday": "9",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-11",
		"weekday": "9",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-12",
		"weekday": "9",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-01",
		"weekday": "9",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-02",
		"weekday": "9",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-03",
		"weekday": "9",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	


	{
		"hour": "2009-01",
		"weekday": "10",
		"value": 0.31,
		"fmt": 0.31 * 100 / 1
	},
	{
		"hour": "2009-02",
		"weekday": "10",
		"value": 0.26,
		"fmt": 0.26 * 100 / 1
	},
	{
		"hour": "2009-03",
		"weekday": "10",
		"value": 0.07,
		"fmt": 0.07 * 100 / 1
	},
	{
		"hour": "2009-04",
		"weekday": "10",
		"value": 0.10,
		"fmt": 0.10 * 100 / 1
	},
	{
		"hour": "2009-05",
		"weekday": "10",
		"value": 0.08,
		"fmt": 0.08 * 100 / 1
	},
	{
		"hour": "2009-06",
		"weekday": "10",
		"value": 0.09,
		"fmt": 0.09 * 100 / 1
	},
	{
		"hour": "2009-07",
		"weekday": "10",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-08",
		"weekday": "10",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-09",
		"weekday": "10",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-10",
		"weekday": "10",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-11",
		"weekday": "10",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-12",
		"weekday": "10",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-01",
		"weekday": "10",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-02",
		"weekday": "10",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-03",
		"weekday": "10",
		"value": 0,
		"fmt": 0 * 100 / 1
	},



	{
		"hour": "2009-01",
		"weekday": "11",
		"value": 0.31,
		"fmt": 0.31 * 100 / 1
	},
	{
		"hour": "2009-02",
		"weekday": "11",
		"value": 0.20,
		"fmt": 0.20 * 100 / 1
	},
	{
		"hour": "2009-03",
		"weekday": "11",
		"value": 0.23,
		"fmt": 0.23 * 100 / 1
	},
	{
		"hour": "2009-04",
		"weekday": "11",
		"value": 0.07,
		"fmt": 0.07 * 100 / 1
	},
	{
		"hour": "2009-05",
		"weekday": "11",
		"value": 0.06,
		"fmt": 0.06 * 100 / 1
	},
	{
		"hour": "2009-06",
		"weekday": "11",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-07",
		"weekday": "11",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-08",
		"weekday": "11",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-09",
		"weekday": "11",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-10",
		"weekday": "11",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-11",
		"weekday": "11",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-12",
		"weekday": "11",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-01",
		"weekday": "11",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-02",
		"weekday": "11",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-03",
		"weekday": "11",
		"value": 0,
		"fmt": 0 * 100 / 1
	},

	
	
	{
		"hour": "2009-01",
		"weekday": "12",
		"value": 0.36,
		"fmt": 0.36 * 100 / 1
	},
	{
		"hour": "2009-02",
		"weekday": "12",
		"value": 0.20,
		"fmt": 0.20 * 100 / 1
	},
	{
		"hour": "2009-03",
		"weekday": "12",
		"value": 0.15,
		"fmt": 0.15 * 100 / 1
	},
	{
		"hour": "2009-04",
		"weekday": "12",
		"value": 0.05,
		"fmt": 0.05 * 100 / 1
	},
	{
		"hour": "2009-05",
		"weekday": "12",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-06",
		"weekday": "12",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-07",
		"weekday": "12",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-08",
		"weekday": "12",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-09",
		"weekday": "12",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-10",
		"weekday": "12",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-11",
		"weekday": "12",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-12",
		"weekday": "12",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-01",
		"weekday": "12",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-02",
		"weekday": "12",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-03",
		"weekday": "12",
		"value": 0,
		"fmt": 0 * 100 / 1
	},



	{
		"hour": "2009-01",
		"weekday": "13",
		"value": 0.50,
		"fmt": 0.50 * 100 / 1
	},
	{
		"hour": "2009-02",
		"weekday": "13",
		"value": 0.33,
		"fmt": 0.33 * 100 / 1
	},
	{
		"hour": "2009-03",
		"weekday": "13",
		"value": 0.07,
		"fmt": 0.07 * 100 / 1
	},
	{
		"hour": "2009-04",
		"weekday": "13",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-05",
		"weekday": "13",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-06",
		"weekday": "13",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-07",
		"weekday": "13",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-08",
		"weekday": "13",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-09",
		"weekday": "13",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-10",
		"weekday": "13",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-11",
		"weekday": "13",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-12",
		"weekday": "13",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-01",
		"weekday": "13",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-02",
		"weekday": "13",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-03",
		"weekday": "13",
		"value": 0,
		"fmt": 0 * 100 / 1
	},




	{
		"hour": "2009-01",
		"weekday": "14",
		"value": 0.31,
		"fmt": 0.31 * 100 / 1
	},
	{
		"hour": "2009-02",
		"weekday": "14",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-03",
		"weekday": "14",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-04",
		"weekday": "14",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-05",
		"weekday": "14",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-06",
		"weekday": "14",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-07",
		"weekday": "14",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-08",
		"weekday": "14",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-09",
		"weekday": "14",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-10",
		"weekday": "14",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-11",
		"weekday": "14",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-12",
		"weekday": "14",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-01",
		"weekday": "14",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-02",
		"weekday": "14",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-03",
		"weekday": "14",
		"value": 0,
		"fmt": 0 * 100 / 1
	},




	{
		"hour": "2009-01",
		"weekday": "15",
		"value": 0.27,
		"fmt": 0.36 * 100 / 1
	},
	{
		"hour": "2009-02",
		"weekday": "15",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-03",
		"weekday": "15",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-04",
		"weekday": "15",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-05",
		"weekday": "15",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-06",
		"weekday": "15",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-07",
		"weekday": "15",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-08",
		"weekday": "15",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-09",
		"weekday": "15",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-10",
		"weekday": "15",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-11",
		"weekday": "15",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2009-12",
		"weekday": "15",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-01",
		"weekday": "15",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-02",
		"weekday": "15",
		"value": 0,
		"fmt": 0 * 100 / 1
	},
	{
		"hour": "2010-03",
		"weekday": "15",
		"value": 0,
		"fmt": 0 * 100 / 1
	},

];