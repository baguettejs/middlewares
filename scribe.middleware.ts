import {MiddlewareHandler} from "@baguettejs/core";

export const logRequest: MiddlewareHandler = async (req, res: any, next) => {
    const start = Date.now();

    await next();

    const duration = Date.now() - start;

    console.log(
        `[${new Date().toLocaleString()}] ${req.method} ${req.url} → ${res.statusCode} (${duration}ms)`
    );
};
