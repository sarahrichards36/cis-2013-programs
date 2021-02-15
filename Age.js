<script>
var floatAge, floatMonths, intFortnights, intWeeks, floatDays;
floatAge = prompt("Enter Current Age");
floatDays = floatAge * 365.25;
floatMonths = floatAge * 12;
intWeeks = floatDays / 7;
intFortnights = floatDays / 14;
alert ("Age in months = " + floatMonths);
alert ("Age in fortnights = " + floatFortnights);
alert ("Age in weeks = " + floatWeeks);
alert ("Age in days = " + floatDays);
</script>

