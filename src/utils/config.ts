export const api: string = `${process.env.NEXT_PUBLIC_API_URL}`
// export const api:string = 'https://api.themoviedb.org/3/movie/top_rated?api_key=80ee765c29a0d041b276056a1a3cf86e'

export const requestConfig = (method: string) => {
    let config: any = {
        method,
        headers: {}
    }
    // if (method === 'GET') {
    //     config = {
    //         method,
    //         headers: {

    //         },
    //     }
    // }
    // else {
    //     config = {
    //         method,
    //         body: JSON.stringify(data),
    //         headers: {
    //             "Content-Type": "application/json",
    //             "accept": "application/json"
    //         },
    //         withCredentials: true,
    //     }
    // }
    return config;
}