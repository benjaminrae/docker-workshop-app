import {Entity, model, property} from '@loopback/repository';

@model()
export class Todo extends Entity {
    @property({
        type: 'string',
        id: true,
        postgresql: {
            datatype: 'uuid',
        },
        defaultFn: 'uuid'
    })
    id: string;

    @property({
        type: 'string',
    })
    title: string;


    @property({
        type: 'string',
    })
    description?: string;

    @property({
        type: 'string',
        default: 'todo',
    })
    status: 'todo' | 'doing' | 'done';

    constructor(data?: Partial<Todo>) {
        super(data);
    }
}

export interface TodoRelations {
    // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
