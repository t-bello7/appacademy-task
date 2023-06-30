declare global {
	namespace NodeJS {
		interface ProcessEnv {
			GITHUB_AUTH_TOKEN: string;
			NODE_ENV: 'development' | 'production';
			PORT?: string;
			PWD: string;
			DATABASE_URL: string;
			FRONTEND_DEV_URL: string;
			FRONTEND_PROD_URL: string;
			TOKEN_KEY: string;
		}
	}
}
export {}

