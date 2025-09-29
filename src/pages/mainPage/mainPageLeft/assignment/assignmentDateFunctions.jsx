
export function get_assignmentTimeStatus(dueDate) {
    let oneDay = 86400000
    let oneHour = 3600000
    let oneMinute = 60000
    let msUntilDue = Math.floor((new Date(dueDate).getTime() - new Date().getTime()))
    let daysUntilDue = msUntilDue / oneDay
    let hoursUntilDue = msUntilDue / oneHour
    let minutesUntilDue = msUntilDue / oneMinute
    
    if (daysUntilDue >= 1 && daysUntilDue >= 2) { return {unit: 'days', value: Math.floor(daysUntilDue)} }
    else if (daysUntilDue >= 1 && daysUntilDue < 2) { return {unit: 'day', value: Math.floor(daysUntilDue)} }
    else if (daysUntilDue < 1 && hoursUntilDue >= 2) { return {unit: 'hours', value: Math.floor(hoursUntilDue)} }
    else if (daysUntilDue < 1 && hoursUntilDue < 2 && hoursUntilDue >= 1) { return {unit: 'hour', value: Math.floor(hoursUntilDue)} }
    else if (minutesUntilDue < 60 && minutesUntilDue >= 2) { return {unit: 'mins', value: Math.floor(minutesUntilDue)} }
    else if (minutesUntilDue < 60 && minutesUntilDue < 2) { return {unit: 'min', value: Math.floor(minutesUntilDue)} }
    else { return {unit: 'overdue', value: 'Overdue'} }
}

export function get_assignmentStatus(timeStatus, isDone) {
    let isOverdue = (timeStatus.value !== 'Overdue') ? timeStatus.value <= 0 : true

    if (isDone === false && !isOverdue) { return 'ongoing' }
    else if (isDone === true) { return 'finished' }
    else if (isDone === false && isOverdue) { return 'overdue' }
}