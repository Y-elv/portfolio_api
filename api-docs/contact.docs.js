
const contact = {
    tags: ['Contact'],
    description: "create a message",
    requestBody: {
        content: {
            "multipart/form-data": {
                schema: {
                    type: "object",
                    properties: {
                        from: {
                            type: "string",
                            format: "email",
                            description: "email address of sender"

                        },
                        name: {
                            type: "string",
                            description: "names of sender"
                        },
                        message: {
                            type: "string",
                            description: "Email message"
                        }
                    }
                }
            }
        }
    },
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


export const contactRouteDocs = {

    "/api/v1/contact": {
        post: contact
    }
}