export function formatarData(dataString: string) {
  const dataFormatada = new Date(dataString)

  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    year: 'numeric',
  }
  const formatoData = new Intl.DateTimeFormat('pt-BR', options)

  return formatoData.format(dataFormatada)
}

// Exemplo de uso:
const dataApi = '2023-02-05T15:06:13Z'
const dataFormatadaString = formatarData(dataApi)

console.log(dataFormatadaString) // Saída: "fev de 2023"
