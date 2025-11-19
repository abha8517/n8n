import type { BinaryData } from 'n8n-core';
import { v4 as uuid } from 'uuid';

/**
 * Location for binary data associated with chat hub message attachments.
 */
export class ChatHubAttachmentLocation implements BinaryData.FileLocation {
	constructor(
		readonly sessionId: string,
		readonly messageId: string,
	) {}

	toDirectoryPath(): string {
		return `chat-hub/sessions/${this.sessionId}/messages/${this.messageId}`;
	}

	toFileId(): string {
		return `${this.toDirectoryPath()}/binary_data/${uuid()}`;
	}
}
