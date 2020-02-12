
export interface Pagination {
    
    nextState: boolean,
    previousState: boolean,
    page: number,
    perPage: number,
    numberOfPages: number,
    getPage: (page, perpage, baseUrl, filter) => any,
    onNext: ()=>void,
    onPrevious: ()=>void,
}