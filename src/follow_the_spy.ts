/**
 * Based on the provided routes:
 * 
 * [ [USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN] ]
 * 
 * The correct sequence of destinations is:
 * 
 * "USA, BRA, UAE, JPN, PHL"
 * 
 * Note:

You can safely assume that there will be no duplicate locations with distinct routes.
All routes provided will have non-empty itineraries.
There will always be at least one (1) route connecting one waypoint to another.
 */

// link: https://www.codewars.com/kata/5899a4b1a6648906fe000113/train/javascript

type Route = [string, string];

function getDestinations(routes: Route[]): string {
    const grafo: Record<string, string[]> = {}
    const entradas: Record<string, number> = {}
    const saidas: Record<string, number> = {}    

    
    for (const [origem, destino] of routes) {
        // ideia é criar um grafo com essa estrutura { origem: [destino], origem: [destino], origem: [destino]}
        if (!grafo[origem]) grafo[origem] = [];
        grafo[origem].push(destino)
        
        // primeira posição teve saida
        if (!entradas[destino]) entradas[destino] = 0
        // declarar as posições de saida tanto para a entrada como a possivel saida tb do destino 
        if (!saidas[origem]) saidas[origem] = 0
        if (!saidas[destino]) saidas[destino] = 0
        
        entradas[destino]++
        saidas[origem]++
    }
    
    // tem saidas e nenhuma entrada
    let start: string | undefined = undefined
    
    for (const cidades in saidas) {
        if (saidas[cidades] > 0 && !entradas[cidades]) {
            start = cidades;
            break
        }
    }
    
    let atual: string | undefined = start;
    const sequencia: string[] = [];

    while(atual) {
        sequencia.push(atual);
        // valor do primeiro nó do grafo correspondente a proxima posição 
        atual = grafo[atual]?.shift();        
    }

    return sequencia.join(', ')
}

// Exemplo de uso
const rotas: Route[] = [["USA", "BRA"], ["JPN", "PHL"], ["BRA", "UAE"], ["UAE", "JPN"]];
const sequenciaDeDestinos = getDestinations(rotas);
console.log(sequenciaDeDestinos);
