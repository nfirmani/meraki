import * as React from 'react';

import {
    Create,
    Form,
    Input,
   // Select,
    useForm,
   // useSelect,
} from "@pankod/refine-antd";
import { IFruit } from '../../interfaces';

//import { IPost } from "interfaces";

export const FruitCreate = () => {
    const { formProps, saveButtonProps } = useForm<IFruit>();
   // const { selectProps: categorySelectProps } = useSelect<IFruit>({
   //     resource: "categories",
   // });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Nome"
                    name="nome"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Descrizione"
                    name="descrizione"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                    {/*}
                    <Select
                        options={[
                            {
                                label: "Published",
                                value: "published",
                            },
                            {
                                label: "Draft",
                                value: "draft",
                            },
                            {
                                label: "Rejected",
                                value: "rejected",
                            },
                        ]}
                    />
                    */}

                </Form.Item>

            {/*

                <Form.Item
                    label="Category"
                    name={["category", "id"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...categorySelectProps} />
                </Form.Item>

                */}

            </Form>
        </Create>
    );
};