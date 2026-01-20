/**
 * Helper to get the correct asset path.
 * When running in WordPress, it uses a global variable injected by the plugin.
 * When running locally in Vite, it defaults to the relative path.
 */
export const getAssetPath = (path) => {
    const base = window.playinConfig?.assetsUrl || '';
    // Remove leading slash from path if it exists to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${base}${cleanPath}`;
};
