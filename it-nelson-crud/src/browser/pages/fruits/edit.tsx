import * as React from 'react';

import {
    useForm,
    Form,
    Input,
 //   Select,
    Edit,
   
   // useSelect,
} from "@pankod/refine-antd";

import { IFruit } from "../../interfaces";


export const FruitEdit: React.FC = () => {
    const { formProps, saveButtonProps, queryResult} = useForm<IFruit>();   //, queryResult 

   
    
    const postData = queryResult?.data?.data;
    defaultValue: postData?.id

   

    

   // const { selectProps: categorySelectProps } = useSelect<IFruit>({
   //     resource: "categories",
   //     defaultValue: queryResult?.data?.data?.category.id,
   // });

    return (
        <Edit saveButtonProps={saveButtonProps}>
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
              {/*      <Select
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
        </Edit>
    );
};