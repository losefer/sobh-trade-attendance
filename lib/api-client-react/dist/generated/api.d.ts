import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { AttendanceInput, AttendanceRecord, Employee, EmployeeInput, EmployeeSummary, EmployeeUpdate, GetAttendanceSummaryParams, GetMonthlyStatsParams, HealthStatus, ListAttendanceParams, MonthlyStats } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListEmployeesUrl: () => string;
/**
 * @summary List all employees
 */
export declare const listEmployees: (options?: RequestInit) => Promise<Employee[]>;
export declare const getListEmployeesQueryKey: () => readonly ["/api/employees"];
export declare const getListEmployeesQueryOptions: <TData = Awaited<ReturnType<typeof listEmployees>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listEmployees>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listEmployees>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListEmployeesQueryResult = NonNullable<Awaited<ReturnType<typeof listEmployees>>>;
export type ListEmployeesQueryError = ErrorType<unknown>;
/**
 * @summary List all employees
 */
export declare function useListEmployees<TData = Awaited<ReturnType<typeof listEmployees>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listEmployees>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateEmployeeUrl: () => string;
/**
 * @summary Create a new employee
 */
export declare const createEmployee: (employeeInput: EmployeeInput, options?: RequestInit) => Promise<Employee>;
export declare const getCreateEmployeeMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createEmployee>>, TError, {
        data: BodyType<EmployeeInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createEmployee>>, TError, {
    data: BodyType<EmployeeInput>;
}, TContext>;
export type CreateEmployeeMutationResult = NonNullable<Awaited<ReturnType<typeof createEmployee>>>;
export type CreateEmployeeMutationBody = BodyType<EmployeeInput>;
export type CreateEmployeeMutationError = ErrorType<unknown>;
/**
* @summary Create a new employee
*/
export declare const useCreateEmployee: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createEmployee>>, TError, {
        data: BodyType<EmployeeInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createEmployee>>, TError, {
    data: BodyType<EmployeeInput>;
}, TContext>;
export declare const getUpdateEmployeeUrl: (id: number) => string;
/**
 * @summary Update an employee
 */
export declare const updateEmployee: (id: number, employeeUpdate: EmployeeUpdate, options?: RequestInit) => Promise<Employee>;
export declare const getUpdateEmployeeMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateEmployee>>, TError, {
        id: number;
        data: BodyType<EmployeeUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateEmployee>>, TError, {
    id: number;
    data: BodyType<EmployeeUpdate>;
}, TContext>;
export type UpdateEmployeeMutationResult = NonNullable<Awaited<ReturnType<typeof updateEmployee>>>;
export type UpdateEmployeeMutationBody = BodyType<EmployeeUpdate>;
export type UpdateEmployeeMutationError = ErrorType<void>;
/**
* @summary Update an employee
*/
export declare const useUpdateEmployee: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateEmployee>>, TError, {
        id: number;
        data: BodyType<EmployeeUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateEmployee>>, TError, {
    id: number;
    data: BodyType<EmployeeUpdate>;
}, TContext>;
export declare const getDeleteEmployeeUrl: (id: number) => string;
/**
 * @summary Delete an employee
 */
export declare const deleteEmployee: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteEmployeeMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteEmployee>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteEmployee>>, TError, {
    id: number;
}, TContext>;
export type DeleteEmployeeMutationResult = NonNullable<Awaited<ReturnType<typeof deleteEmployee>>>;
export type DeleteEmployeeMutationError = ErrorType<void>;
/**
* @summary Delete an employee
*/
export declare const useDeleteEmployee: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteEmployee>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteEmployee>>, TError, {
    id: number;
}, TContext>;
export declare const getListAttendanceUrl: (params?: ListAttendanceParams) => string;
/**
 * @summary List attendance records
 */
export declare const listAttendance: (params?: ListAttendanceParams, options?: RequestInit) => Promise<AttendanceRecord[]>;
export declare const getListAttendanceQueryKey: (params?: ListAttendanceParams) => readonly ["/api/attendance", ...ListAttendanceParams[]];
export declare const getListAttendanceQueryOptions: <TData = Awaited<ReturnType<typeof listAttendance>>, TError = ErrorType<unknown>>(params?: ListAttendanceParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAttendance>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listAttendance>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListAttendanceQueryResult = NonNullable<Awaited<ReturnType<typeof listAttendance>>>;
export type ListAttendanceQueryError = ErrorType<unknown>;
/**
 * @summary List attendance records
 */
export declare function useListAttendance<TData = Awaited<ReturnType<typeof listAttendance>>, TError = ErrorType<unknown>>(params?: ListAttendanceParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAttendance>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpsertAttendanceUrl: () => string;
/**
 * @summary Upsert an attendance record for a specific day
 */
export declare const upsertAttendance: (attendanceInput: AttendanceInput, options?: RequestInit) => Promise<AttendanceRecord>;
export declare const getUpsertAttendanceMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof upsertAttendance>>, TError, {
        data: BodyType<AttendanceInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof upsertAttendance>>, TError, {
    data: BodyType<AttendanceInput>;
}, TContext>;
export type UpsertAttendanceMutationResult = NonNullable<Awaited<ReturnType<typeof upsertAttendance>>>;
export type UpsertAttendanceMutationBody = BodyType<AttendanceInput>;
export type UpsertAttendanceMutationError = ErrorType<unknown>;
/**
* @summary Upsert an attendance record for a specific day
*/
export declare const useUpsertAttendance: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof upsertAttendance>>, TError, {
        data: BodyType<AttendanceInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof upsertAttendance>>, TError, {
    data: BodyType<AttendanceInput>;
}, TContext>;
export declare const getGetAttendanceSummaryUrl: (params: GetAttendanceSummaryParams) => string;
/**
 * @summary Get monthly attendance summary per employee
 */
export declare const getAttendanceSummary: (params: GetAttendanceSummaryParams, options?: RequestInit) => Promise<EmployeeSummary[]>;
export declare const getGetAttendanceSummaryQueryKey: (params?: GetAttendanceSummaryParams) => readonly ["/api/attendance/summary", ...GetAttendanceSummaryParams[]];
export declare const getGetAttendanceSummaryQueryOptions: <TData = Awaited<ReturnType<typeof getAttendanceSummary>>, TError = ErrorType<unknown>>(params: GetAttendanceSummaryParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAttendanceSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAttendanceSummary>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAttendanceSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getAttendanceSummary>>>;
export type GetAttendanceSummaryQueryError = ErrorType<unknown>;
/**
 * @summary Get monthly attendance summary per employee
 */
export declare function useGetAttendanceSummary<TData = Awaited<ReturnType<typeof getAttendanceSummary>>, TError = ErrorType<unknown>>(params: GetAttendanceSummaryParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAttendanceSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetMonthlyStatsUrl: (params: GetMonthlyStatsParams) => string;
/**
 * @summary Get overall monthly statistics (total present, absent across all employees)
 */
export declare const getMonthlyStats: (params: GetMonthlyStatsParams, options?: RequestInit) => Promise<MonthlyStats>;
export declare const getGetMonthlyStatsQueryKey: (params?: GetMonthlyStatsParams) => readonly ["/api/attendance/monthly-stats", ...GetMonthlyStatsParams[]];
export declare const getGetMonthlyStatsQueryOptions: <TData = Awaited<ReturnType<typeof getMonthlyStats>>, TError = ErrorType<unknown>>(params: GetMonthlyStatsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMonthlyStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMonthlyStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMonthlyStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getMonthlyStats>>>;
export type GetMonthlyStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get overall monthly statistics (total present, absent across all employees)
 */
export declare function useGetMonthlyStats<TData = Awaited<ReturnType<typeof getMonthlyStats>>, TError = ErrorType<unknown>>(params: GetMonthlyStatsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMonthlyStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map