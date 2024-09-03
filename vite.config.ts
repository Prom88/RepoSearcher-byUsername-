import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/RepoSearcher',
	build: {
		outDir: 'build', // имя общей выходной директории
	},
})
