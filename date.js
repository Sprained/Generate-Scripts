/**
 * Autor: Gabriel Resende
 * Data de Criação: 10/05/2021
 * Função: Gerar data aleatoria entre duas datas
 */
function randomDate(start, end) {
    function appendLeadingZeroes(n) {
        if (n <= 9) {
            return "0" + n;
        }
        return n
    }
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    return `${date.getFullYear()}-${appendLeadingZeroes(date.getMonth() + 1)}-${appendLeadingZeroes(date.getDate())}`;
}

//Para uso no postman
pm.environment.set('randomDate', randomDate(new Date(1950, 0, 1), new Date(2015, 0, 1)));