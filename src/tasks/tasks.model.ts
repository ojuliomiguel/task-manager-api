export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaksStatus;
    attachmentTask: any;
}

export enum TaksStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'      
}