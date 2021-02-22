import service from "../untils/request";

export function index(page, perPage, search) {
    let url = `/video?page=${page}&perPage=${perPage}&title=${search.title}&view=${search.view}&star=${search.star}`
    return service.get(url)
}

export function show(hash) {
    return service.get(`/video/${hash}/show`)
}
