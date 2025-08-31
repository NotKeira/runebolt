export * from './index';

export interface ConfigDefaults {
    server: Required<Omit<import('./index').ServerConfig, 'middleware'>>;
    build: Required<import('./index').BuildConfig>;
    devServer: Required<Omit<import('./index').DevServerConfig, 'middleware'>>;
}

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};