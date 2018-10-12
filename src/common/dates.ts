const oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
const plural = (num) => num == 1 ? '' : 's';
const getDateString = (num, str, tag = '') => num < 0 ? '' : `${num} ${str}${plural(num)}${tag}`

export const convertToDate = (d: any): Date => {
    // Converts the date in d to a date-object. The input can be:
    //   a date object: returned without modification
    //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
    //   a number     : Interpreted as number of milliseconds
    //                  since 1 Jan 1970 (a timestamp) 
    //   a string     : Any format supported by the javascript engine, like
    //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
    //  an object     : Interpreted as an object with year, month and date
    //                  attributes.  **NOTE** month is 0-11.
    return (
        d.constructor === Date ? d :
        d.constructor === Array ? new Date(d[0],d[1],d[2]) :
        d.constructor === Number ? new Date(d) :
        d.constructor === String ? new Date(d) :
        typeof d === "object" ? new Date(d.year,d.month,d.date) :
        NaN
    );
}

export const compareDates = (d1: any, d2: any): any => {
    // Compare two dates (could be of any type supported by the convert
    // function above) and returns:
    //  -1 : if a < b
    //   0 : if a = b
    //   1 : if a > b
    // NaN : if a or b is an illegal date
    // NOTE: The code inside isFinite does an assignment (=).
    let a = convertToDate(d1).valueOf();
    let b = convertToDate(d2).valueOf()

    return (
        (isFinite(a) &&
        isFinite(b)) ?
        (a > b ? 1 : 0) - ( a < b ? 1 : 0) :NaN
    );
}

export const dateBetween = (d: any, start: any, end: any):any => {
    // Checks if date in d is between dates in start and end.
    // Returns a boolean or NaN:
    //    true  : if d is between start and end (inclusive)
    //    false : if d is before start or after end
    //    NaN   : if one or more of the dates is illegal.
    // NOTE: The code inside isFinite does an assignment (=).
    let d1 = convertToDate(d).valueOf();
    let d2 = convertToDate(start).valueOf();
    let d3 = convertToDate(end).valueOf();
   return (
        isFinite(d1) &&
        isFinite(d2) &&
        isFinite(d3) ?
        d2 <= d1 && d1 <= d3 :
        NaN
    );
}

export const daysBetween = (d1, d2) => {
    var firstDate = new Date(d1);
    var secondDate = new Date(d2);
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
}

export const addDays = (dt, days) => {
    var newDate = convertToDate(dt);
    var nextDate = newDate.getDate() + parseInt(days);
    newDate.setDate(nextDate);
    return newDate
}

export const monthDiff = (d2, d1) => {
    var months;
    d2 = convertToDate(d2);
    d1 = convertToDate(d1);
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth() + 1;
    return months <= 0 ? 0 : months;
}

export const daysInMonth = (date) => {
    let d1 = convertToDate(date);
    return new Date(d1.getFullYear(), d1.getMonth() + 1, 0).getDate();
} 

export const dateDiff = (d2, d1) => {
    let date1 = convertToDate(d1);
    let date2 = convertToDate(d2);

    var months = monthDiff(date2, date1);
    var totalDays = daysBetween(date2, date1) - months * 31;
    var years = Math.floor(months / 12);
    console.log('%', months, months / 12, years)

    var yearMonths = 0;

    if (years > 0) {
        yearMonths = months - (years * 12);
    }


    return {
        years: years,
        months: months,
        days: months * 31 - totalDays,
        toMonthString: () => `~ ${getDateString(months, 'month')}, ${getDateString(totalDays, 'day')}`,
        toYearString: () => `~ ${getDateString(isNaN(years) ? 0 : years, 'year')}, ${getDateString(yearMonths, 'month')}, ${getDateString(totalDays, 'day')}`,
    }
}

// export const dateDiff = (d1, d2) => {
//     var months;    
//     months = (d2.getFullYear() - d1.getFullYear()) * 12;
//     months -= d1.getMonth() + 1;
//     months += d2.getMonth();

//     var days = 0;
//     var startMonth = d1.getMonth();
//     var cnt = months;

//     console.log('start month', startMonth, months)

//     while (cnt > 0) {
//         let monthNum = startMonth + cnt > 11 ? startMonth + cnt - 11 : startMonth + cnt;
//         let yearNum = Math.floor((startMonth + cnt) % 11);
//         days += daysInMonth(monthNum, yearNum);
//         console.log('date diff: cnt, mon, year, days', cnt, monthNum, yearNum, days);
//         cnt--;
//     }

//     let totalYears = Math.floor(months % 11);
//     let totalDays = daysBetween(d1, d2) - days;
//     let totalMonths = months <= 0 ? 0 : Math.floor(months > 11 ? months % 11 : months);

//     const plural = (num) => num == 1 ? '' : 's';
//     const getDateString = (num, str, tag = '') => num <= 0 ? '' : `${num} ${str}${plural(num)}${tag}`

//     return { 
//         months: totalMonths,
//         days: totalDays,
//         years: totalYears,
//         toString: () => `${getDateString(totalYears, 'year', ', ')}${getDateString(totalMonths, 'month', ', ')}${getDateString(totalDays, 'day', '')}`
//     };
// }


export const formatDateForInput = (date) => {
    if (!date) {
        return null;
    }

    let newDate = convertToDate(date);

    var dd = `0${newDate.getDate() + 1}`.slice(-2);
    var mm = `0${newDate.getMonth() + 1}`.slice(-2);
    var y = newDate.getFullYear()

    return `${y}-${mm}-${dd}`;
}

export const formatDate = (date, sep = "/") => {
    if (!date) {
        return null;
    }

    let newDate = convertToDate(date);

    var dd = `0${newDate.getDate() + 1}`.slice(-2);
    var mm = `0${newDate.getMonth() + 1}`.slice(-2);
    var y = newDate.getFullYear();

    return `${mm}${sep}${dd}${sep}${y}`;
}
