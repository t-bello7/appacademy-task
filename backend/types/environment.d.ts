declare global {
	namespace NodeJS {
		interface ProcessEnv {
			GITHUB_AUTH_TOKEN: string;
			NODE_ENV: 'development' | 'production';
			PORT?: string;
			PWD: string;
			DATABASE_URL: string;
		}
		interface authRequest extends Request {
			username: string 
			password: string
		}
	}
}
export {}

