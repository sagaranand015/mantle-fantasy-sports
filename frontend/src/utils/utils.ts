export function GetEpochTimestampForToday() {

}

export function GetEpochTimestampForDate(dateTimeStr: string) {
    const epTs = (new Date(dateTimeStr)).getTime();
    // console.log("======= epoch timestamp is: ", epTs / 1000);
    return (epTs / 1000).toString();
}

export function GetDateStringFromDate(dateTime: Date) {
    return (dateTime.getFullYear().toString() + "-" + dateTime.getMonth().toString() + "-" + dateTime.getDate().toString()).toString();
}

export function GetRandomInt() {
    const n = Math.floor(Math.random() * 6);
    if (n <= 2) {
        return 3;
    }
    return n;
}
