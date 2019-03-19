/**
 * @file Gerencia a lista publica de itens de vendedores do Mercado Livre
 *
 * @author David Silva <https://github.com/sr2ds>
 * 
 * @requires NPM:axios
 */

import axios from 'axios'

/**
 * Retorna as configurações padrões do módulo
 * TODO: 
 *  Permitir seller_id como parâmetro
 */

var DEFAULT = {
    seller_id: '130052616',
    url: 'https://api.mercadolibre.com/sites/MLB/search',
};

const mercadolivre = {

    /**
     *  Define o seller_id para consulta de itens
     * @param {integer} seller_id 
     */
    setSellerId(seller_id) {
        DEFAULT = {
            seller_id: seller_id ? seller_id : `130052616`
        }
    },

    /**
     * Retorna o total de itens ativos que o vendedor publicou
     */
    async getTotalItens() {
        const response = await axios.get(`${DEFAULT.url}?seller_id=${DEFAULT.seller_id}`)
        return response.data.paging.total
    },

    /**
     * Retorna a lista de itens do vendedor
     * @param {integer} offset 
     */
    async getItens(offset = null) {

        const response = await axios.get(
            `${DEFAULT.url}?seller_id=${DEFAULT.seller_id}&offset=${offset}`
        );

        return response.data.results
    }
}

export default mercadolivre;