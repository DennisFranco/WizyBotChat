export interface Product {
    id: string;
    name: string;
    image: string;
    link: string;
    price?: number;
}

export interface ChatMessage {
    id: string;
    text: string;
    sender: "user" | "bot";
    isTyping?: boolean;
    type?: "text" | "product"; // NEW: distinguish between normal messages and product responses
    timestamp?: string;
}
