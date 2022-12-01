import * as React from 'react';
import { useShow, IResourceComponentsProps } from "@pankod/refine-core";

import { Show, Typography, MarkdownField } from "@pankod/refine-antd";
import { IFruit } from '../../interfaces';



const { Title, Text } = Typography;

export const FruitShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow<IFruit>();
    const { data, isLoading } = queryResult;
    const record = data?.data;
/*
    const { data: categoryData, isLoading: categoryIsLoading } =
        useOne<ICategory>({
            resource: "categories",
            id: record?.category.id || "",
            queryOptions: {
                enabled: !!record,
            },
        });

*/

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Id</Title>
            <Text>{record?.id}</Text>

            <Title level={5}>Nome</Title>
            <Text>{record?.nome}</Text>

            <Title level={5}>Descrizione</Title>
            <MarkdownField value={record?.descrizione} />
        </Show>
    );
};
