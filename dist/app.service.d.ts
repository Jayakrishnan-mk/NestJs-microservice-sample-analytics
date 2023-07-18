import { CreateUserEvent } from './create-user.event';
export declare class AppService {
    private readonly analytics;
    getHello(): string;
    handleUserCreated(data: CreateUserEvent): void;
    getAnalytics(): any[];
}
