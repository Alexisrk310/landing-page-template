/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_EPAYCO_PUBLIC_KEY: string;
	// aquí puedes agregar más variables de entorno si quieres
	// readonly VITE_API_URL: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
