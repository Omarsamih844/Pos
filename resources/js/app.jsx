import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Check if we're in a browser environment
if (typeof window !== 'undefined') {
    createInertiaApp({
        title: (title) => `${title} - ${appName}`,
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.jsx`,
                import.meta.glob('./Pages/**/*.jsx'),
            ),
        setup({ el, App, props }) {
            try {
                const root = createRoot(el);
                root.render(<App {...props} />);
            } catch (error) {
                console.error('Error rendering app:', error);
            }
        },
        progress: {
            color: '#4B5563',
        },
    }).catch(error => {
        console.error('Error initializing Inertia app:', error);
    });
}
