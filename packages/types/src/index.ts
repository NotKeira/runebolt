import { ConsoleConstructorOptions } from "node:console";
import { IncomingMessage, ServerResponse } from "node:http";

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';

export interface RuneBoltRequest extends IncomingMessage {
    params?: Record<string, string>;
    query?: Record<string, string>;
    body?: any;
    json?: () => Promise<any>;
    text?: () => Promise<string>;
};

export interface RuneBoltResponse extends ServerResponse {
    json: (data: any) => void;
    status: (code: number) => RuneBoltResponse;
    send: (data: string | Buffer) => void;
};

export type RouteHandler = (
    req: RuneBoltRequest,
    res: RuneBoltResponse
) => void | Promise<void>;

export interface ApiRoute {
    method: HttpMethod;
    path: string;
    handler: RouteHandler;
};
export type MiddlewareFunction = (
    req: RuneBoltRequest,
    res: RuneBoltResponse,
    next: () => void
) => void | Promise<void>;

export interface ServerConfiguration {
    port?: number;
    host?: string;
    apiPrefix?: string;
    staticPath?: string;
    clientPath?: string;
    middleware?: MiddlewareFunction[];
    cors?: boolean | CorsOptions;
};

export interface CorsOptions {
    origin?: string | string[] | boolean;
    credentials?: boolean;
    methods?: string[];
    allowedHeaders?: string[];
    exposedHeaders?: string[];
    maxAge?: number;
};

export interface BuildConfiguration {
    entry?: string;
    outputPath?: string;
    publicPath?: string;
    mode?: 'development' | 'production';
    sourceMaps?: boolean;
    minify?: boolean;
    analyze?: boolean;
}

export interface DevServerConfiguration extends ServerConfiguration, ServerConfig {
    hot?: boolean;
    liveReload?: boolean;
    overlay?: boolean;
    historyApiFallback?: boolean;
}

export interface RuneBoltConfiguration {
    server?: ServerConfig;
    build?: BuildConfig;
    devServer?: DevServerConfiguration;
}

export interface RouteMatch {
    handler: RouteHandler;
    params: Record<string, string>;
}

export interface RuneBoltError extends Error {
    statusCode?: number;
    expose?: boolean;
}

export interface RuneBoltPlugin {
    name: string;
    setup: (config: RuneBoltConfig) => void | Promise<void>;
}

export interface FileRoute {
    filePath: string;
    routePath: string;
    method: HttpMethod;
    handler: RouteHandler;
}

export interface HotReloadOptions {
    enabled?: boolean;
    port?: number;
    clientLogLevel?: 'none' | 'error' | 'warn' | 'info' | 'log' | 'verbose';
}

// Alias Definitions: I know someone will hate writing "DevServerConfiguration" or "RuneBoltConfiguration"
export interface ServerConfig extends ServerConfiguration { };
export interface ServerRoute extends ApiRoute { };
export interface BuildConfig extends BuildConfiguration { };
export interface DevServerConfig extends DevServerConfiguration { };
export interface RuneBoltConfig extends RuneBoltConfiguration { };