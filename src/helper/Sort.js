export default function Sort(data, type) {
    data.sort((a,b) => a[type] - b[type])
    return data
}