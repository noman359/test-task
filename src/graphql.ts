
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Customer {
    __typename?: 'Customer';
    name?: Nullable<string>;
    phone_number?: Nullable<string>;
    password?: Nullable<string>;
    email?: Nullable<string>;
}

export interface LoginResp {
    __typename?: 'LoginResp';
    message?: Nullable<string>;
}

export interface IQuery {
    __typename?: 'IQuery';
    login(password?: Nullable<string>, email?: Nullable<string>): Nullable<LoginResp> | Promise<Nullable<LoginResp>>;
}

export interface IMutation {
    __typename?: 'IMutation';
    signUp(name?: Nullable<string>, phone_number?: Nullable<string>, password?: Nullable<string>, email?: Nullable<string>, confirm_password?: Nullable<string>): Nullable<Customer> | Promise<Nullable<Customer>>;
}

type Nullable<T> = T | null;
