//% weight=100 color=#4CAF50 icon="\uf0c7"
namespace storageBlocks {

    const prefix = "f_";

    //% block="make file named %name"
    export function makeFile(name: string): void {
        settings.writeString(prefix + name, "")
    }

    //% block="does file %name exist"
    export function fileExists(name: string): boolean {
        return settings.exists(prefix + name)
    }

    //% block="set file %name to %value"
    export function setFile(name: string, value: string): void {
        settings.writeString(prefix + name, value)
    }

    //% block="get file %name"
    export function getFile(name: string): string {
        return settings.readString(prefix + name)
    }

    //% block="delete file %name"
    export function deleteFile(name: string): void {
        settings.remove(prefix + name)
    }
}
