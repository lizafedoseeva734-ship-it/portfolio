import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svg from '@neodx/svg/vite';

export default defineConfig({
    plugins: [
        react({
            plugins: [
                [
                    '@swc/plugin-styled-components',
                    {
                        displayName: true,
                        fileName: false,
                    },
                ],
            ],
        }),
        svg({
            // inputRoot - новая опция вместо root
            inputRoot: 'src/assets/icons',
            output: 'public',
            group: true,
            // Добавляем metadata для правильной работы
            metadata: 'src/components/Icon/sprite.gen.ts',
            resetColors: {
                replaceUnknown: 'currentColor',
            },
        }),
    ],
});
