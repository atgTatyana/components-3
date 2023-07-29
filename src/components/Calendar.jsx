export const Calendar = (props) => {
    const { date } = props;

    let weekDay, month, monthEnd, days, lastMonthDays;
    switch (date.getDay()) {
        case 0:
            weekDay = 'Воскресенье';
            break;
        case 1:
            weekDay = 'Понедельник';
            break;
        case 2:
            weekDay = 'Вторник';
            break;
        case 3:
            weekDay = 'Среда';
            break;
        case 4:
            weekDay = 'Четверг';
            break;
        case 5:
            weekDay = 'Пятница';
            break;
        case 6:
            weekDay = 'Суббота';
            break;
        default:
            break;
    }

    switch (date.getMonth()) {
        case 0:
            month = 'Январь';
            lastMonthDays = 31;
            days = 31;
            break;
        case 1:
            month = 'Февраль';
            lastMonthDays = 31;
            days = 28;
            break;
        case 2:
            month = 'Март';
            lastMonthDays = 28;
            days = 31;
            break;
        case 3:
            month = 'Апрель';
            lastMonthDays = 31;
            days = 30;
            break;
        case 4:
            month = 'Май';
            lastMonthDays = 30;
            days = 31;
            break;
        case 5:
            month = 'Июнь';
            lastMonthDays = 31;
            days = 30;
            break;
        case 6:
            month = 'Июль';
            lastMonthDays = 30;
            days = 31;
            break;
        case 7:
            month = 'Август';
            lastMonthDays = 31;
            days = 31;
            break;
        case 8:
            month = 'Сентябрь';
            lastMonthDays = 31;
            days = 30;
            break;
        case 9:
            month = 'Октябрь';
            lastMonthDays = 30;
            days = 31;
            break;
        case 10:
            month = 'Ноябрь';
            lastMonthDays = 31;
            days = 30;
            break;
        case 11:
            month = 'Декабрь';
            lastMonthDays = 30;
            days = 31;
            break;
        default:
            break;
    }

    if (month.slice(-1) === 'т') {
        monthEnd = month + 'a';
    } else {
        monthEnd = month.substring(0, month.length - 1) + 'я';
    }

    const firstDayMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstDayMonthWeek = firstDayMonth.getDay() // 3
    let week1 = [], week2 = [], week3 = [], week4 = [], week5 = [];
    
    if (firstDayMonthWeek === 1) {
        week1 = [1, 2, 3, 4, 5, 6, 7];
    } else if (firstDayMonthWeek === 0) {
        for(let i = 0; i < 6; i += 1) {
            week1[i] = lastMonthDays - 5 + i;
        }
        week1.push(1);  
    } else {
        for(let i = 0; i < firstDayMonthWeek - 1; i += 1) {
            week1[i] = lastMonthDays - (firstDayMonthWeek - 2) + i;
        }                
        for(let i = firstDayMonthWeek - 1; i < 7; i += 1) {
            week1[i] = 1 + i - (firstDayMonthWeek - 1);
        }     
    }

    function doWeekArray(weekPrev, weekNext) {
        for(let i = 0; i < 7; i += 1) {
            weekNext[i] = weekPrev[6] + 1 + i;
        }
    }
    doWeekArray(week1, week2);
    doWeekArray(week2, week3);
    doWeekArray(week3, week4);

    for(let i = 0; i < 7; i += 1) {
        if ((week4[6] + i) < days) {
            week5[i] = week4[6] + 1 + i;
        } else {
            week5[i] = i + 1;
        }
    }

    return (
      <div className="ui-datepicker">
        <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day">{weekDay}</div>
            <div className="ui-datepicker-material-date">
                <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
                <div className="ui-datepicker-material-month">{monthEnd}</div>
                <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
            </div>
        </div>
        <div className="ui-datepicker-header">
            <div className="ui-datepicker-title">
                <span className="ui-datepicker-month">{month}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
            </div>
        </div>
        <table className="ui-datepicker-calendar">
            <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="ui-datepicker-week-end" />
                <col className="ui-datepicker-week-end" />
            </colgroup>
            <thead>
                <tr>
                    <th scope="col" title="Понедельник">Пн</th>
                    <th scope="col" title="Вторник">Вт</th>
                    <th scope="col" title="Среда">Ср</th>
                    <th scope="col" title="Четверг">Чт</th>
                    <th scope="col" title="Пятница">Пт</th>
                    <th scope="col" title="Суббота">Сб</th>
                    <th scope="col" title="Воскресенье">Вс</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {week1.map(r => (r > 7 ? <td className="ui-datepicker-other-month">{r}</td> : 
                    r !== date.getDate() ? <td>{r}</td> : 
                    <td className="ui-datepicker-today">{r}</td>
                    ))}
                </tr>
                <tr>
                    {week2.map(r => (r !== date.getDate() ? <td>{r}</td> : 
                        <td className="ui-datepicker-today">{r}</td>
                    ))}
                </tr>
                <tr>
                    {week3.map(r => (r !== date.getDate() ? <td>{r}</td> : 
                        <td className="ui-datepicker-today">{r}</td>
                    ))}
                </tr>
                <tr>
                    {week4.map(r => (r !== date.getDate() ? <td>{r}</td> : 
                        <td className="ui-datepicker-today">{r}</td>
                    ))}
                </tr>
                <tr>
                    {week5.map(r => (r < 8 ? <td className="ui-datepicker-other-month">{r}</td> : 
                    r !== date.getDate() ? <td>{r}</td> : 
                    <td className="ui-datepicker-today">{r}</td>
                    ))}
                </tr>
            </tbody>
        </table>
      </div>
    )
}
