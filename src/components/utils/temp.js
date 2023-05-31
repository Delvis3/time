export const kelvinToCelsius =(tempk) => {
return `${(tempk-273.15).toFixed(1)}ºC`
}

export const kelvinToFahrenheit = (tempk) =>{
  return `${((tempk-273.15)*(9/5)+32).toFixed(1)}ºF`
}