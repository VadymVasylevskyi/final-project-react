export const API_URL = 'http://localhost:3333'

export const buildUrl = (url, params) => {
    let urlWithParams = url;

    // Object.entries(params).forEach(([key, value], i) => {
    //     const sign = !i ? '?' : "&";
        urlWithParams += params
    // })

    return urlWithParams
}