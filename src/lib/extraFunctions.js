export function timeClock() {
  const now = new Date(); 
  const hours = now.getHours(); 
  let minutes = now.getMinutes(); 
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const timeString = hours + ':' + minutes;
  return timeString;
}