import Fastify from 'fastify'
import { getPlayList } from './list.js'
import itv from './itv.js'
import ysptp from './ysptp.js'


const fastify = Fastify({
    logger: true
})

const address = process.env['ADDRESS']
const basePath = process.argv[2] ? `/${process.argv[2]}` : process.env['BASE_PATH'] ? `/${process.env['BASE_PATH']}` : ''

fastify.get(`${basePath}/tv.m3u`, (req, reply) => {
    reply.header('Content-Type', 'application/octet-stream')
    reply.header('Content-Disposition', 'attachment; filename=tv.m3u')

    const rootPath = address??`${req.protocol}://${req.hostname}`
    reply.send(getPlayList(rootPath))
})

fastify.get(`/:path/:rid`, async (request, reply) => {
    const { path, rid } = request.params
    const { ts, cdn, wsTime } = request.query
    switch (path) {
        case "itv":
            if (ts) {
                return await itv.handleTs(request, reply, ts)
            } else {
                return await itv.handleMain(request, reply, cdn, rid)
            }
            break
        case "ysptp":
            if (ts) {
                return await ysptp.handleTs(request, reply, ts, wsTime)
            } else {
                return await ysptp.handleMain(request, reply, rid)
            }
            break

        default:
            reply.code(404).send('Not found')
    }
})

fastify.post('/test/:params', function (request, reply) {
    console.log(request.body)
    console.log(request.query)
    console.log(request.params)
    console.log(request.headers)
    console.log(request.raw)
    console.log(request.server)
    console.log(request.id)
    console.log(request.ip)
    console.log(request.ips)
    console.log(request.hostname)
    console.log(request.protocol)
    console.log(request.url)
    console.log(request.routeOptions.method)
    console.log(request.routeOptions.bodyLimit)
    console.log(request.routeOptions.method)
    console.log(request.routeOptions.url)
    console.log(request.routeOptions.attachValidation)
    console.log(request.routeOptions.logLevel)
    console.log(request.routeOptions.version)
    console.log(request.routeOptions.exposeHeadRoute)
    console.log(request.routeOptions.prefixTrailingSlash)
    console.log(request.routeOptions.logLevel)
    request.log.info('some info')
  })

const start = async () => {
    itv.setup(fastify)
    try {
        await fastify.listen({ port: 32888, host: '0.0.0.0' })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
