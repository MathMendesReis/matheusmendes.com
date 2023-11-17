export function formatDate(createdAtString:string):string {
  const date = new Date(createdAtString);
  const month = getMonth(date.getMonth() + 1);
  const year = date.getFullYear();

  const formattedDate = month + " de " + year;
  return formattedDate;


}


function getMonth(mes: number): string {
  switch (mes) {
    case 1:
      return 'janeiro';
    case 2:
      return 'fevereiro';
    case 3:
      return 'março';
    case 4:
      return 'abril';
    case 5:
      return 'maio';
    case 6:
      return 'junho';
    case 7:
      return 'julho';
    case 8:
      return 'agosto';
    case 9:
      return 'setembro';
    case 10:
      return 'outubro';
    case 11:
      return 'novembro';
    case 12:
      return 'dezembro';
    default:
      return 'mês inválido';
  }
}