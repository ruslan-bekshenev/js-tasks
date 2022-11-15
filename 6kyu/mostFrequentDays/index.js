function mostFrequentDays(year){
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const leap = new Date(year, 1, 29).getMonth() === 1;
    const frequent = (new Date(year, 0, 1).getDay() + 6) % 7;
    return (leap ? [frequent, (frequent + 1) % 7].sort() : [frequent]).map((day) => days[day]);
}