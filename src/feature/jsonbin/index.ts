import { StatusCodes } from "http-status-codes";

export interface ApiRequest {
    endpoint: string,
    method: string,
    queryParams?: URLSearchParams,
    bodyJson?: object,
    requestCache?: RequestCache,
    revalidate?: number | false,
    cacheTags?: string[]
}
export interface ApiResponse<T> {
    readonly ok: boolean,
    readonly status: number,
    errors?: Record<string, string[]>
    data?: T,
}

export async function callApi<T>(apiRequest: ApiRequest): Promise<ApiResponse<T>> {
    let url = `https://jsonbin.org/${process.env.JSONBIN_ACCOUNT}/${apiRequest.endpoint}`
    if (apiRequest.queryParams) {
        url += `?${apiRequest.queryParams}`
    }

    //console.log(`callApi | ${apiRequest.method} | ${url} | Payload: ${JSON.stringify(apiRequest.bodyJson)}`)

    const accessToken = process.env.JSONBIN_APIKEY;

    const headers = new Headers()
    headers.append("Authorization", `token ${accessToken}`)
    headers.append("Content-Type", "application/json")

    const request: RequestInit = {
        headers: headers,
        method: apiRequest.method,
        cache: apiRequest.requestCache,
        next: {
            tags: apiRequest.cacheTags,
            revalidate: apiRequest.revalidate
        }
    }

    if (apiRequest.bodyJson) {
        request.body = JSON.stringify(apiRequest.bodyJson)
    }

    const response = await fetch(url, request)

    //console.log(response.headers.get(''))

    const apiResponse: ApiResponse<T> = {
        ok: response.ok,
        status: response.status
    }

    try {
        const json = await response.json();

        //console.log(`callApi | ${apiRequest.method} | ${url} | Response: `, json)

        if (response.ok) {
            apiResponse.data = json;
        }
        else if (response.status === StatusCodes.BAD_REQUEST) {
            apiResponse.errors = json.errors;
        }
    }
    catch {
        console.log(`Failed to parse JSON from API | ${url} | ${response.status}`)
    }

    return apiResponse
}