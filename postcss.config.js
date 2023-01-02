if (process.env.NODE_ENV === "production") {
    module.exports = {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
            cssnano: {
                preset: [
                    "default",
                    {
                        discardComments: {
                            removeAll: true,
                        },
                    },
                ],
            },
        },
    }
} else {
    module.exports = {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    }
}