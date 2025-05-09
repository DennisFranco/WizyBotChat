/**
 * A list of predefined bot responses to simulate conversation.
 */
const responses = [
    "Sure, I can help you with that!",
    "Could you please provide more details?",
    "Let me check that for you.",
    "Sounds interesting!",
    "Can you clarify your request?",
    "Great! Let's move forward.",
  ];
  
  /**
   * Selects and returns a random message from the predefined responses list.
   * Used to simulate the bot's behavior after receiving a user message.
   * @returns A string representing the bot's reply
   */
  export function getRandomResponse(): string {
    return responses[Math.floor(Math.random() * responses.length)];
  }
  