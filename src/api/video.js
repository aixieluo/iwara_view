import service from "../untils/request";

export function index(page, perPage) {
    return service.get(`/video?page=${page}&perPage=${perPage}`)
}
