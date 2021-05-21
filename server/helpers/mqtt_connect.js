import { url, server_port } from "../environments/index.js"
import mqtt from 'mqtt'

console.log(url)

const mqtt_client = mqtt.connect(url, server_port)

export {
    mqtt_client
}
