import { environment } from 'src/environments/environment';
export const ENDPOINT: String = environment.production ? "http://ssponline.zpluscybertech.com/api/" : "http://localhost:53125/";
// export const APIConstant: string = ENDPOINT + "api/";
export const APIConstant: string = "http://ssponline.zpluscybertech.com/api/" + "api/";
export const PAGESIZE: number = 5;
export const PAGESTODISPLAY = 5;