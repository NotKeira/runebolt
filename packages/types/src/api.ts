export * from './index';


export interface ApiResponse<T = any> {
    data?: T;
    error?: string;
    message?: string;
    statusCode: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

export interface ValidationError {
    field: string;
    message: string;
    code: string;
}