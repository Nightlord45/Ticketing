const nextConfig ={
    webpack: (config) => {
        return {
            ...config,
            watchOptions: {
                ...config.watchOptions,
                poll: 300
            }
        };
    },
    allowedDevOrigins: ['ticketing.dev']
};

export default nextConfig