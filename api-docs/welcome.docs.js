const welcomePage = {
    tags: ['landing page'],
    description: "Landing page",
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    type: "object",
                    example: {
                        status: "success",
                        data: []
                    }
                }
            }
        }
    }
}


export const welcomeRouteDocs = {

    "/": {
        get: welcomePage
    }
}