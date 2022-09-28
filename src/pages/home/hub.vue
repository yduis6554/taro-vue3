
<template>
    <header></header>
    <div>
        我是首页
    </div>
</template>
  
<script lang="ts">
// @ is an alias to /src
import appConfig from "@/app.config";

import header from "@/pagesSub/home/header.vue"

import hub from "@/services/hubs"
import Taro from "@tarojs/taro";

export default {

    Comment: {
        header
    },

    methods() {

    },
    // 生命周期书写 
    mounted() {
        // if (Taro.getEnv() == Taro.ENV_TYPE.WEAPP) {
        //     console.log(hub)

        //     hub.on("Ping", ping => {

        //         console.log(ping)
        //         // let [type, id] = parseMessage(ping);

        //         // console.log(`${type} ${id}`);
        //         hub.send("Pong", `pong ${6 + 1}`);
        //     })
        //     // hub.connection.on("ReceiveMessage", (message: any) => {
        //     //     console.log('signalr 收到消息:', message)
        //     // });
        //     // connection.start()
        //     //     .catch(e => {
        //     //         console.log(`连接失败`);
        //     //         console.log(e);
        //     //     });

        //     let xid = 0;
        //     setInterval(() => {
        //         let pong = hub.invoke("Ping", `ping ${xid++ + 1}`) as string;
        //         // let [type, id] = parseMessage(pong);
        //         console.log(`pong  ${pong}`);
        //     }, 8000);

        // }
    },



}
</script>
  