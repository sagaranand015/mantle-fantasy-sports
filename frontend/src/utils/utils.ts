export function GetEpochDateTimestampForToday() {
    const d = new Date();
    const epTs = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
    // console.log("======= epoch timestamp is: ", epTs / 1000, d);
    return (epTs / 1000).toString();
}

export function GetEpochTimestampToday() {
    const d = GetDateStringFromDate(new Date());
    const epTs = (new Date(d)).getUTCSeconds();
    console.log("======= epoch timestamp is: ", epTs / 1000, d);
    return (epTs / 1000).toString();
}

export function GetDateStringFromDate(dateTime: Date) {
    return (dateTime.getUTCFullYear().toString() + "-" + dateTime.getUTCMonth().toString() + "-" + dateTime.getUTCDate().toString()).toString();
}

export function GetCurrentUTCDateString() {
    const d = new Date();
    return (d.getUTCFullYear().toString() + "-" + (d.getUTCMonth() + 1).toString() + "-" + d.getUTCDate().toString()).toString();
}

export function GetRandomInt() {
    const n = Math.floor(Math.random() * 6);
    if (n <= 2) {
        return 3;
    }
    return n;
}
