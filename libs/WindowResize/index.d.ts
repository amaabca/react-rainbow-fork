declare class WindowResize {
    constructor();
    startListening(callback: (event: UIEvent) => void): void;
    stopListening(): void;
}
export default WindowResize;
