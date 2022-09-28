import { HubConnectionBuilder, HubConnection } from '@/services/wechat-app-signalr'
import config from '@/config/index';
import Taro from '@tarojs/taro';
let connection: any = null;
if (Taro.getEnv() == Taro.ENV_TYPE.WEAPP) {
    connection = new HubConnectionBuilder()
        .withUrl(config.signalrUrl)
        .withAutomaticReconnect()
        .build();
} else {
    connection = null;
}
export default connection;