import * as React from 'react';
import {
    List,
  //  TextField,
    TagField,
  //  DateField,
    Table,
    useTable,
    Space,
    ShowButton,
    EditButton,
    DeleteButton,
} from "@pankod/refine-antd";
import { IFruit } from '../../interfaces';


export const FruitList: React.FC = () => {
    const { tableProps } = useTable<IFruit>();
    return (
        <List>
            <Table {...tableProps} rowKey="id">

               {/* <Table.Column dataIndex="id" title="id" /> */}
               
                <Table.Column dataIndex="nome" title="nome" />
                <Table.Column
                    dataIndex="descrizione"
                    title="descrizione"
                    render={(value) => <TagField value={value} />}
                />

                <Table.Column<IFruit>
                    title="Actions"
                    dataIndex="actions"
                    render={(_text, record): React.ReactNode => {
                        return (
                            <Space>
                                <ShowButton
                                    size="small"
                                    recordItemId={record.id}
                                    hideText
                                />
                                <EditButton
                                    size="small"
                                    recordItemId={record.id}
                                    hideText
                                />

                                <DeleteButton
                                    size="small"
                                    recordItemId={record.id}
                                    hideText
                                />


                            </Space>
                        );
                    }}
                />


            </Table>
        </List>
    );
};