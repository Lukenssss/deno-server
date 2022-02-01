import { opine } from 'https://deno.land/x/opine@2.1.1/mod.ts'

const app = opine()
const PORT = 5001

app.get('/', (req, res) => {
    res.send("Hola!")
})

app.listen(PORT, () => {
    console.log(`Listening ${PORT}!`)
})
