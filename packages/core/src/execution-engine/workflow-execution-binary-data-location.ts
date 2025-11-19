import { v4 as uuid } from 'uuid';

import type { BinaryData } from '../binary-data/types';

/**
 * Location for binary data associated with workflow executions.
 */
export class WorkflowExecutionBinaryDataLocation implements BinaryData.FileLocation {
	constructor(
		readonly workflowId: string,
		readonly executionId: string,
	) {}

	toDirectoryPath(): string {
		// Handle edge case where executionId might be missing (see PR #7244)
		const executionId = this.executionId || 'temp';
		return `workflows/${this.workflowId}/executions/${executionId}`;
	}

	toFileId(): string {
		return `${this.toDirectoryPath()}/binary_data/${uuid()}`;
	}

	getLegacyExecutionId(): string | undefined {
		return this.executionId;
	}
}
