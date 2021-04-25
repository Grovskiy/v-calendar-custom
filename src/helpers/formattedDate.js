// export default (day, month, yeah) => `${day}.${month}.${yeah}`;
export default (day, month, yeah) =>
  `${yeah}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
// 2021-04-01
