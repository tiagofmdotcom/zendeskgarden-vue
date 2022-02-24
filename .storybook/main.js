const path = require('path');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-postcss'
    ],
    framework: '@storybook/vue3',

    webpackFinal: async (config) => ({
        ...config,

        module: {
            rules: [
                ...config?.module?.rules,
                {
                    test: /\.s(a|c)ss$/,
                    include: path.resolve(__dirname, '../'),
                    use: [
                        // Creates `style` nodes from JS strings
                        'vue-style-loader',
                        // Translates CSS into CommonJS
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 1 }
                        },
                        'postcss-loader', 
                        // Compiles Sass to CSS
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }
            ]
        },

        resolve: {
            ...config.resolve,
            alias: {
                ...config.resolve?.alias,
                '@': path.resolve(__dirname, '../src/'),
                '@stories': path.resolve(__dirname, '../src/stories/')
            }
        }
    })
};
