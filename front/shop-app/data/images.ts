import { GLOBAL_SERVER } from "@/env/env";

export const imageUrl = (src:string) => {
    return `${GLOBAL_SERVER}/images/${src}`;
}