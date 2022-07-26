const os = require('os')
const infoSys = {
    Argumentos: process.argv.slice(2),
    Sistema: process.platform,
    VersionNode: process.version,
    Memoria: process.memoryUsage().rss,
    Path: process.execPath,
    ID: process.pid,
    Carpeta: process.cwd(),
    Procesadores: os.cpus().length
}

module.exports={infoSys}