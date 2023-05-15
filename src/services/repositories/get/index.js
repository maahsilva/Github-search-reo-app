import {api} from '../../api'

export const get = async (search, page, perPage) => {
    console.log(search, page, perPage, 'states')
    try {
        const response = await api.get(`/search/repositories?q=${search}&per_page=${perPage}&page=${page}`)

        return { data:response.data.items, error: false }
    } catch (error) {
        console.log(error, 'error')
        return { data:[], error:true }
    }
}